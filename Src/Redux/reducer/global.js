// init global state in reducer
const initGlobalReducer = {
  isError: false,
  message: 'error message',
};

// create global state in reducer
const globalReducer = (state = initGlobalReducer, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }

  return state;
};

export default globalReducer;
