export function isSupportOpen(date: Date, days: number[], opens: number, closes: number) {
	if (!Array.isArray(days)) {
		return false;
	}

	const currentDay = date.getDay();

	if (days.find((day) => day === currentDay) === undefined) {
		return false;
	}

	const currentHour = date.getUTCHours();

	if (currentHour < opens) {
		return false;
	}

	if (currentHour >= closes) {
		return false;
	}

	return true;
}
