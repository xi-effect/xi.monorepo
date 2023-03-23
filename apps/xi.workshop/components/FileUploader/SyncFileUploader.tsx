import { Stack } from '@mui/material';
import { FileUploader } from 'pkg.inputs.fileuploader';
import { useState } from 'react';

const SyncFileUploader = () => {
  // single
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);

  const onChangeFile1 = (file: File) => {
    setFile1(file);
  };
  const onChangeFile2 = (file: File) => {
    setFile2(file);
  };
  const onChangeFile3 = (file: File) => {
    setFile3(file);
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
  const [files1, setFiles1] = useState<File[]>([]);
  const [files2, setFiles2] = useState<File[]>([]);
  const [files3, setFiles3] = useState<File[]>([]);

  const onChangeFiles1 = (files: File[]) => {
    setFiles1([...files1, ...files]);
  };
  const onChangeFiles2 = (files: File[]) => {
    setFiles2([...files2, ...files]);
  };
  const onChangeFiles3 = (files: File[]) => {
    setFiles3([...files3, ...files]);
  };

  const onDeleteFiles1 = (_: string, index: number) => {
    setFiles1(files1.filter((_, i) => i !== index));
  };
  const onDeleteFiles2 = (_: string, index: number) => {
    setFiles2(files2.filter((_, i) => i !== index));
  };
  const onDeleteFiles3 = (_: string, index: number) => {
    setFiles3(files3.filter((_, i) => i !== index));
  };

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ gap: '10px' }}>
      <Stack direction="column" sx={{ maxWidth: '500px', width: '100%', p: '10px 0' }} spacing={2}>
        Sync single:
        <FileUploader file={file1} onChange={onChangeFile1} onDeleteClick={onDeleteFile1} />
        <FileUploader
          isError={!file2}
          size="medium"
          file={file2}
          onChange={onChangeFile2}
          onDeleteClick={onDeleteFile2}
        />
        <FileUploader
          isWarning={!file3}
          size="small"
          file={file3}
          onChange={onChangeFile3}
          onDeleteClick={onDeleteFile3}
        />
      </Stack>

      <Stack direction="column" sx={{ maxWidth: '500px', width: '100%', p: '10px 0' }} spacing={2}>
        Sync multiple:
        <FileUploader
          multiple
          files={files1}
          onChange={onChangeFiles1}
          onDeleteClick={onDeleteFiles1}
          filesPosition="bottom"
        />
        <FileUploader
          multiple
          size="medium"
          files={files2}
          onChange={onChangeFiles2}
          onDeleteClick={onDeleteFiles2}
          filesPosition="bottom"
        />
        <FileUploader
          multiple
          size="small"
          files={files3}
          onChange={onChangeFiles3}
          onDeleteClick={onDeleteFiles3}
          filesPosition="bottom"
        />
      </Stack>
    </Stack>
  );
};

export default SyncFileUploader;
