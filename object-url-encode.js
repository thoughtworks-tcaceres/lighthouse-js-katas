const urlDecode = function(text) {
  // Put your solution here
  text = text.replace(/%20/g, " ");
  console.log(text);
  text = text.split("&");
  console.log(text);
  text.forEach((pair, index) => {
    console.log("in for loop");
    pair[index] = pair[index].split("=");
  });
  console.log(text);

  console.log("final value of text: " + text);
  return text;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
