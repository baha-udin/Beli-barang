// init  default state reducer
const initStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  phoneNumber: '',
  province: '',
  city: '',
  district: '',
  address: '',
};

// create state register in reducer
const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password_confirmation,
    };
  }
  if (action.type === 'SET_REGISTER_ADDRESS') {
    return {
      ...state,
      phoneNumber: action.value.phoneNumber,
      province: action.value.province,
      city: action.value.city,
      district: action.value.district,
      address: action.value.address,
    };
  }
  if (action.type === 'SET_LOGIN') {
    return {
      ...state,
      email: action.value.email,
      password: action.value.password,
    };
  }

  return state;
};

export default registerReducer;
