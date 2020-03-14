export const CHANGE_INTERVAL = "CHANGE_INTERVAL";
export const changeInterval = value => ({
  type: CHANGE_INTERVAL,
  payload: value
});

export const DISABLE_CONTROL = "DISABLE_CONTROL";
export const disableControl = value => ({
  type: DISABLE_CONTROL,
  payload: value
});
