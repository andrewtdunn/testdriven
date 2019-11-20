import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from '../Footer';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Footer renders properly', () => {
    const wrapper = shallow(<Footer/>);
    const element = wrapper.find('span');
    expect(element.length).toBe(1);
    expect(element.text()).toBe('Copyright 2019 TestDriven.io');
});

test('Footer renders a snapshot properly', () => {
    const tree = renderer.create(<Footer/>).toJSON();
    expect(tree).toMatchSnapshot();
});