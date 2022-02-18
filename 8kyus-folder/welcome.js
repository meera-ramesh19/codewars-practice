// Welcome!

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied
// FUNDAMENTALSHASHESDATA STRUCTURESOBJECTS

function greet(language) {
  let welcomes = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  let lang = "";
  switch (language) {
    case "english":
      lang = `${welcomes.english}`;
      break;
    case "czech":
      lang = `${welcomes.czech}`;
      break;
    case "danish":
      lang = `${welcomes.danish}`;
      break;
    case "dutch":
      lang = `${welcomes.dutch}`;
      break;
    case "estonian":
      lang = `${welcomes.estonian}`;
      break;
    case "finnish":
      lang = `${welcomes.finnish}`;
      break;
    case "flemish":
      lang = `${welcomes.flemish}`;
      break;
    case "french":
      lang = `${welcomes.french}`;
      break;
    case "german":
      lang = `${welcomes.german}`;
      break;
    case "irish":
      lang = `${welcomes.irish}`;
      break;
    case "italian":
      lang = `${welcomes.italian}`;
      break;
    case "latvian":
      lang = `${welcomes.latvian}`;
      break;
    case "lithuanian":
      lang = `${welcomes.lithuanian}`;
      break;
    case "polish":
      lang = `${welcomes.polish}`;
      break;
    case "spanish":
      lang = `${welcomes.spanish}`;
      break;
    case "swedish":
      lang = `${welcomes.swedish}`;
      break;
    case "welsh":
      lang = `${welcomes.welsh}`;
      break;
    default:
      lang = `${welcomes.english}`;
      break;
  }
  return lang;
}
