export function isName(value) {
  return /^[a-zA-Z\s]*$/.test(value);
}
export function isPhone(value) {
  return /^(?:\d{10}|\s*)$/.test(value);
}
export function isAdd(value) {
  return /^[a-zA-Z0-9,\s\-]*$/.test(value);
}

export function isCode(value) {
  return /^[a-zA-Z0-9]*$/.test(value);
}
export function isEdu(value) {
  return /^[a-zA-Z. ]*$/.test(value);
}
