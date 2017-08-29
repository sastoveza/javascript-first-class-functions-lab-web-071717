function countdown(callback) {
	return window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
	return function(num) {return (num * multiplierValue)}
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3);

function multiplier(num, val) {
	return (num * val)
}

var doublerWithBind = createMultiplier.bind(null, 2)
var triplerWithBind = createMultiplier.bind(null, 3)