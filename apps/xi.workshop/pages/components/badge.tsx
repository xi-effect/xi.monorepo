import { LayoutPages } from 'kit/LayoutPages';
import { Badge } from 'pkg.components.badge';
import { Camera } from 'pkg.icons';

const TestComponents = () => (
  <LayoutPages>
    <Badge icon={Camera} bgColor="primary.dark" iconColor="petersburg.0" fontColor="petersburg.0">
      Title
    </Badge>

    <Badge icon={Camera} bgColor="primary.dark" iconColor="petersburg.0">
      Title
    </Badge>

    <Badge size="small" icon={Camera} bgColor="petersburg.10" iconColor="error.dark">
      Title
    </Badge>

    <Badge
      size="small"
      icon={Camera}
      bgColor="petersburg.10"
      iconColor="error.dark"
      fontColor="error.dark"
    >
      Title
    </Badge>
  </LayoutPages>
);

export default TestComponents;
