function cylinderVolume(r, h, fixed = 2) {
	return (r * r * Math.PI * h).toFixed(fixed);
}

function cylinderSurface(r, h, fixed = 2) {
	return (r * r * Math.PI * 2 + r * Math.PI * 2 * h).toFixed(fixed);
}

console.log(cylinderVolume(3, 5, 6), cylinderSurface(3, 5));