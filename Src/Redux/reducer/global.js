const initGlobalReducer = {
  isError: false,
  message: '',
};

const globalReducer = (state = initGlobalReducer, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }

  return globalReducer;
};

export default globalReducer;
