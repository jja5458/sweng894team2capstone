module.exports = {
    module: {
      rules: [
        {
          test: /pdf\.worker\.min\.js$/,
          use: { loader: 'file-loader' },
        },
        // Other rules...
      ],
    },
  };
  