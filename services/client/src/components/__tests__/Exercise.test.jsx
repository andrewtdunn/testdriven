import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';

import AceEditor from 'react-ace';
jest.mock('react-ace');

import Exercise from '../Exercise';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const testData = {
    exercise: {
        id: 0,
        body: `Define a function called sum that takes two integers as arguments and returns their sum.`
    },
    editor: {
        value: '# Enter your code here.',
        button: {
            isDisabled: false,
        },
        showGrading: false,
        showCorrect: false,
        showIncorrect: false,
    },
    isAuthenticated: false,
    onChange: jest.fn(),
    submitExercise: jest.fn(),
};

beforeEach(() => {
    console.error = jest.fn();
    console.error.mockClear();
});

test('Exercise renders properly', () => {
    const wrapper = shallow(<Exercise {...testData}/>);
    const heading = wrapper.find('h5');
    expect(heading.length).toBe(1);
    expect(heading.text()).toBe(testData.exercise.body)
});

test('Exercises renders a snapshot properly when not authenticated', () => {
    const tree = renderer.create(<Exercise {...testData}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Exercises render a snapshot when authenticated', () => {
    testData.isAuthenticated = true;
    const tree = renderer.create(<Exercise {...testData}/>).toJSON();
    expect(tree).toMatchSnapshot();
});