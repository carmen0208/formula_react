//@flow

import {connect } from 'react-redux';
import RespondToForm from './components/RespondToForm';
import { increment,loadExampleForm, getForm } from "./actions";

// connect takes two arguments:
// - mapStateToProps
//   - this function will be given the redux state and will return the props to
//     pass to the connected component.
// - mapDispatchToProps
//   - this function will be given the `dispatch` function as an argument, which
//     is how you can get actions into your reducer, and returns more props to
//     pass to the connected component - you'll return functions that can
//     dispatch actions from this.
//
// It's also a higher order function, so it returns a function that can be given
// a stateless react component and will return a component that knows how to get
// its state out of the state provider.
export const App = connect(
    function mapStateToProp(state) {
        return {
            form: state,
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            increment : () => dispatch(increment()),
            loadExampleForm: ()=> dispatch(loadExampleForm()),
            getForm: (id)=> dispatch(getForm(id))
        };
    }
)(RespondToForm);