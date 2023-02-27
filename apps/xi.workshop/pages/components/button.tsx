import { useState } from 'react';

import { Button } from 'pkg.inputs.button';
import { Camera } from 'pkg.icons.camera';

const TestComponents = () => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'completed'>('idle');

  const onClickCompleted = () => {
    setStatus('pending');

    setTimeout(() => {
      setStatus('completed');

      setTimeout(() => {
        setStatus('idle');
      }, 1500);
    }, 1500);
  };

  const onClickIdle = () => {
    setStatus('pending');

    setTimeout(() => {
      setStatus('idle');
    }, 1500);
  };

  return (
    <div
      style={{
        padding: '30px',
        gap: '30px',
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
      }}
    >
      <Button
        startIcon={Camera}
        status={status}
        size="small"
        handleButtonClick={onClickCompleted}
        variant="contained"
        color="primary"
        isSnackbar
        isSnackbarIconEnd
      >
        Test
      </Button>

      <Button
        status={status}
        size="medium"
        handleButtonClick={onClickIdle}
        variant="contained"
        color="error"
      >
        Test
      </Button>

      <Button
        startIcon={Camera}
        status={status}
        size="large"
        handleButtonClick={onClickCompleted}
        loadingPosition="icon"
        variant="contained"
        color="success"
        isSnackbar
        isSnackbarIconStart
        snackbarLoadingPosition="icon"
        snackbarText="WAIT...."
      >
        Test
      </Button>

      <Button
        startIcon={Camera}
        status="pending"
        size="large"
        handleButtonClick={onClickCompleted}
        loadingPosition="icon"
        variant="contained"
        color="success"
        isSnackbar
        isSnackbarIconStart
        snackbarLoadingPosition="icon"
        snackbarText="WAIT...."
      >
        Test
      </Button>
      <Button
        startIcon={Camera}
        status="completed"
        size="large"
        handleButtonClick={onClickCompleted}
        loadingPosition="icon"
        variant="contained"
        color="success"
        isSnackbar
        isSnackbarIconStart
        snackbarLoadingPosition="icon"
        snackbarText="Completed...."
      >
        Completed
      </Button>
    </div>
  );
};

export default TestComponents;
