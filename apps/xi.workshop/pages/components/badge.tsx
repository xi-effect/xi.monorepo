import { LayoutPages } from 'kit/LayoutPages';
import { Badge } from 'pkg.components.badge';
import { Camera } from 'pkg.icons.camera';

const TestComponents = () => (
  <LayoutPages>
    <Badge
      icon={Camera}
      bgColor="primary.dark"
      iconColor="grayscale.0"
      text="Title"
      fontColor="grayscale.0"
    />

    <Badge icon={Camera} bgColor="primary.dark" iconColor="grayscale.0" />

    <Badge size="small" icon={Camera} bgColor="grayscale.10" iconColor="error.dark" />

    <Badge
      size="small"
      icon={Camera}
      bgColor="grayscale.10"
      iconColor="error.dark"
      text="Title"
      fontColor="error.dark"
    />
  </LayoutPages>
);

export default TestComponents;
