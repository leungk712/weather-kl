export const generateAvatarName = (firstName: string, lastName: string) => {
  firstName = getFirstCharacterInWord(firstName);
  lastName = getFirstCharacterInWord(lastName);

  return `${firstName}${lastName}`;
};

export const getFirstCharacterInWord = (text: string) => {
  return text.slice(0, 1);
};
