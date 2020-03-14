import { TimerComponent } from "../components/TimerComponent";
import { disableControl } from "../store/actions";
import { connect } from "../store/slomux";

export const Timer = connect(
  state => state,
  dispatch => ({
    disableControl: value => dispatch(disableControl(value))
  })
)(TimerComponent);
