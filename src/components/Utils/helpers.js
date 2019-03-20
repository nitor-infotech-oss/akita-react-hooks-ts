export const subscribeHelper = (serviceMethod, setState) => {
  const subscription = serviceMethod().subscribe(data => {
    setState(data);
  });

  return () => {
    subscription && subscription.unsubscribe();
  };
};
