import React, { Component, Fragment } from 'react';
import firebase from './firebase';
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
			items: [],
			class: 'hide',
		};
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ items }) => ({
			items: arrayMove(items, oldIndex, newIndex),
		}));
	};

	// need to figure out how to delete only one movie from the list ie. .child() but for now it is deleting the whole list
	handleDelete = (key) => {

		const dbRef = firebase.database().ref(this.props.userName).child(key);
		dbRef.remove();
	}

	handleSubmit = () => {
		const dbRef = firebase.database().ref('LockedLists')
			.set({ list: { key: { key }, title: { movie.title } });
		/* const dbRef = firebase.database().ref('LockedLists'); */
		console.log(dbRef)
		const itemsObject = { ...this.state.items }
		const userObject = { userName: this.props.userName, list: itemsObject }
		dbRef.push(userObject);
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
		if (this.state.items.length === 10) {
			this.setState({
				class: 'show'
			})
		}
		return (
			<Fragment>
				<SortableList
					handleDelete={key => this.handleDelete(key)}
					items={this.state.items}
					onSortEnd={this.onSortEnd}
				/>
				{/* <button className="submitList" onClick={this.handleSubmit}>Submit</button> */}
				<div className={this.state.class}>
					<button className="reset btn">reset</button>
					<button className="confirm btn" onClick={this.handleSubmit}>
						confirm
          </button>
				</div>
			</Fragment>
		);
	}
}

const SortableList = SortableContainer(({ items, handleDelete }) => {

	return (
		<ol className="currentList">
			{items.map((value, index) => {
				// passing handleDelete function and the firebase key to child components
				return <Fragment>
					<SortableItem handleDelete={(key) => handleDelete(key)} firebaseKey={value.key} key={index} index={index} title={value.title} />
				</Fragment>
			}
			)}

		</ol>
	);
});

// the delete button here can now use the handleDelete function and the firebase key that have been passed down
const SortableItem = SortableElement(({ title, firebaseKey, handleDelete }) => {
	return (
		<li id={firebaseKey}>
			<h2>{title}</h2>
			<button className="delete" onClick={() => handleDelete(firebaseKey)}><i class="fas fa-minus-circle delete"></i></button>
		</li>);
});

// render(<CurrentList />, document.getElementById('root'));
export default CurrentList;