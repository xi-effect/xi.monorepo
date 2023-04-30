/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button } from 'pkg.inputs.button';
import BrowserOnly from '@docusaurus/BrowserOnly';

const ButtonExample = (props) => (
  <BrowserOnly fallback={<div>The fallback content to display on prerendering</div>}>
    {() => (
      <div>
        <button
          type="button"
          {...props}
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: 'solid red',
            borderRadius: 20,
            padding: 10,
            cursor: 'pointer',
            ...props.style,
          }}
        />
        <Button type="button" {...props} />
      </div>
    )}
  </BrowserOnly>
);

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
};

export default ReactLiveScope;
