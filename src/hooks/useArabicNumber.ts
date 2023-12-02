/**
 * useArabicNumber is a utility function that converts a string containing English digits to Arabic digits.
 *
 * @param {string} number - The input string containing English digits.
 * @returns {string} The converted string with Arabic digits.
 */

export const useArabicNumber = (number: string): string => {
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

  let result = '';
  for (let i = 0; i < number.length; i++) {
    const char = number.charAt(i);
    const index = englishDigits.indexOf(char);
    result += index !== -1 ? arabicDigits[index] : char;
  }

  return result;
};
