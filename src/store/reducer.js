import { CHANGE_INTERVAL, DISABLE_CONTROL } from "./actions";

const initialState = {
  interval: 1,
  control: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INTERVAL:
      const interval = state.interval + action.payload;
      // don't need interval < 1
      // optimize rerender
      if (interval < 1) return state;
      return { ...state, interval };
    case DISABLE_CONTROL:
      return { ...state, control: action.payload };
    default:
      return state;
  }
};
