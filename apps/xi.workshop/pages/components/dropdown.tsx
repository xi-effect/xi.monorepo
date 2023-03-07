import { Dropdown, DropdownPropsT } from 'pkg.navigation.dropdown';
import { LayoutPages } from 'kit/LayoutPages';

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
    {TestDropdowns.map((dropdown) => (
      <Dropdown {...dropdown} />
    ))}
  </LayoutPages>
);

export default TestComponents;
