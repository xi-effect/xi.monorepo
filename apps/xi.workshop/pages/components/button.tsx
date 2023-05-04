import { useState } from 'react';

import { Button } from 'pkg.inputs.button';
import { Camera } from 'pkg.icons';
import { LayoutPages } from 'kit/LayoutPages';

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
    <LayoutPages>
      <Button
        startIcon={Camera}
        status={status}
        size="small"
        onClick={onClickCompleted}
        variant="contained"
        color="primary"
        isSnackbar
        isSnackbarIconEnd
      >
        Test
      </Button>

      <Button status={status} size="medium" onClick={onClickIdle} variant="contained" color="error">
        Test
      </Button>

      <Button
        startIcon={Camera}
        size="large"
        status={status}
        onClick={onClickCompleted}
        loadingPosition="icon"
        variant="outlined"
        color="grayscale"
      >
        Test
      </Button>

      <Button
        startIcon={Camera}
        status={status}
        size="large"
        onClick={onClickCompleted}
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
        onClick={onClickCompleted}
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
        onClick={onClickCompleted}
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
    </LayoutPages>
  );
};

export default TestComponents;
