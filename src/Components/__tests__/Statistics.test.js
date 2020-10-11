import React from 'react';
import { shallow, mount } from 'enzyme';
import Statistics from 'Components/Statistics';
import moxios from 'moxios';

let wrapped;
beforeEach(() => {
	moxios.install();
	moxios.stubRequest('/dashboard', {
		status: 200,
		response: [
			{
				id: 1,
				title: 'testing api',
				type: 'profiles',
				line1: 10,
			},
			{
				id: 2,
				title: 'testing Average Markes',
				type: 'calculation',
				line1: 7,
			},
			{
				id: 3,
				title: 'testing Underperforming students',
				type: 'calculation',
				line1: 2,
				line2: '(3%)',
			},
		],
	});
	wrapped = mount(<Statistics />);
});
afterEach(() => {
	moxios.uninstall();
	wrapped.unmount();
});
it('can fetch list of dashboard stats', (done) => {
	moxios.wait(() => {
		wrapped.update();
		expect(wrapped.find('.card').length).toEqual(3);
		done();
	});
});
