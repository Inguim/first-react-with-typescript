export default function genRGBAColor (opacity: number) {
  let color: Array<number> = [];
  for (var i = 0; i < 3; i++) {
    let number = Math.floor(Math.random() * 255 + 1);
    color = [...color, number];
  }
  return `rgb(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
};
