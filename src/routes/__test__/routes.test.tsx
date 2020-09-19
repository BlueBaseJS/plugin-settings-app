describe('routes', () => {
	it('shoul render header with title on mobile', async () => {
		jest.mock('react-native/Libraries/Utilities/Platform', () => {
			const Platform = jest.requireActual('react-native/Libraries/Utilities/Platform');
			Platform.OS = 'web';
			return Platform;
		});

		const { routes } = require('../routes');
		const BB = {
			Filters: {
				run: (_msg: any, pages: any) => {
					return pages;
				},
			},
		};
		const route: any = await routes({ BB, intl: { __: (message: string) => message } });
		const navigation = route[0].options;
		expect(navigation.title).toBe('Settings');
	});
});
