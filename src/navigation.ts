import { NavigatorProps } from '@bluebase/components';
import { resolveThunk, RouteOptions } from '@bluebase/core';

// Note: This implementation is for "React Router" library
export const navigation = {
	'bluebase.navigator.main': [
		{
			key: 'bluebase-navigator-main-privacy-and-terms',
			priority: 20,

			value: async (inputNavigator: NavigatorProps, opts: RouteOptions) => {
				const { intl } = opts;

				return {
					...inputNavigator,

					routes: [
						{
							name: 'PrivacyPolicy',
							screen: 'PrivacyPolicy',
							path: '/privacy',
							exact: true,

							options: {
								contentStyle: {
									backgroundColor: 'black',
								},
								presentation: 'modal',
								title: intl.__('Privacy Policy'),
							},
						},
						{
							name: 'TermsOfService',
							screen: 'TermsOfService',
							path: '/terms',
							exact: true,

							options: {
								contentStyle: {
									backgroundColor: 'black',
								},
								presentation: 'modal',
								title: intl.__('Terms of Service'),
							},
						},
						...resolveThunk(inputNavigator.routes, opts),
					],
				};
			},
		},
	],
};
