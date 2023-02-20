import { Badge } from 'pkg.components.badge';
import { Camera } from 'pkg.icons.camera';

const TestComponents = () => (
  <div style={{ padding: '30px', display: 'flex', gap: '30px' }}>
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
  </div>
);

export default TestComponents;
