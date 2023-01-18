const splitAndTrim = (str: string | null) =>
  str ? str.split(",").map((_) => _.trim()) : [];

export default splitAndTrim;
