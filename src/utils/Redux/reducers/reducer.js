const initialState = {
  favorites: [],
  loading: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return {
        favorites: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
