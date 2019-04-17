export default function (input: any) {

	input.module.rules.push({
		exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,
		test: /\.js$/,
		use: {
			loader: 'babel-loader',
			options: {
        // Disable reading babel configuration
				babelrc: false,
				configFile: false,

				presets: [
					'@bluebase/code-standards/babel.config'
				]
			}
		}
	});

	return input;
}