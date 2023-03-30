import { useState } from 'react';
import { Stack } from '@mui/material';
import { FileUploader, File } from 'pkg.inputs.fileuploader';

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

  const onDeleteFiles1 = (index: number) => {
    setFiles1(files1.filter((_, i) => i !== index));
  };
  const onDeleteFiles2 = (index: number) => {
    setFiles2(files2.filter((_, i) => i !== index));
  };
  const onDeleteFiles3 = (index: number) => {
    setFiles3(files3.filter((_, i) => i !== index));
  };

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ gap: '10px' }}>
      <Stack direction="column" sx={{ maxWidth: '500px', width: '100%', p: '10px 0' }} spacing={2}>
        Sync single:
        {file1 && <File onDeleteClick={onDeleteFile1}>{file1.name}</File>}
        <FileUploader onChange={onChangeFile1} />
        <FileUploader
          isError={!file2}
          size="medium"
          fileName={file2?.name}
          onChange={onChangeFile2}
          onDeleteClick={onDeleteFile2}
        />
        <FileUploader
          isWarning={!file3}
          size="small"
          fileName={file3?.name}
          onChange={onChangeFile3}
          onDeleteClick={onDeleteFile3}
        />
      </Stack>

      <Stack direction="column" sx={{ maxWidth: '500px', width: '100%', p: '10px 0' }} spacing={2}>
        Sync multiple:
        <Stack>
          {files1.map((file, i) => (
            <File key={i} isDeleteIcon onDeleteClick={() => onDeleteFiles1(i)}>
              {file.name}
            </File>
          ))}
        </Stack>
        <FileUploader multiple onChange={onChangeFiles1} />
        <Stack>
          {files2.map((file, i) => (
            <File key={i} isDeleteIcon onDeleteClick={() => onDeleteFiles2(i)}>
              {file.name}
            </File>
          ))}
        </Stack>
        <FileUploader multiple size="medium" onChange={onChangeFiles2} />
        <Stack>
          {files3.map((file, i) => (
            <File size="small" key={i} isDeleteIcon onDeleteClick={() => onDeleteFiles3(i)}>
              {file.name}
            </File>
          ))}
        </Stack>
        <FileUploader multiple size="small" onChange={onChangeFiles3} />
      </Stack>
    </Stack>
  );
};

export default SyncFileUploader;
