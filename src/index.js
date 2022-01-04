module.exports = function toReadable (number) {
  const underTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '' , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = 'hundred';

  if (number < 20) {
    return underTwenty[number];
  } else if (number % 10 === 0 && number < 100) {
    return tens[number / 10]
  } else if (number > 20 && number < 100) {
    return `${tens[Math.floor(number / 10)]} ${underTwenty[number - Math.floor(number / 10) * 10]}`;
  } else if (number % 100 === 0) {
    return `${underTwenty[number / 100]} hundred`;
  } else if ((number > 100 && (number - Math.floor(number / 100) * 100) < 20)) {
    return `${underTwenty[Math.floor(number / 100)]} hundred ${underTwenty[number - Math.floor(number / 100) * 100]}`;
  } else if (number > 100 && number % 10 === 0) {
    return `${underTwenty[Math.floor(number / 100)]} hundred ${tens[(number - Math.floor(number / 100) * 100) / 10]}`;
  } else  if (number > 100 && number < 1000) {
    return `${underTwenty[Math.floor(number / 100)]} hundred ${tens[(Math.floor(number / 10) * 10 - Math.floor(number / 100) * 100) / 10]} ${underTwenty[number - Math.floor(number / 10) * 10]}`;
  }
}
