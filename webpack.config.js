module.exports = {
  entry: "./src/app.js",
  output: {
  	path: "./dist/",
    publicPath: "./dist/",
    filename: "bundle.js"
  },
  watch: true,

  module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['es2015'] 
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js']
 },
}