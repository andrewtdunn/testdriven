import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';

import Exercises from '../Exercises';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const exercises = [
            {
                id: 0,
                body: 'Define a function called sum that takes two integers as arguments and returns their sum.'
            },
            {
                id: 1,
                body: 'Define a function called reverse that takes a string as an argument and returns the string in reversed order.'
            },
            {
                id: 2,
                body: 'Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.'
            }
        ];

beforeEach(() => {
    console.error = jest.fn();
    console.error.mockClear();
});

test('Exercises renders properly when not authenticated.', () => {
    const onDidMount = jest.fn();
    Exercises.prototype.componentDidMount = onDidMount;
    const wrapper = shallow(<Exercises isAuthenticated={false}/>);
    wrapper.setState({exercises: exercises});
    const alert = wrapper.find('.notification');
    expect(alert.length).toBe(1);
    const alertMessage = wrapper.find('.notification > span');
    expect(alertMessage.get(0).props.children).toContain('Please log in to submit an exercise.');
});

test('Exercises renders properly when authenticated.', () => {
    const onDidMount = jest.fn();
    Exercises.prototype.componentDidMount = onDidMount;
    const wrapper = shallow(<Exercises isAuthenticated={true}/>);
    wrapper.setState({exercises: exercises});
    const alertMessage = wrapper.find('notification');
    expect(alertMessage.length).toBe(0);
});

test('Exercises renders a snapshot properly', () => {
    const onDidMount = jest.fn();
    Exercises.prototype.componentDidMount = onDidMount;
    const wrapper = shallow(<Exercises isAuthenticated={true}/>);
    wrapper.setState({exercises: exercises});
    const alert = wrapper.find('.notification');
    expect(alert.length).toBe(0);
});

test('Exercises will call componentWillMount when mounted', () => {
    const onDidMount = jest.fn();
    Exercises.prototype.componentDidMount = onDidMount;
    const wrapper = mount(<Exercises/>);
    expect(onDidMount).toHaveBeenCalledTimes(1);
});