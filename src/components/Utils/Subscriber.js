export const subscribe = (selector, setState) => {
  const subscription = selector.subscribe(data => {
    setState(data);
  });

  return () => {
    subscription && subscription.unsubscribe();
  };
};

export const subscribeFunction = (selectorFunction, setState) => {
  return subscribe(selectorFunction(), setState);
};
