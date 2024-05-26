function telephoneCheck(str) {
    let regex=/1?\s?((\d{3})|(\(\d{3}\)))[- ]?(\d{3})[- ]?(\d{4})/;

  return regex.test(str) && str.match(regex)[0]===str;
}

telephoneCheck("555-555-5555");
