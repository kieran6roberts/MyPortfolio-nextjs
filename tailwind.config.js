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
      "./pages/**/*.tsx"],
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
        screens: {
          tall: {"raw": "(min-height: 650px) and (max-width: 1024px)"},
          smWide: {"raw": "(max-height: 700px) and (min-width: 768px)"}
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
        objectPosition: {
          offTop: "50% 4px"
        },
        width: {
          offScreen: "var(--off-screen)"
        },
        maxHeight: {
          mobileH: "400px",
        },
        height: {
          hero: "500px",
          lgContain: "900px"
        },
        listStyleType: {
          circle: "var(--list-style)"
        },
      },
    },
    variants: {
      animation: ["motion-safe", "motion-reduce"],
      extend: {
        translate: ["group-hover"]
      }
    },
    plugins: [],
  }
  