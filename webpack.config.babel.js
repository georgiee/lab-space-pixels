import webpack from 'webpack';
import path from 'path';


const developmentFlags = {
  devtool: null,
  historyApiFallback: false,
  watch: false
}

const entry = {
  vendor: ['stats-js', 'resource-loader', 'glslify', 'raf-loop', 'lodash', 'three', 'three-orbit-controls', 'three-orbit-viewer'],
  application: './src/js/application.js'
}

const output = {
  path: "dist",
  filename: '[name].js',
  sourceMapFilename: '[file].map'
}

const externals = {
  "dat.GUI": "dat.GUI"
}
const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel'
  },
  {
    test: /node_modules/,
    loader: 'ify'
  }
];

const module = {
  loaders, 
  postLoaders: [
    {
      test: /\.js$/,
      loader: 'ify'
    }
  ]
}

const plugins = [
new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
 new webpack.ProvidePlugin({
    "THREE": "three"
  }) 
]

const resolve = {
  root: path.resolve(__dirname, 'js'),
  alias :{
    "three-hmr" : "webpack-three-hmr-test/lib/three-hmr"
  }
}

const webpackConfig = {
  ...developmentFlags,
  entry, output, module, externals, plugins, resolve, 
  context: __dirname,
  node: { __filename: true }

}
export default webpackConfig;