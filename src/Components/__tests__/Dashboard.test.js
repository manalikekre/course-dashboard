import React from 'react';
import Dashboard from 'Components/Dashboard';
import { shallow, mount } from 'enzyme';
import Statistics from 'Components/Statistics';
import Students from 'Components/Students';

let wrapped;
beforeEach(() => {
	wrapped = mount(<Dashboard />);
});

afterEach(() => {
	wrapped.unmount();
});
it('renders title', () => {
	expect(wrapped.find('.title').length).toEqual(1);
});
it('renders sidebar', () => {
	expect(wrapped.find('.sidebar').length).toEqual(1);
});

it('renders logged in user information', () => {
	expect(wrapped.find('.logged-in').length).toEqual(1);
});

it('shows Statistics component', () => {
	expect(wrapped.find(Statistics).length).toEqual(1);
});

it('shows Students component', () => {
	expect(wrapped.find(Students).length).toEqual(1);
});
