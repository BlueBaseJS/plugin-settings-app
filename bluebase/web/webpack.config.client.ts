import { DefinePlugin } from 'webpack';

export default function(config: any) {
	config.resolve.alias = {
		...config.resolve.alias,

		'react-native$': 'react-native-web',
		'@react-native-community/netinfo': 'react-native-web/dist/exports/NetInfo',
		// Add polyfills for modules that react-native-web doesn't support
		// Depends on expo-asset
		'react-native/Libraries/Image/AssetSourceResolver$': 'expo-asset/build/AssetSourceResolver',
		'react-native/Libraries/Image/assetPathUtils$': 'expo-asset/build/Image/assetPathUtils',
		'react-native/Libraries/Image/resolveAssetSource$': 'expo-asset/build/resolveAssetSource',
		// Alias internal react-native modules to react-native-web
		'react-native/Libraries/Components/View/ViewStylePropTypes$':
			'react-native-web/dist/exports/View/ViewStylePropTypes',
		'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
			'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
		'react-native/Libraries/vendor/emitter/EventEmitter$':
			'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
		'react-native/Libraries/vendor/emitter/EventSubscriptionVendor$':
			'react-native-web/dist/vendor/react-native/emitter/EventSubscriptionVendor',
		'react-native/Libraries/EventEmitter/NativeEventEmitter$':
			'react-native-web/dist/vendor/react-native/NativeEventEmitter',
	};
	config.module.rules.push({
		test: /\.js$/,
		exclude: /node_modules\/(?!(rn-placeholder|react-native-elements|@bluebase\/plugin-vector-icons\/node_modules\/react-native-vector-icons|react-native-vector-icons|expo-image-picker|react-native-animatable|react-native-svg|react-native-reanimated|expo-face-detector|react-native-gesture-handler|expo-linear-gradient|expo-payments-stripe|expo-gl|expo-av|expo-camera|expo|expo-barcode-scanner|expo-ads-admob|expo-blur|@expo\/vector-icons|@unimodules\/react-native-adapter)\/).*/,
		loader: 'babel-loader',
	});

	// config = withUnimodules(config, {
	// 	config: path.resolve(__dirname, '../../../build/storybook-native/app.json'),
	// });

	config.resolve.extensions = [
		'.web.ts',
		'.web.tsx',
		'.ts',
		'.tsx',
		'.web.js',
		'.web.jsx',
		'.js',
		'.jsx',
		'.json',
	];

	config.plugins.push(new DefinePlugin({ __DEV__: config.mode !== 'production' }));

	return config;
}
