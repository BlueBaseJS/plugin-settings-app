describe('routes', () => {
	it('shoul render header with title on mobile', async () => {
		const { routes } = require('../routes');
		const BB = {
			Filters: {
				run: (_msg: any, pages: any) => {
					return pages;
				},
			},
		};
		const route: any = await routes(BB);
		const navigation = route[0].navigationOptions;
		const opt = { screenProps: { intl: { __: (message: string) => message } } };
		expect(navigation(opt).title).toBe('Settings');
	});
});
