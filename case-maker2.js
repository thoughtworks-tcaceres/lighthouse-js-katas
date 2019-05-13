const makeCase = function(input, styles) {
  // Put your solution here
  if (!Array.isArray(styles)) {
    styles = [styles];
  }

  //tier1**********
  //camel
  const camel = function(input) {
    input = input
      .split(" ")
      .map((word, index) => {
        if (index !== 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word;
        }
      })
      .join("");
    return input;
  };

  //pascal
  const pascal = function(input) {
    input = input
      .split(" ")
      .map((word, index) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("");
    return input;
  };

  //snake
  const snake = function(input) {
    input = input.split(" ").join("_");
    return input;
  };

  //kebab
  const kebab = function(input) {
    input = input.split(" ").join("-");
    return input;
  };

  //title
  const title = function(input) {
    input = input
      .split(" ")
      .map((word, index) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    return input;
  };

  //tier2**********
  //vowel
  const vowel = function(input) {
    for (var i = 0; i < input.length; i++) {
      if (
        input.charAt(i) === "a" ||
        input.charAt(i) === "e" ||
        input.charAt(i) === "i" ||
        input.charAt(i) === "o" ||
        input.charAt(i) === "u"
      ) {
        input = input.replace(input.charAt(i), input.charAt(i).toUpperCase());
      }
    }
    return input;
  };

  //consonant
  const consonant = function(input) {
    for (var i = 0; i < input.length; i++) {
      if (
        !(
          input.charAt(i) === "a" ||
          input.charAt(i) === "e" ||
          input.charAt(i) === "i" ||
          input.charAt(i) === "o" ||
          input.charAt(i) === "u"
        )
      ) {
        input = input.replace(input.charAt(i), input.charAt(i).toUpperCase());
      }
    }
    return input;
  };

  //tier3**********
  //upper
  const upper = function(input) {
    input = input.toUpperCase();
    return input;
  };

  //lower
  const lower = function(input) {
    input = input.toLowerCase();
    return input;
  };

  styles.forEach(style => {
    //tier 1**********
    if (style === "camel") {
      input = camel(input);
    }
    if (style === "pascal") {
      input = pascal(input);
    }
    if (style === "snake") {
      input = snake(input);
    }
    if (style === "kebab") {
      input = kebab(input);
    }
    if (style === "title") {
      input = title(input);
    }
  });

  styles.forEach(style => {
    //tier 2**********
    if (style === "vowel") {
      input = vowel(input);
    }
    if (style === "consonant") {
      input = consonant(input);
    }
  });

  styles.forEach(style => {
    //tier3**********
    if (style === "upper") {
      input = upper(input);
    }
    if (style === "lower") {
      input = lower(input);
    }
  });
  return input;
};

makeCase("this is a string", "camel");
makeCase("this is a string", "pascal");
makeCase("this is a string", "snake");
makeCase("this is a string", "kebab");
makeCase("this is a string", "title");
makeCase("this is a string", "vowel");
makeCase("this is a string", "consonant");
makeCase("this is a string", ["upper", "snake"]);
