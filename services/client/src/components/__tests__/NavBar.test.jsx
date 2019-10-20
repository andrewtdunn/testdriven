import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import NavBar from '../NavBar'

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const title = 'Hello, World!';

test('NavBar renders properly', () => {
    const wrapper = shallow(<NavBar title={title}/>);
    const element = wrapper.find('strong')
    expect(element.length).toBe(1);
    expect(element.get(0).props.children).toBe(title);
});

test('NavBar renders a snapshot properly', () => {
    const tree = renderer.create(
        <Router location="/"><NavBar title={title}/></Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});