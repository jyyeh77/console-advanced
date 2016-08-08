/////// CONSOLE.ADVANCED ///////
// Advanced console adds new methods for inspecting objects.


/////// FILTER ///////
// console.filter logs all public object keys
console.filter = function(object) {
    console.log('{');
    for (var key in object) {

	if (key[0] !== '_') {
	    console.log('\t', key,":", object[key]);
	}

    }
    console.log('}');
}

//////// METHODS ///////
// console.methods logs all methods on an object as strings.
console.methods = function(object) {
    console.log("Methods: ", object.name);
    for (var key in object) {
	if (typeof object[key] === 'function') {
	    console.log( '\t', key, ":", object[key].toString());
	}
    }
}


// console.advance = logs everything, whatever that is.

module.exports = console;

///// ALTERNATIVE TO FILTER /////////

// // FILTERER ** removes methods private to users **
// console.filterer = function(obj){
//   for (var key in obj){
//     if (obj.hasOwnProperty(key)){
//       if (noUnderscore(key)) console.log('Instance method: ', key);
//       else console.log('Private instance method');
//     } else {
//       if (noUnderscore(key)) {
//         console.log('Prototype method: ', key);
//       } else {
//         console.log('Private prototype method');
//       }
//     }
//   }
// }

// function noUnderscore(str){
//   return str.charAt(0) !== '_' ? true : false;
// }
