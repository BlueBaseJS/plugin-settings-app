import './rn-addons';

import { BlueBaseDecorator } from '@bluebase/storybook-addon';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure, getStorybookUI } from '@storybook/react-native';

import BRConfigs from '../boot';
import { loadStories } from './storyLoader';

// BlueBase
addDecorator(BlueBaseDecorator(BRConfigs));

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
	loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
	asyncStorage: null,
});

export default StorybookUIRoot;
