export const getAge = (dob) => {
  const diff = Date.now() - dob.getTime();
  const age = new Date(diff);

  return Math.abs(age.getUTCFullYear() - 1970);
};
