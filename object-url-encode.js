const urlDecode = function(text) {
  // Put your solution here
  text = text.replace(/%20/g, " ");
  text = text.split("&");
  text.forEach((pair, index) => {
    text[index] = text[index].split("=");
  });

  let textObj = {};
  text.forEach((pairArr, index) => {
    textObj[pairArr[0]] = text[index][1];
  });

  return textObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
