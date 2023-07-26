import { buildPlugins } from '../buildPlugins/buildPlugins.js';
import { buildLoaders } from '../buildLoaders/buildLoaders.js';
import { buildResolvers } from '../buildResolvers/builddResolvers.js';
import { buildDevServer } from '../buildDevServer/buildDevServer.js';

export function buildWebpackConfig(options) {
	const { paths, mode, isDev } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: buildDevServer(options),
	};
}
