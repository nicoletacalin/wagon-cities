const ActiveCityReducer = (state = null, action ) => {
  switch (action.type) {
    case 'CITY_SELECTED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default ActiveCityReducer;
