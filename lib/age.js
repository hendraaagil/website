export const getAge = () => {
  const diff = Date.now() - new Date('2003, 09, 26').getTime();
  const age = new Date(diff);

  return Math.abs(age.getUTCFullYear() - 1970);
};
