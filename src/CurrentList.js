import React, { Component } from 'react';
import { render } from 'react-dom';
import {
	SortableContainer,
	SortableElement,
	arrayMove,
} from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);
const SortableList = SortableContainer(({ items }) => {
	return (
		<ul>
			{items.map((value, index) => (
				<SortableItem key={`item-${index}`} index={index} value={value} />
			))}
		</ul>
	);
});

class SortableComponent extends Component {
	state = {
		items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
	};
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ items }) => ({
			items: arrayMove(items, oldIndex, newIndex),
		}));
	};
	render() {
		return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
	}
}

render(<SortableComponent />, document.getElementById('root'));
export default SortableComponent;


// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import {
// 	SortableContainer,
// 	SortableElement,
// 	arrayMove,
// } from 'react-sortable-hoc';

// // const { getMovieTitle } = this.props;

// const SortableItem = SortableElement( ({ getMovieTitle }) => {
// 	return <li>{getMovieTitle}</li>;
// });

// const SortableList = SortableContainer(({ movies }) => {
// 	return (
// 		<ul>
// 			{movies.map((value, index) => (
// 				<SortableItem key={`item-${index}`} index={index} value={value} />
// 			))}
// 		</ul>
// 	);
// });

// class SortableComponent extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			movies: props.getMovieTitle,
// 			// items: ['movie'],
// 		};
// 	}

// 	onSortEnd = ({ oldIndex, newIndex }) => {
// 		this.setState(({ items }) => ({
// 			movies: arrayMove(items, oldIndex, newIndex),
// 		}));
// 	};
// 	render() {
// 		return <SortableList movies={this.state.movies} onSortEnd={this.onSortEnd} />;
// 	}
// }

// render(<SortableComponent />, document.getElementById('root'));
// export default SortableComponent;