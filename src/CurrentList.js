import React, { Component } from 'react';
import { render } from 'react-dom';
import "./CurrentList.css";
import "./Global.css";
import {
	SortableContainer,
	SortableElement,
	arrayMove,
} from 'react-sortable-hoc';


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

	componentDidUpdate(prevProps) {
		console.log(prevProps, this.props);
		if (prevProps.chosenMovies.length !== this.props.chosenMovies.length) {
			// console.log(`they're different`);
			this.setState({
				items: this.props.chosenMovies
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

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

// render(<CurrentList />, document.getElementById('root'));
export default CurrentList;




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