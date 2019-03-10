import React, { Component } from 'react';
import firebase from './firebase';
import { render } from 'react-dom';
import "./CurrentList.css";
import "./Global.css";
import {
	SortableContainer,
	SortableElement,
	arrayMove,
} from 'react-sortable-hoc';

// we using this library (react-sortable-hoc) to allows the user sort the list, the code for SortableList and SortableItem came from https://github.com/clauderic/react-sortable-hoc
class CurrentList extends Component {
	constructor() {
		super();
		this.state = {
			items: []
		};
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ items }) => ({
			items: arrayMove(items, oldIndex, newIndex),
		}));
	};

	// need to figure out how to delete only one movie from the list ie. .child() but for now it is deleting the whole list
	handleDelete = (key) => {
		console.log(key);
		const dbRef = firebase.database().ref(this.props.userName);
		dbRef.remove();
	}

	//it is for checking if the previous props is different from the new props, if it is the length are different it will reset the state
	componentDidUpdate(prevProps) {
		if (prevProps.chosenMovies.length !== this.props.chosenMovies.length) {
			this.setState({
				items: this.props.chosenMovies
			})
		}
	}

	// passing handleDelete function to child components
	render() {
		return <SortableList handleDelete={(key) => this.handleDelete(key)} items={this.state.items} onSortEnd={this.onSortEnd} />;
	}
}

const SortableList = SortableContainer(({ items, handleDelete }) => {

	return (
		<ul className="currentList">
			{items.map((value, index) => {
				// passing handleDelete function and the firebase key to child components
				return <SortableItem handleDelete={(key) => handleDelete(key)} firebaseKey={value.key} key={index} index={index} title={value.title} />
			}
			)}
		</ul>
	);
});

// the delete button here can now use the handleDelete function and the firebase key that have been passed down
const SortableItem = SortableElement(({ title, firebaseKey, handleDelete }) => {
	return (
		<li id={firebaseKey} key={firebaseKey}>
			{title}
			<button onClick={() => handleDelete(firebaseKey)}>Delete</button>
		</li>);
});

// render(<CurrentList />, document.getElementById('root'));
export default CurrentList;