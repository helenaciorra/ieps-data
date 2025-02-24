/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* ISONALR EM RQUIVO oos Hooks */
import { RootState } from '../rootReducer';

const configUseSelector = (useContext?: any, Context?: any) => {
  return <T>(selectFn?: (state: RootState) => any): T => {
    const context = useContext(Context);

    if (!context) throw new Error('context is null configUseSelector').message;
    const { state } = context;

    if (selectFn && typeof selectFn === 'function') {
      // eslint-disable-next-line prettier/prettier
      return selectFn(state) as ReturnType<(state: RootState) => T>;
    }

    return state as RootState;
  };
};

export default configUseSelector;
