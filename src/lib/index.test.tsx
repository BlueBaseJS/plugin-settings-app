const mockGetDimensions = jest.fn().mockReturnValue({
    height: 800,
    width: 300,
});
jest.mock('expo', () => ({}));
jest.mock('react-native/Libraries/Utilities/Dimensions', () => {
    const DimensionsActual = require.requireActual('react-native/Libraries/Utilities/Dimensions');
    return class extends DimensionsActual {
        static get = mockGetDimensions;
    };
});

import { createDesktopNavigator } from './createDesktopNavigator';
import { createMobileRoutes } from './createMobileNavigator';
import { createDesktopNavigator as navigator } from '../createSettingsRoutes/createDesktopNavigator';

jest.mock('expo', () => { });
jest.mock('expo', () => { });

export let Component: any;
describe('SettingsPageList', () => {
    const Desktop: any = createDesktopNavigator;
    it('should return SettingsPageList', async () => {
        require('../index');

        const data: any = Desktop({ pages: [{ title: 'setting' }] });
        data.routes[0].screen();

    });
    it('should return SettingsPageList', async () => {
        require('../index');

        const data: any = navigator({ pages: [{ title: 'setting' }] as any });
        data.routes[0].screen();

    });

    it('should return SettingsPageList', async () => {
        require('../index');

        const data: any = createMobileRoutes({ mainRoute: { name: 'screen' } as any, pages: [{ title: 'setting' }] as any });
        data[0].screen();
        data[1].screen();

    });


});


