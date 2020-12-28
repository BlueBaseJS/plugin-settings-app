// added latest fixes
test('Plugin should load translations from web', async () => {
	const { components } = require('../components/index.web');
	expect(components.AppearanceSettingList).toBeDefined();
});
