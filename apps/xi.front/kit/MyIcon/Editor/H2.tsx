import React from 'react';
import { IconWrap } from './index';

type Props = {
  color?: string;
};

const H2: React.FC<Props> = ({ color = '#333' }) => (
  // @ts-ignore
  <IconWrap>
    <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.0113636 12V0.363636H2.47159V5.16477H7.46591V0.363636H9.92045V12H7.46591V7.19318H2.47159V12H0.0113636ZM11.8807 12V10.2273L16.0227 6.39205C16.375 6.05114 16.6705 5.74432 16.9091 5.47159C17.1515 5.19886 17.3352 4.93182 17.4602 4.67045C17.5852 4.4053 17.6477 4.11932 17.6477 3.8125C17.6477 3.47159 17.5701 3.17803 17.4148 2.93182C17.2595 2.68182 17.0473 2.49053 16.7784 2.35795C16.5095 2.22159 16.2045 2.15341 15.8636 2.15341C15.5076 2.15341 15.197 2.22538 14.9318 2.36932C14.6667 2.51326 14.4621 2.7197 14.3182 2.98864C14.1742 3.25758 14.1023 3.57765 14.1023 3.94886H11.767C11.767 3.1875 11.9394 2.52652 12.2841 1.96591C12.6288 1.4053 13.1117 0.971591 13.733 0.664772C14.3542 0.357954 15.0701 0.204545 15.8807 0.204545C16.714 0.204545 17.4394 0.352272 18.0568 0.647727C18.678 0.939394 19.161 1.3447 19.5057 1.86364C19.8504 2.38258 20.0227 2.97727 20.0227 3.64773C20.0227 4.08712 19.9356 4.52083 19.7614 4.94886C19.5909 5.37689 19.286 5.85227 18.8466 6.375C18.4072 6.89394 17.7879 7.51705 16.9886 8.24432L15.2898 9.90909V9.98864H20.1761V12H11.8807Z"
        fill={color}
      />
    </svg>
  </IconWrap>
);

export default H2;
