import { SetStateAction, useState } from 'react';
import { Stack } from '@mui/material';
import { FileUploader, File } from 'pkg.inputs.fileuploader';

type StatusType = 'idle' | 'pending' | 'failed' | 'succeeded';

type FileType = {
  name: string;
  status?: StatusType;
  id?: string;
} & Partial<File>;

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
    setFile2((file) => ({ name: file?.name, status: 'succeeded' }));
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

  const onChangeFiles1 = async (files: File[]) => {
    onChangeFiles(files1, files, setFiles1, 'pending', 'succeeded');
  };
  const onChangeFiles2 = async (files: File[]) => {
    onChangeFiles(files2, files, setFiles2, 'pending', 'failed');
  };
  const onChangeFiles3 = async (files: File[]) => {
    onChangeFiles(files3, files, setFiles3, 'pending', 'idle');
  };

  const onDeleteFiles1 = (id?: string) => {
    setFiles1(files1.filter((file) => file.id !== id));
  };
  const onDeleteFiles2 = (id?: string) => {
    setFiles2(files2.filter((file) => file.id !== id));
  };
  const onDeleteFiles3 = (id?: string) => {
    setFiles3(files3.filter((file) => file.id !== id));
  };

  const onAbort = (id?: string) => {
    // const xhr = new XMLHttpRequest()
    // xhr.abort();
    setFiles1((state) => state.filter((file) => file.id !== id));
  };

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ gap: '10px' }}>
      <Stack direction="column" sx={{ maxWidth: '500px', width: '100%', p: '10px 0' }} spacing={2}>
        Async single:
        {file1 && (
          <File
            onDeleteClick={onDeleteFile1}
            isPending={file1.status === 'pending'}
            isError={file1.status === 'failed'}
          >
            {file1.name}
          </File>
        )}
        <FileUploader onChange={onChangeFile1} />
        <FileUploader
          size="medium"
          fileName={file2?.name}
          onChange={onChangeFile2}
          onDeleteClick={onDeleteFile2}
          isPending={file2?.status === 'pending'}
          isSucceeded={file2?.status === 'succeeded'}
        />
        <FileUploader
          size="small"
          fileName={file3?.name}
          isPending={file3?.status === 'pending'}
          onChange={onChangeFile3}
          onDeleteClick={onDeleteFile3}
        />
      </Stack>

      <Stack direction="column" sx={{ maxWidth: '500px', width: '100%', p: '10px 0' }} spacing={2}>
        Async multiple:
        <Stack>
          {files1.map((file) => (
            <File
              isPending={file.status === 'pending'}
              isSucceeded={file.status === 'succeeded'}
              key={file.id}
              onDeleteClick={() => onDeleteFiles1(file.id)}
              onAbortRequestClick={() => onAbort(file.id)}
            >
              {file.name}
            </File>
          ))}
        </Stack>
        <FileUploader multiple onChange={onChangeFiles1} />
        <Stack>
          {files2.map((file) => (
            <File
              isPending={file.status === 'pending'}
              isError={file.status === 'failed'}
              key={file.id}
              onDeleteClick={() => onDeleteFiles2(file.id)}
            >
              {file.name}
            </File>
          ))}
        </Stack>
        <FileUploader multiple size="medium" onChange={onChangeFiles2} />
        <Stack>
          {files3.map((file) => (
            <File
              isPending={file.status === 'pending'}
              key={file.id}
              onDeleteClick={() => onDeleteFiles3(file.id)}
            >
              {file.name}
            </File>
          ))}
        </Stack>
        <FileUploader multiple size="small" onChange={onChangeFiles3} />
      </Stack>
    </Stack>
  );
};

export default AsyncFileUploader;
