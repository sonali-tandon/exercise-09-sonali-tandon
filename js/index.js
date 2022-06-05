console.log("\"Script running!\" is good");

let myName = "Sonali Tandon";
console.log(myName);

let getVowelCount = (aString) => {
    let lowerCaseString, modifiedString;
    lowerCaseString = aString.toLowerCase();
    modifiedString = lowerCaseString.replaceAll("a", "");
    modifiedString = modifiedString.replaceAll("e", "");
    modifiedString = modifiedString.replaceAll("i", "");
    modifiedString = modifiedString.replaceAll("o", "");
    modifiedString = modifiedString.replaceAll("u", "");
    modifiedString = modifiedString.replaceAll("y", "");
    return lowerCaseString.length - modifiedString.length;
}

let numVowelsInName = getVowelCount(myName);
console.log(numVowelsInName);