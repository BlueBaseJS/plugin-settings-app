import { ur } from '../ur';
import { urRoman } from '../ur-roman';

test('Plugin should load translations from web', async () => {
	const response = ur({ foo: 'bar' });
	expect(response).toMatchObject({ foo: 'bar' });
});

test('Plugin should load translations from web', async () => {
	const response = urRoman({ foo: 'bar' });
	expect(response).toMatchObject({ foo: 'bar' });
});