module.exports = {
  presets: [['next/babel']],
  // super json allows nextjs to serialize props
  // that would normally not be serialized in json
  plugins: ['superjson-next'],
}