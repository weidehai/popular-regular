const pureNumber = "\\d+";
const pureFloat = "((\\d*\\.\\d+$)|(\\d+\\.\\d*))";
const signFloat = "(([+-]+\\d*\\.\\d+)|([+-]+\\d+\\.\\d*))";
const signNumber = "[+-]+\\d+";
const leftParentheses = "\\(";
const rightParentheses = "\\)";
const whiteSpace = "\\s";
const chinese = "[^\\u0000-\\u00FF]"
const phoneNumber = "^1(\\d){10}$"

export {
  pureNumber,
  pureFloat,
  signFloat,
  signNumber,
  leftParentheses,
  rightParentheses,
  whiteSpace,
  chinese,
  phoneNumber
};
