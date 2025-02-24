/* eslint-disable @typescript-eslint/no-explicit-any */
/* ISONALR EM RQUIVO oos Hooks */

const configUseActions = (useContext: any, Context: any) => {
  return (key: any) => {
    const context = useContext(Context);

    if (!context) throw new Error('context on configDispatch is null').message;

    const { actions } = context;

    if (key && typeof key === 'string') {
      return actions[key] || actions;
    }

    return actions;
  };
};

export default configUseActions;
