const images = {
  1: require('../assets/1.png'),
  2: require('../assets/2.png'),
  3: require('../assets/3.png'),
  4: require('../assets/4.png'),
  5: require('../assets/5.png'),
  6: require('../assets/6.png'),
  7: require('../assets/7.png'),
  8: require('../assets/8.png'),
  9: require('../assets/9.png'),
  10: require('../assets/10.png'),
  11: require('../assets/11.png'),
  12: require('../assets/12.png'),
};

export default function randomImage() {
  let min = 1;
  let max = 12;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;

  //   @ts-ignore
  return images[random];
}
