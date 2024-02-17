// animations.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 20, x: -50 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6 } },
  // whileInView: { scale: 1.1, opacity: 0.8 },
};

export const scaleIn = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1 } },
};

export const toLeft = {
  hidden: { opacity: 0, scale: 0.4, x: 100, y: 50 },
  visible: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 1 } },
};

export const zoomOut = {
  hidden: { opacity: 0, scale: 2, x: 200, y: 200 },
  visible: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 1 } },
};

export const imageAppear = {
  hidden: { borderRadius: "50%", scale: 0 },
  visible: {
    borderRadius: "0%",
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  bounce: {
    scale: 1.1,
    transition: { duration: 0.3, yoyo: Infinity },
    borderRadius: "10%",
  },
};

export const imageBall = {
  hidden: { borderRadius: "50%", scale: 0.2, x: "-50%" },
  visible: {
    borderRadius: "0%",
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut", type: 'spring', stiffness: 100 },
  },
};

export const flip = {
    hidden: { rotateY: 180 },
    visible: { rotateY: 0, transition: { duration: 1 } },
  };
  
  export const bounce = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, type: 'spring', stiffness: 350 } },
  };

// Stagger
export const staggerNavbar = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const staggerChildren = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Menyesuaikan interval stagger
    },
  },
  hidden: { opacity: 0 },
};
