const { base, dark } = require("./themes");
const themeSwapper = module.parent.require("tailwindcss-theme-swapper");
module.exports = {
  plugins: [
    module.parent.require("@tailwindcss/aspect-ratio"),
    themeSwapper({
      themes: [
        {
          name: "base",
          selectors: [":root"],
          theme: base,
        },
        {
          name: "dark",
          selectors: [".dark"],
          mediaQuery: "@media (prefers-color-scheme: dark)",
          theme: dark,
        },
      ],
    }),
  ],
};
