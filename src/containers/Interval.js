import { IntervalComponent } from "../components/IntervalComponent";
import { changeInterval } from "../store/actions";
import { connect } from "../store/slomux";

export const Interval = connect(
  state => state,
  dispatch => ({
    changeInterval: value => dispatch(changeInterval(value))
  })
)(IntervalComponent);
