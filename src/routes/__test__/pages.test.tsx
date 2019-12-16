describe('pages', () => {
	it('should show header on mobile devices', () => {
		const { pages } = require('../pages');
		let navigation = pages[0].navigationOptions;
		const opt = { screenProps: { intl: { __: (message: string) => message } } };
		expect(navigation(opt).title).toBe('General');
		navigation = pages[1].navigationOptions;
		expect(navigation(opt).title).toBe('About');
	});
});
