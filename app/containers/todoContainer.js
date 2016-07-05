import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
import PageTwo from '../components/PageTwo';

const mapStateToProps = (state, props) => {
	return {
		todos: state.todos,
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onClick(text) {
			dispatch(addTodo(text))
		}
	};
};

const TodoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PageTwo);

export default TodoContainer;


