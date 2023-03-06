import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '../components/Header';

describe('Header', () => {
	test('header renders on page', () => {
		render(<Header />);

		expect(screen.getByText('DevWars!!!1!')).toBeInTheDocument();
	});
});
