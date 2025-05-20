export const staggerParent = {
  variants: {
    onscreen: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
        ease: 'easeInOut',
      },
    },
  },
  initial: 'offscreen',
  whileInView: 'onscreen',
  viewport: { once: true, amount: 0.3 },
};

export const leftToRightAnimation = {
  offscreen: {
    x: -80,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      duration: 0.6,
    },
  },
};

export const rightToLeftAnimation = {
  offscreen: {
    x: 80,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      duration: 0.6,
    },
  },
};

export const topToBottomAnimation = {
  offscreen: {
    y: -60,
    opacity: 0,
    rotate: -2,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      duration: 0.7,
    },
  },
};

export const bottomToTopAnimation = {
  offscreen: {
    y: 60,
    opacity: 0,
    rotate: 2,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      duration: 0.7,
    },
  },
};

export const blurAnimation = {
  offscreen: {
    opacity: 0,
    scale: 0.96,
    filter: 'blur(6px)',
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 22,
      duration: 0.9,
    },
  },
};
export const fadeInAnimation = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};
