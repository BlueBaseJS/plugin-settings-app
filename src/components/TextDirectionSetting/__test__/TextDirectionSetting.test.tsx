import { BlueBaseApp, getComponent } from '@bluebase/core';

import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const TextDirectionSetting = getComponent('TextDirectionSetting');
jest.mock('expo', () => { });
describe('TextDirectionSetting', () => {
    it('should return TextDirectionSetting', async () => {
        // mount components
        const wrapper: any = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <TextDirectionSetting />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'Dialog');

        expect(wrapper).toMatchSnapshot();
        wrapper.context = { changeDirection: () => '' };
        console.log(wrapper.find('View[testID="test-listItem"]').last());
        const onPress: any = wrapper.find('View[testID="test-listItem"]').last().find('List.Item').last().prop('onPress');
        onPress();

    });

});


