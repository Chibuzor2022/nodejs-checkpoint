const generator = require("generate-password");

const passwordOptions = {
	length: 10,  //Lenght of password with default 10
	numbers: true, //include numbers
	symbols: true,  //include symbols
	uppercase: true, //include uppercase
	lowercase: true,  //include lower case
};

const password = generator.generate(passwordOptions);
console.log("Generated Password:", password);
