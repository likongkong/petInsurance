function showToast (title,duration,icon = 'none') {
	uni.showToast({
	    title: title,
		duration: duration,
		icon:icon,
	});
}

module.exports = {
	showToast
}