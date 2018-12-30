import React from 'react';
import {shallow} from 'enzyme';
import Book from './Book';

test('Book should build the table row from strings passed as props', () => {
	var input = {
	  title: 'Title 1',
	  author: 'Author 1'
	};
	
	const component = shallow(<Book author={input.author} title={input.title}/>);
	const row = <tr><td>Title 1</td><td>Author 1</td></tr>;
	expect(component.contains(row)).toEqual(true);

});

