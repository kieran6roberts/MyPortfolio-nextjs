export const particlesConfig = {
    fpsLimit: 30,
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          value_area: 500
        }
      },
      color: {
        value: "#06e08d",
        animation: {
          enable: true,
          speed: 20,
          sync: true
        }
      },
      shape: {
        type: ["circle"]
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 20,
        random: {
          enable: true,
          minimumValue: 15
        }
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "light"
        },
        resize: true
      },
      modes: {
        light: {
          area: {
            gradient: {
              start: "#06e08d",
              stop: "#ff0eeb"
            }
          },
          shadow: {
            color: "#17163e"
          }
        }
      }
    },
    detectRetina: true,
    background: {
      color: "#000f2c"
    }
  };