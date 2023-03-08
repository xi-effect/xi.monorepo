import { Dropdown, DropdownPropsT } from 'pkg.navigation.dropdown';
import { LayoutPages } from 'kit/LayoutPages';
import { MenuItem } from '@mui/material';

const TestDropdowns: DropdownPropsT[] = [
  {
    name: 'Filled',
    size: 'l',
  },
  {
    name: 'Filled',
    size: 'm',
  },
  {
    name: 'Filled',
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
