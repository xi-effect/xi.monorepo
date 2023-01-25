import { Button } from 'pkg.components.button';
import { Camera } from 'pkg.icons.camera';
import Communities from './Communities';
import Header from './Header';

const Home = () => (
  <>
    <Header />
    <Communities />
    <Button
      startIcon={Camera}
      size="large"
      status="idle"
      textColor="white"
      text="Кнопка"
      loadingPosition="start"
      isSnackbar
      handleClick={() => {}}
    />
  </>
);

export default Home;
