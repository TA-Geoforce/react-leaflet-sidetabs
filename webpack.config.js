/* eslint-disable */
module.exports = {
    output: {
      library: 'ReactLeaflet-sideTabs',
      libraryTarget: 'umd'
    },
    module: {
          rules: [
              {
                  test: /\.(js|jsx)$/,
                  use: {
                      loader: "babel-loader",
                      options: {
                        presets: ["@babel/preset-env"],
                      }
                    },
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
          ]
      }
  };