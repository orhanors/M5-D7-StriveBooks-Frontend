export async function getBooks() {
	try {
		const response = await fetch(process.env.REACT_APP_BE_URL);

		if (response.ok) {
			const data = response.json();
			return data;
		} else {
			const error = response.json();
			return error;
		}
	} catch (error) {
		console.log(error);
	}
}
