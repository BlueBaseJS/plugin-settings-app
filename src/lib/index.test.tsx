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
import { createSettingsRoutes } from './createSettingsRoutes';
import { createDesktopNavigator as navigator } from '../createSettingsRoutes/createDesktopNavigator';

jest.mock('expo', () => { });

export let Component: any;
describe('SettingsPageList', () => {
    const Desktop: any = createDesktopNavigator;
    it('should return SettingsPageList', async () => {
        require('../index');

        const data: any = Desktop({ pages: [{ title: 'setting' }] });
        data.routes[0].screen();
        const datas: any = navigator({ pages: [{ title: 'setting' }] as any });
        datas.routes[0].screen();
        const datass: any = createMobileRoutes({ mainRoute: { name: 'screen' } as any, pages: [{ title: 'setting' }] as any });
        datass[0].screen();
        datass[1].screen();
        const routes: any = createSettingsRoutes({ pages: [{ title: 'setting' }] as any } as any);
        routes.routes[0].screen();

        expect(data).toContain('size');
    });



});


