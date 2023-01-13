import React from 'react';

// @ts-ignore
const ListItem: React.FC = ({ children }) => (
  <li
    style={{
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '20px',
    }}
  >
    {children}
  </li>
);

export default ListItem;
