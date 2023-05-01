const transformLeft = {
  1() {
    return "rotateX(170deg) rotateY(170deg) translateZ(20px)";
  },
  2() {
    return "rotateX(170deg) rotateY(260deg) translateZ(20px)";
  },
  3() {
    return "rotateX(-100deg) rotateY(270deg) translateZ(20px)";
  },
  4() {
    return "rotateX(-10deg) rotateY(-80deg) translateZ(20px)";
  },
  5() {
    return "rotateX(-280deg) rotateY(450deg) translateZ(20px)";
  },
  6() {
    return "rotateX(-190deg) rotateY(350deg) translateZ(20px)";
  },
};

const transformRigth = {
  1() {
    return "rotateX(-10deg) rotateY(-10deg) translateZ(-40px)";
  },
  2() {
    return "rotateX(-10deg) rotateY(80deg) translateZ(20px)";
  },
  3() {
    return "rotateX(-100deg) rotateY(90deg) translateZ(20px)";
  },
  4() {
    return "rotateX(-10deg) rotateY(-100deg) translateZ(-40px)";
  },
  5() {
    return "rotateX(-280deg) rotateY(0deg) translateZ(0px)";
  },
  6() {
    return "rotateX(-190deg) rotateY(370deg) translateZ(100px)";
  },
};

export {
  transformLeft,
  transformRigth,
};
