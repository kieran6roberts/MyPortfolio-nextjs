const purgecss = [
    "@fullhuman/postcss-purgecss",
        {
          content: [
            "./pages/**/*.{js, jsx, ts, tsx}",
            "./components/**/*.{js, jsx, ts, tsx}"
          ],
          defaultExtractor: (content) => {
            const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
            const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
            return broadMatches.concat(innerMatches);
        }
      }
  ];
  
  module.exports = {
    plugins: {
      tailwindcss: {},
      "postcss-preset-env": {
        stage: 2
      },
      ...(process.env.NODE_ENV === "production" ? purgecss : undefined)
    }
  };