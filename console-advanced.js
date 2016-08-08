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

