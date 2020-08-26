test('Plugin should load translations from web', async () => {
	const { layouts } = require('../layouts/index.web');
	expect(layouts.SettingsPageDesktop).toBeDefined();
});
