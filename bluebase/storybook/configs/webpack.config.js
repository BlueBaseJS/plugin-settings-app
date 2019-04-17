const { storybookWebpackConfigs } = require('@bluebase/cli-essentials');

module.exports = (configBundle) => {

	config = storybookWebpackConfigs(configBundle);

	config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,
    use: {
      loader: "babel-loader",
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        presets: [
					"@bluebase/code-standards/babel.config"
				]
      }
    }
	});

	return config;
};
