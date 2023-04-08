import { useState, useCallback, useRef, useEffect } from 'react';

export const useStateWithCallback = (initialState: never[]) => {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null);

  const updateState = useCallback((newState: (arg0: any) => any, cb: null) => {
    cbRef.current = cb;

    setState((prev: any) => (typeof newState === 'function' ? newState(prev) : newState));
  }, []);

  useEffect(() => {
    if (cbRef.current) {
      // @ts-ignore
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, updateState];
};
