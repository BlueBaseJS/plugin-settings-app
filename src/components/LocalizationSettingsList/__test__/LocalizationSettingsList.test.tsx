
jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'web';
    return Platform;
});

import { BlueBaseApp } from '@bluebase/core';
import { LocalizationSettingsList } from '../LocalizationSettingsList';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

jest.mock('expo', () => { });
describe('languageSetting', () => {
    it('should return External link url for web platform', async () => {
        // mount component
        const wrapper = mount(
            <BlueBaseApp configs={{ "plugin.settings-app.general.language.selection": "ur" }} plugins={[Plugin, MUI,]}>
                <LocalizationSettingsList />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'List');
        expect(wrapper.find('Divider').first().prop('inset')).toBe(true);

    });

});

