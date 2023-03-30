import { LayoutPages } from 'kit/LayoutPages';
import { Badge } from 'pkg.components.badge';
import { Camera } from 'pkg.icons.camera';

const TestComponents = () => (
  <LayoutPages>
    <Badge icon={Camera} bgColor="primary.dark" iconColor="grayscale.0" fontColor="grayscale.0">
      Title
    </Badge>

    <Badge icon={Camera} bgColor="primary.dark" iconColor="grayscale.0">
      Title
    </Badge>

    <Badge size="small" icon={Camera} bgColor="grayscale.10" iconColor="error.dark">
      Title
    </Badge>

    <Badge
      size="small"
      icon={Camera}
      bgColor="grayscale.10"
      iconColor="error.dark"
      fontColor="error.dark"
    >
      Title
    </Badge>
  </LayoutPages>
);

export default TestComponents;
