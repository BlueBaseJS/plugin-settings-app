test('Plugin should load translations from web', async () => {
	const { settings } = require('../settings/index.web');
	expect(settings.CallSupportSetting).toBeDefined();
});
