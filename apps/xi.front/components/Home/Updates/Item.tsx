import { observer } from 'mobx-react';
import { Stack } from '@mui/material';
import { UpdateT } from './types';

const Item = observer((data: UpdateT) => <Stack>{data.title}</Stack>);

export default Item;
