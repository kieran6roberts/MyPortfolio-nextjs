const regVariant = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    hidden: {
      opacity: 0
    }
  };

  const staggerVariant = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    },
    hidden: {
      opacity: 0,
    }
  };

  export {
      regVariant,
      staggerVariant
  };