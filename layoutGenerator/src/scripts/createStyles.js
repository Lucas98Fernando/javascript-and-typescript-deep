export default function createStyles(element, { styles }) {
  Object.keys(styles).map((el) => (element.style[el] = styles[el]));
}
