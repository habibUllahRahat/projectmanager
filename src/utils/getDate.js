
export function getFullDateFormatted(date) {
	const [day, month, year] = new Date(date)
		.toLocaleDateString("en-UK")
		.split("/")
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]
	const monthName = monthNames[parseInt(month, 10) - 1]

	return `${day} ${monthName} ${year}`
}

