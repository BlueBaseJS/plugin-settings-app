import { ur } from '../ur';

test('Plugin should load translations from web', async () => {
	const response = ur({ foo: 'bar' });
	expect(response).toMatchObject({ foo: 'bar' });
});
