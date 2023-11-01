const getPrettyLocation = (pathName) => {
  if (typeof pathName !== "string" && pathName.length === 0) return;
  const [, value] = pathName.split("/");
  if (value === "") return "Home.";
  const prettyLocation = value[0].toUpperCase() + value.slice(1) + '.';
  return prettyLocation;
};

export default getPrettyLocation;
