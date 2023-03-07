import { Dropdown } from 'pkg.navigation.dropdown';
import { LayoutPages } from 'kit/LayoutPages';

const TestDropdown = {
  name: 'Filled',
};

const TestComponents = () => (
  <LayoutPages>
    <Dropdown {...TestDropdown} />
  </LayoutPages>
);

export default TestComponents;
