import React from 'react';
import BookList from './BookList';
import {shallow} from 'enzyme';

test('BookList state is set in constructor', () => {

    const wrapper = shallow(<BookList />);
    expect(wrapper.state().books.length).toEqual(2);

});

test('BookList addBook method pushes new book into state array ', () => {
        const wrapper = shallow(<BookList />);
        const inst = wrapper.instance();
        inst.addBook("title", "author");
        expect(wrapper.state().books.length).toEqual(3);
    });
