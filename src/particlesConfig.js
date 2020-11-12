export const particlesConfig = {
    fpsLimit: 30,
    particles: {
      number: {
        value: 5,
        density: {
          enable: true,
          value_area: 200
        }
      },
      color: {
        value: "#06e08d",
        animation: {
          enable: true,
          speed: 12,
        }
      },
      shape: {
        type: ["circle"]
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 30,
        random: {
          enable: true,
          minimumValue: 5
        }
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        out_mode: "out"
      }
    },
    detectRetina: true,
    background: {
      color: "#000f2c"
    }
  };