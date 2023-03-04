import { Button, Menu, MenuItem } from '@mui/material';

export const Dropdown = () => (
  <>
    <Button aria-controls="dropdown">Open menu</Button>
    <Menu id="dropdown" open={false}>
      <MenuItem>Item 1</MenuItem>
    </Menu>
  </>
);
