export const formatName = (fullName: string) => {
  const names = fullName.split(' ');
  if (names.length === 3) {
    return `${names[1]} ${names[0].charAt(0)}. ${names[2].charAt(0)}.`;
  }
  return fullName;
};
