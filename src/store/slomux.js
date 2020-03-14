import React from "react";
import { reducer } from "./reducer";

const StateContext = React.createContext();

export const createStore = (reducer, initialState) => {
  let currentState = initialState;
  const listeners = [];

  const getState = () => currentState;
  const dispatch = action => {
    currentState = reducer(currentState, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => listeners.push(listener);

  return { getState, dispatch, subscribe };
};

export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  class WrappedComponent extends React.Component {
    render() {
      return (
        <Component
          {...this.props}
          {...mapStateToProps(this.context.store.getState(), this.props)}
          {...mapDispatchToProps(this.context.store.dispatch, this.props)}
        />
      );
    }

    componentDidMount() {
      this.unsubscribe = this.context.store.subscribe(
        this.handleChange.bind(this)
      );
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    handleChange = () => {
      this.forceUpdate();
    };
  }

  WrappedComponent.contextType = StateContext;
  return WrappedComponent;
};

const initialState = { interval: 1, control: false };
export const configureStore = () => createStore(reducer, initialState);

export const Provider = ({ children, store }) => (
  <StateContext.Provider value={{ store }}>{children}</StateContext.Provider>
);
