export default function validNumber(number) {
  let newNumber = number.replace(/[\s\-()]+/g, '');
  if (/^89/.test(newNumber)) {
    newNumber = newNumber.replace(/^8/, '+7');
  }
  return newNumber;
}
