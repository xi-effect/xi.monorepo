import { Dropdown, DropdownPropsT } from 'pkg.navigation.dropdown';
import { LayoutPages } from 'kit/LayoutPages';
import { MenuItem, Typography } from '@mui/material';
import { Arrow } from 'pkg.icons';

const DropdownElement = ({ isOpened }: { isOpened: boolean }) => (
  <>
    <Typography sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}>Filled</Typography>
    <Arrow
      sx={{
        transform: `rotate(${isOpened ? '-' : ''}90deg)`,
        color: 'inherit',
        fontSize: 'inherit',
      }}
    />
  </>
);

const TestDropdowns: DropdownPropsT[] = [
  {
    Element: DropdownElement,
    size: 'l',
  },
  {
    Element: DropdownElement,
    size: 'm',
  },
  {
    Element: DropdownElement,
    size: 's',
  },
];

const TestComponents = () => (
  <LayoutPages>
    {TestDropdowns.map((dropdown, index) => (
      <Dropdown {...dropdown} key={`dropdown_${index}`}>
        <MenuItem>Item 1</MenuItem>
      </Dropdown>
    ))}
  </LayoutPages>
);

export default TestComponents;
