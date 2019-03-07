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


class CurrentList extends Component {
	constructor(){
		super();
		this.state = {
			items: [],
		};
	}
	
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ items }) => ({
			items: arrayMove(items, oldIndex, newIndex),
		}));
	};

	render() {
		return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
	}
}

render(<CurrentList />, document.getElementById('root'));
export default CurrentList;


