import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import { AsyncFileUploader } from './AsyncFileUploader';
import { SyncFileUploader } from './SyncFileUploader';

const TestComponents = () => {
  const [isAsync, setIsAsync] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setIsAsync(!isAsync);
        }}
      >
        {isAsync ? 'sync' : 'async'}
      </Button>
      {isAsync && <AsyncFileUploader />}
      {!isAsync && <SyncFileUploader />}
    </Stack>
  );
};
export default TestComponents;
