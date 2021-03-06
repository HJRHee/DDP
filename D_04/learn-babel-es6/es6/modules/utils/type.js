// CommonJS 진영 문법
// module.exports = 내보낼 모듈 객체, 함수, 배열

// ES6 표준
// export 변수, 함수, 객체, 배열, 클래스

let toString = Object.prototype.toString;

function type(data) {
  return toString.call(data).toLowerCase().slice(8,-1);
}

function isNumber(data) {
  return type(data) === 'number';
}

function isString(data) {
  return type(data) === 'string';
}

function isBoolean(data) {
  return type(data) === 'boolean';
}

function isFunction(data) {
  return type(data) === 'function';
}

function isArray(data) {
  return type(data) === 'array';
}

function isObject(data) {
  return type(data) === 'object';
}

function isEmptyObject(data) {
  return isObject(data) && (Object.entries(data).length === 0);
}


// 모듈(파일) 외부로 배포
module.exports = {
  type, isString, isNumber, isBoolean, isArray, isObject, isEmptyObject
};
