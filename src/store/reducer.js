import { CHANGE_INTERVAL, DISABLE_CONTROL } from "./actions";

const initialState = {
  interval: 1,
  control: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INTERVAL:
      const tempInterval = (state.interval += action.payload);
      const interval = tempInterval < 1 ? 1 : tempInterval;
      return { ...state, interval };
    case DISABLE_CONTROL:
      return { ...state, control: action.payload };
    default:
      return state;
  }
};
