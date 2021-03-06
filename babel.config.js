module.exports = {
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  },
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ]
}
