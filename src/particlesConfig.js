export const particlesConfig = {
    fpsLimit: 30,
    particles: {
      number: {
        value: 3,
        density: {
          enable: true,
          value_area: 200
        }
      },
      color: {
        value: "#ff0feb",
      },
      shape: {
        type: ["circle"]
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 50,
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