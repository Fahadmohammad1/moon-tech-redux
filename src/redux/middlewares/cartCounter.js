const cartCounter = (store) => (next) => (action) => {
  console.log("current", store.getState());
  console.log(action);

  return next(action);
};

export default cartCounter;
