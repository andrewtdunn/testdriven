import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';

import Exercises from '../Exercises';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Exercises renders properly when not authenticated.', () => {
    const wrapper = shallow(<Exercises/>);
    const element = wrapper.find('h5');
    expect(element.length).toBe(1);
    const alertMessage = wrapper.find('.notification > span');
    expect(alertMessage.get(0).props.children).toContain('Please log in to submit an exercise.');
});

test('Exercises renders properly when authenticated.', () => {
    const wrapper = shallow(<Exercises/>);
    const element = wrapper.find('h5');
    expect(element.length).toBe(1);
    const alertMessage = wrapper.find('notification');
    expect(alertMessage.length).toBe(0);
});

test('Exercises renders a snapshot properly', () => {
    const tree = renderer.create(<Exercises/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Exercises will call componentWillMount when mounted', () => {
    const onDidMount = jest.fn();
    Exercises.prototype.componentDidMount = onDidMount;
    const wrapper = mount(<Exercises/>);
    expect(onDidMount).toHaveBeenCalledTimes(1);
});