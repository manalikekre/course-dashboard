import React from 'react';
import { mount } from 'enzyme';
import Students from 'Components/Students';
import moxios from 'moxios';
import { act } from 'react-dom/test-utils';

let wrapped;
beforeEach(() => {
	moxios.install();
});
afterEach(() => {
	wrapped.unmount();
	moxios.uninstall();
});
it('can fetch list of students', (done) => {
	moxios.stubRequest('/students', {
		status: 200,
		response: [
			{
				id: 1,
				name: 'Annete Watson',
				marks: 9.3,
			},
			{
				id: 2,
				name: 'Calvin Steward',
				marks: 8.9,
			},
			{
				id: 3,
				name: 'Ralph Richards',
				marks: 8.7,
			},
			{
				id: 4,
				name: 'Bernard Murphy',
				marks: 8.2,
			},
		],
	});
	wrapped = mount(<Students />);
	moxios.wait(() => {
		act(() => {
			wrapped.update();
		});
		expect(wrapped.find('.studentDetails').length).toEqual(4);
		done();
	});
});
