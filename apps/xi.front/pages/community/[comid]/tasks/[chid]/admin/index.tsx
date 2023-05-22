import { Stack, useTheme } from '@mui/material';
import { observer } from 'mobx-react';
import { LayoutPages } from 'pkg.layout.pages';

import { Navigation } from 'kit/Navigation';

const TasksAdmin = observer(() => {
  const { breakpoints } = useTheme();

  return (
    <LayoutPages noIndex>
      <Navigation>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            height: '100vh',
            width: '100%',
            [breakpoints.up('xs')]: {
              p: 2,
              pr: 1.5,
            },
            [breakpoints.up('md')]: {
              p: 3,
              pr: 2.5,
            },
            [breakpoints.up('lg')]: {
              p: 4,
              pr: 3.5,
            },
            overflow: 'auto',
          }}
        >
          Список заданий, вид со стороны учителя
          {/* Макет https://www.figma.com/file/Klu74VMZB28sukZ7ROGQ1r/Design?type=design&node-id=2782-29169&t=oS5Npa1qHRNRndl0-4 */}
        </Stack>
      </Navigation>
    </LayoutPages>
  );
});

export default TasksAdmin;
