exports.getDate = () => {
  const date = new Date();
  const options = {
    month: "long",
    day: "numeric",
    weakday: "long",
    year: "numeric",
  };
  const today = date.toLocaleDateString("en-US", options);
  return today;
};
