import { Stack } from '@mui/material';
import { FileType, FileUploader, StatusType } from 'pkg.inputs.fileuploader';
import { SetStateAction, useState } from 'react';

const awaitPromise = async () =>
  new Promise((res) => {
    setTimeout(() => {
      res('');
    }, 3000);
  });

const id = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

const AsyncFileUploader = () => {
  // single
  const [file1, setFile1] = useState<FileType | null>(null);
  const [file2, setFile2] = useState<FileType | null>(null);
  const [file3, setFile3] = useState<FileType | null>(null);

  const onChangeFile1 = async (file: File) => {
    setFile1({ name: file.name, status: 'pending' });
    await awaitPromise();
    setFile1((file) => ({ name: file?.name, status: 'failed' }));
  };
  const onChangeFile2 = async (file: File) => {
    setFile2({ name: file.name, status: 'pending' });
    await awaitPromise();
    setFile2((file) => ({ name: file?.name, status: 'completed' }));
  };
  const onChangeFile3 = async (file: File) => {
    setFile3({ name: file.name, status: 'pending' });
    await awaitPromise();
    setFile3((file) => ({ name: file?.name, status: 'idle' }));
  };

  const onDeleteFile1 = () => {
    setFile1(null);
  };
  const onDeleteFile2 = () => {
    setFile2(null);
  };
  const onDeleteFile3 = () => {
    setFile3(null);
  };

  // multiple
  const [files1, setFiles1] = useState<FileType[]>([]);
  const [files2, setFiles2] = useState<FileType[]>([]);
  const [files3, setFiles3] = useState<FileType[]>([]);

  const onChangeFiles = async (
    initState: FileType[],
    files: File[],
    setState: (value: SetStateAction<FileType[]>) => void,
    initStatus: StatusType,
    completedStatus: StatusType,
  ) => {
    const loadedFiles = files.map((file) => ({
      name: file.name,
      status: initStatus,
      id: id(),
    }));
    setState([...initState, ...loadedFiles]);
    await awaitPromise();
    setState((files) =>
      files.map((file) => {
        const foundFile = loadedFiles.find((el) => el.id === file.id);
        if (foundFile) return { ...file, status: completedStatus };
        return file;
      }),
    );
  };

  const onChangeFiles1 = async (files: File[]) => {
    onChangeFiles(files1, files, setFiles1, 'pending', 'succeeded');
  };
  const onChangeFiles2 = async (files: File[]) => {
    onChangeFiles(files2, files, setFiles2, 'pending', 'failed');
  };
  const onChangeFiles3 = async (files: File[]) => {
    onChangeFiles(files3, files, setFiles3, 'pending', 'idle');
  };

  const onDeleteFiles1 = (id: string) => {
    setFiles1(files1.filter((file) => file.id !== id));
  };
  const onDeleteFiles2 = (id: string) => {
    setFiles2(files2.filter((file) => file.id !== id));
  };
  const onDeleteFiles3 = (id: string) => {
    setFiles3(files3.filter((file) => file.id !== id));
  };

  const onAbort = (id: string) => {
    // const xhr = new XMLHttpRequest()
    // xhr.abort();
    setFiles1((state) => state.filter((file) => file.id !== id));
  };

  return (
    <Stack direction="row" spacing={2}>
      <Stack direction="column" sx={{ width: '500px', p: '10px' }} spacing={2}>
        Async single:
        <FileUploader file={file1} onChange={onChangeFile1} onDeleteClick={onDeleteFile1} />
        <FileUploader
          size="medium"
          file={file2}
          onChange={onChangeFile2}
          onDeleteClick={onDeleteFile2}
        />
        <FileUploader
          size="small"
          file={file3}
          onChange={onChangeFile3}
          onDeleteClick={onDeleteFile3}
        />
      </Stack>

      <Stack direction="column" sx={{ width: '500px', p: '10px' }} spacing={2}>
        Async multiple:
        <FileUploader
          multiple
          files={files1}
          onChange={onChangeFiles1}
          onDeleteClick={onDeleteFiles1}
          onAbortRequestClick={onAbort}
        />
        <FileUploader
          multiple
          size="medium"
          files={files2}
          onChange={onChangeFiles2}
          onDeleteClick={onDeleteFiles2}
        />
        <FileUploader
          multiple
          size="small"
          files={files3}
          onChange={onChangeFiles3}
          onDeleteClick={onDeleteFiles3}
        />
      </Stack>
    </Stack>
  );
};

export default AsyncFileUploader;
