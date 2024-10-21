import React from 'react';
import Button from '.';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

window.document.getSelection = jest.fn();

describe('<Button />', () => {
	it('calls onClick when button is clicked', async () => {
		const mockedOnClick = jest.fn();

		render(<Button onClick={mockedOnClick} />);
		expect(mockedOnClick).not.toBeCalled();

		await userEvent.click(screen.getByRole('button'));

		expect(mockedOnClick).toBeCalled();
	});
});
