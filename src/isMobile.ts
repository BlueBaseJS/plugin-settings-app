import { Dimensions } from 'react-native';

export const isMobile = () => {
	const dimensions = Dimensions.get('window');
	return dimensions.width <= 767;
};
