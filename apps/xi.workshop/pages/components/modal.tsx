import { Stack } from '@mui/material';
import { Modal } from 'pkg.components.modal';
import { Button } from 'pkg.inputs.button';
import { useState } from 'react';

const TestComponents = () => {
  const [isOpenLarge, setIsOpenLarge] = useState(false);
  const [isOpenSmall, setIsOpenSmall] = useState(false);

  return (
    <Stack sx={{ p: '20px' }} direction="row" justifyContent="center" spacing={2}>
      <Button variant="contained" onClick={() => setIsOpenLarge(true)}>
        Open large modal
      </Button>
      <Button variant="contained" onClick={() => setIsOpenSmall(true)}>
        Open small modal
      </Button>

      <Modal
        open={isOpenLarge}
        title="Заголовок"
        subtitle="Подзаголовок"
        onClose={() => setIsOpenLarge(false)}
        cancelButtonTitle="Кнопка"
        confirmButtonTitle="Кнопка"
        onCloseIcon={() => setIsOpenLarge(false)}
        onConfirmButton={() => {
          alert('Подтвердить');
        }}
        onCancelButton={() => setIsOpenLarge(false)}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem pariatur sequi numquam
          dolorum at nobis, consectetur est molestias vero quod mollitia quae voluptatum voluptate,
          ab necessitatibus eaque quaerat maiores quidem. Modi quibusdam adipisci aut, labore unde
          quis non blanditiis tempore cum facilis? Rem facilis, sit sequi sint, placeat qui commodi
          quaerat quasi reiciendis soluta ratione, laudantium sunt explicabo? Omnis, magnam! Quae
          repellat error cum asperiores ipsum maiores cumque eaque delectus ut ipsam suscipit, saepe
          veritatis maxime totam commodi quisquam sequi ipsa culpa doloribus? Totam error alias quos
          blanditiis fuga sit. Rerum quos in unde expedita rem, facere ducimus totam nam, omnis
          earum corrupti soluta tempora, ratione beatae repudiandae temporibus! Aliquam unde placeat
          cupiditate. Cum exercitationem quod rem corrupti dicta quis. Voluptas quos debitis aut
          aspernatur amet beatae in accusantium nam asperiores nostrum quidem adipisci doloremque
          exercitationem ipsum modi id sunt excepturi rerum fugiat, voluptates temporibus esse?
          Corporis ex a neque. Maiores in neque suscipit aspernatur blanditiis. Accusamus, aliquam
          error delectus quis assumenda quae voluptate minima iusto, expedita recusandae neque
          earum, eius unde natus. Nobis cumque accusantium fuga doloremque ratione consequuntur?
          Est, a voluptate. Maxime nobis officiis voluptatem non tempora cum quibusdam cumque
        </div>
      </Modal>

      <Modal
        open={isOpenSmall}
        size="small"
        title="Заголовок"
        onClose={() => setIsOpenSmall(false)}
        cancelButtonTitle="Отменить"
        onCancelButton={() => setIsOpenSmall(false)}
        cancelButtonProps={{ variant: 'text', sx: { width: '100%' } }}
        hideLines
      >
        <Button size="large" variant="contained" onClick={() => alert('1 действие')}>
          1 действие
        </Button>
        <Button
          size="large"
          variant="outlined"
          color="grayscale"
          onClick={() => alert('2 действие')}
        >
          2 действие
        </Button>
      </Modal>
    </Stack>
  );
};

export default TestComponents;
