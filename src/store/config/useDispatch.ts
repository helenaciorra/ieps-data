/* eslint-disable @typescript-eslint/no-explicit-any */
/* ISONALR EM RQUIVO oos Hooks */
import { DispatchFn } from '../types';

const configDispatch = (useContext: any, Context: any): ()=>DispatchFn => {
  return () => {
    const context = useContext(Context);

    if (!context) throw new Error('context on configDispatch is null').message;
    const { dispatch } = context;
    // eslint-disable-next-line prettier/prettier
    return (dispatch as DispatchFn);
  };
};

export default configDispatch;
