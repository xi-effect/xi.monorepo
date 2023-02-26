import { Toggle } from 'pkg.inputs.toggle';
import { useState } from 'react';

const TestComponents = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(true);

  return (
    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Toggle checked={checked1} onChange={setChecked1}>
        {`${checked1}`}
      </Toggle>
      <Toggle checked={checked2} onChange={setChecked2} size="medium">
        {`${checked2}`}
      </Toggle>
      <Toggle checked={checked3} onChange={setChecked3} size="small">
        {`${checked3}`}
      </Toggle>
      <Toggle disabled checked={false} onChange={() => {}}>
        disabled
      </Toggle>
    </div>
  );
};

export default TestComponents;
