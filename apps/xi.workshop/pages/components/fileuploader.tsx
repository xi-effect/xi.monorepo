import { Button, Stack } from '@mui/material';
import AsyncFileUploader from 'components/FileUploader/AsyncFileUploader';
import SyncFileUploader from 'components/FileUploader/SyncFileUploader';

import { useState } from 'react';

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
