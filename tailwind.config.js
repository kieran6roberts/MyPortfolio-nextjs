module.exports = {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true
    },
    theme: {
      fontSize: {
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
        fontFamily: {
          pri: "var(--font-pri)",
        },
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
          hero: "500px"
        },
        listStyleType: {
          circle: "var(--list-style)"
        },
      },
    },
    variants: {
      animation: ["motion-safe", "motion-reduce"]
    },
    plugins: [],
  }
  