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

	// onDelete = (index) => {
	// 	const updatedList = this.state.items.splice(index, 1);
	// 	this.setState({
	// 		items: updatedList
	// 	})
	// }

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ items }) => ({
			items: arrayMove(items, oldIndex, newIndex),
		}));
	};
	//it is for checking if the previous props is different from the new props, if it is the length are different it will reset the state
	/* {
	 //we get the props clickedMovie from GamePage Component
	 const { clickedMovie } = this.props;
	 const dbRef = firebase.database().ref(`clickedMovie`);
	 const data = clickedMovie;
	 console.log(clickedMovie)
	 dbRef.push(data);

 } */
	componentDidUpdate(prevProps) {
		if (prevProps.chosenMovies.length !== this.props.chosenMovies.length) {
			this.setState({
				items: this.props.chosenMovies
			})
		}
	}

	render() {
		return <SortableList onDelete={this.onDelete} items={this.state.items} onSortEnd={this.onSortEnd} />;
	}
}


const SortableList = SortableContainer(({ items }, { onDelete }) => {

	return (
		<ul className="currentList">
			{items.map((value, index) => (
				<SortableItem key={`item-${index}`} index={index} value={value} />
			))}
		</ul>
	);
});


const SortableItem = SortableElement(({ value }, { index }) => {
	return (
		<li id={index} key={index}>
			{value}
			{/* { value ? <DeleteButton onDelete={onDelete} index={index} /> : null } */}

		</li>);
});


class DeleteButton extends Component {
	deleteItem = () => {
		this.props.onDelete(this.props.index);
	}

	render() {

		return (
			<button onClick={this.deleteItem}>delete button</button>
		)
	}
}





// render(<CurrentList />, document.getElementById('root'));
export default CurrentList;




