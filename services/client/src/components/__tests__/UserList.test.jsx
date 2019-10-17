import React from 'react';
import { shallow, mount, render, configure} from 'enzyme';
import renderer from 'react-test-renderer';
import UsersList from '../Userslist';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


const users = [
    {
        'active': true,
        'email': 'hermanmu@gmail.com',
        'id': 1,
        'username': 'michael'
    },
    {
        'active': true,
        'email': 'michael@mherman.org',
        'id': 2,
        'username': 'michael herman'
    }
];


test('UsersList renders properly', () => {
    const wrapper = shallow(<UsersList users={users}/>);
    const element = wrapper.find('h4');
    expect(element.length).toBe(2);
    expect(element.get(0).props.children).toBe('michael');
});

test('UsersList renders a snapshot properly', () => {
    const tree = renderer.create(<UsersList users={users}/>).toJSON();
    expect(tree).toMatchSnapshot();
})