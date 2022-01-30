export default function createStyles(element, { styles }) {
  Object.keys(styles).map((el) => {
    let value = styles[el];
    element.style[el] = value;
  });
}
