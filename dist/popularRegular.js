(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.PR = {}));
}(this, (function (exports) { 'use strict';

  const pureNumber = "\\d+";
  const pureFloat = "((\\d*\\.\\d+$)|(\\d+\\.\\d*))";
  const signFloat = "(([+-]+\\d*\\.\\d+)|([+-]+\\d+\\.\\d*))";
  const signNumber = "[+-]+\\d+";
  const leftParentheses = "\\(";
  const rightParentheses = "\\)";
  const whiteSpace = "\\s";

  exports.leftParentheses = leftParentheses;
  exports.pureFloat = pureFloat;
  exports.pureNumber = pureNumber;
  exports.rightParentheses = rightParentheses;
  exports.signFloat = signFloat;
  exports.signNumber = signNumber;
  exports.whiteSpace = whiteSpace;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
