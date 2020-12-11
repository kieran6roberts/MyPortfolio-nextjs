module.exports = {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true
    },
    purge: {
      enabled: true,
      content: [
        "./src/components/**/*.tsx",
        "./src/containers/**/*.tsx",
        "./pages/**/*.tsx"
      ]
    },
    theme: {
      fontSize:{
        xxxs: "var(--text-3xs)",
        xxs: "var(--text-2xs)",
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        xxl: "var(--text-2xl)",
        xxxl: "var(--text-3xl)",
      },
      extend: {
        textColor: {
          pri: "var(--color-pri)",
          sec: "var(--color-sec)",
          acc: "var(--color-acc)",
          dark: "var(--color-dark)",
          light: "var(--color-light)"
        },
        backgroundColor: {
          pri: "var(--color-pri)",
          sec: "var(--color-sec)",
          acc: "var(--color-acc)",
          dark: "var(--color-dark)",
          light: "var(--color-light)",
          offLight: "var(--color-off-light)"
        },
        borderColor: {
          pri: "var(--color-pri)",
          acc: "var(--color-acc)"
        },
        width: {
          offScreen: "var(--off-screen)"
        },
        height: {
          450: "450px",
          halfScreen: "50vh"
        },
      },
    },
    variants: {},
    plugins: [],
  }
  