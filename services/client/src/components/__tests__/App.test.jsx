import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

import App from '../../App';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

beforeAll(() => {
    global.localStorage = {
        getItem: () => 'someToken'
    };
});

test('App renders without crashing', () => {
    const wrapper = shallow(<App/>);
});

test('App will call componentDidMount when mounted', () => {
    const onDidMount = jest.fn();
    App.prototype.componentDidMount = onDidMount;
    const wrapper = mount(<Router><App/></Router>);
    expect(onDidMount).toHaveBeenCalledTimes(1);
});