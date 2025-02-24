import { createContext, useContext } from 'react';
import configUseSelector from './useSelector';
import configUseActions from './useActions';
import configUseDispatch from './useDispatch';

const Context = createContext({});

export const { Provider, Consumer } = Context;

export const useDispatch = configUseDispatch(useContext, Context);

export const useActions = configUseActions(useContext, Context);

export const useSelector = configUseSelector(useContext, Context);
