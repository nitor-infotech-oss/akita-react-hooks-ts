export const subscribe = (selector, setState) => {
  const subscription = selector
    ? selector.subscribe(data => {
        setState && setState(data);
      })
    : null;

  return () => {
    subscription && subscription.unsubscribe();
  };
};

export const subscribeFunction = (selectorFunction, setState) => {
  return subscribe(selectorFunction(), setState);
};
