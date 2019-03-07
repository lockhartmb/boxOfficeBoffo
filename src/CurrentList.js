// import React, { Component } from 'react';
// import { SortableContainer, SortableElement } from 'react-sortable-hoc';


// const Sortable = require('react-sortable-hoc');
// const SortableContainer = Sortable.SortableContainer;
// const SortableElement = Sortable.SortableElement;




// class CurrentList extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			items: ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8', 'Item9', 'Item10',]
// 		}
// 	}



// 	render() {
// 		return (
// 			<section>
// 				<p className="currentList">Current List</p>
// 				<ul></ul>
// 			</section>
// 		)
// 	}
// }

// export default CurrentList;

// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMove } from 'array-move';

const SortableItem = sortableElement(({ value }) => <li>{value}</li>);

const SortableContainer = sortableContainer(({ children }) => {
	return <ul>{children}</ul>;
});

class CurrentList extends Component {
	constructor(){
		super();
		this.state = {
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
		};
	}
	

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ items }) => ({
			items: arrayMove(this.state.items, oldIndex, newIndex),
		}));
	};

	render() {
		const { items } = this.state;

		return (
			<SortableContainer onSortEnd={this.onSortEnd}>
				{items.map((value, index) => (
					<SortableItem key={`item-${index}`} index={index} value={value} />
				))}
			</SortableContainer>
		);
	}
}

export default CurrentList;
render(<CurrentList />, document.getElementById('root'));