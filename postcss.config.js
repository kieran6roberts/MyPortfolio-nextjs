const purgecss = {
  "@fullhuman/postcss-purgecss": {
    content: [
      "./pages/**/*.tsx",
      "./src/components/**/*.tsx",
      "./src/containers/**/*.tsx",
    ],
    defaultExtractor: (content) => {
      const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
      const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
      return broadMatches.concat(innerMatches);
    }
  }
}
        
  
  module.exports = {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
      "postcss-preset-env": {
        stage: 2
      },
    }
  };