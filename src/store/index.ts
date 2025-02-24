import creatContextProvider from './config/ContextProvider';
import rootReducers from './rootReducer';
export * from './config/configContextRedux';

export default () => creatContextProvider(rootReducers);
