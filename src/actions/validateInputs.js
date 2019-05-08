export default function validate(title, description) {
  // true means invalid, so conditions got reversed
  return {
    title: title.length === 0 || title.length > 200,
    description: description.length === 0 || description.length > 600
  };
}
