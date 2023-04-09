/* eslint-disable consistent-return */
import { useEffect } from 'react';

// @ts-ignore
export const useListen = (socket, event, handler, ...deps) => {
  useEffect(() => {
    if (socket) {
      console.log('Listening for', event);
      socket.on(event, handler);
      return () => socket.off(event, handler);
    }
  }, [socket, event, handler, ...deps]);
};
