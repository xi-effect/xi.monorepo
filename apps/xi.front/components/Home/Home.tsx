import { Button } from 'pkg.components.button';
import { Camera } from 'pkg.icons.camera';
import { useState } from 'react';
import Communities from './Communities';
import Header from './Header';

const Home = () => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'completed'>('idle');
  return (
    <>
      <Header />
      <Communities />
      <Button
        startIcon={Camera}
        text="Кнопка"
        loadingPosition="icon"
        size="large"
        status={status}
        iconColor="white"
        snackbarText="123"
        isSnackbar
        snackbarLoadingPosition="icon"
        isSnackbarIconEnd
        handleButtonClick={() => {
          setStatus('pending');
          setTimeout(() => {
            setStatus('completed');
            setTimeout(() => {
              setStatus('idle');
            }, 1500);
          }, 1500);
        }}
      />
    </>
  );
};

export default Home;
