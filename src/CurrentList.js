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


	//it is for checking if the previous props is different from the new props, if it is the length are different it will reset the state
	componentDidUpdate(prevProps) {
		if (prevProps.chosenMovies.length !== this.props.chosenMovies.length) {
			

			const titleList = [];

			this.props.chosenMovies.map((movie) => {
				
				const title = movie.title;
				titleList.push(title);
				// console.log('titles', titles);  
				
				
			})
			console.log('title list', titleList)
			this.setState({
				items: titleList
			})

		}
	}

	render() {

		return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
	}
}


const SortableList = SortableContainer(({ items }) => {

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
		<li id={index} key={index}>{value}</li>);
});



// render(<CurrentList />, document.getElementById('root'));
export default CurrentList;




