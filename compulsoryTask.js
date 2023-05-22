let printValuesOf = (jsObject, keys) => {
    for (let i = 0; i <= keys.length; i++) {
      // The 'key' variable was not being defined correctly. The correct way
      // to define it is to use the 'keys[i]' expression, which returns the
      // current key being processed in the loop. However, the code was using
      // the 'k' variable, which had not been defined anywhere in the function.
      // To fix this, the 'k' variable was replaced with the 'key' variable.
      let key = keys[i];
      console.log(jsObject[key]);
    }
  };
  // The 'simpsonsCatchphases' variable was not used written correctly with camelCase
  let simpsonsCatchPhrases = {
    lisa: "BAAAAAART!",
    bart: "Eat My Shorts!",
    marge: "Mmm~mmmmm",
    homer: "d'oh!",
    maggie: "(Pacifier Suck)",
  };
  
  // The function was being called correctly, but the second argument was not
  // an array of strings, as expected by the function. To fix this, an array
  // of strings was passed as the second argument to the function.
  printValuesOf(simpsonsCatchPhrases, ["lisa", "bart", "homer"]);
  
  // Expected console output:
  
  // BAAAAAART!
  // Eat My Shorts!
  // d'oh!
  // undefined
  