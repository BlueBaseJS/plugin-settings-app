import { isPromise } from '@bluebase/core';

test('Plugin should load translations from web', async () => {
	const { lang } = require('../lang/index.web');
	expect(isPromise(lang['bluebase.intl.messages.ur'])).toBe(true);
});
