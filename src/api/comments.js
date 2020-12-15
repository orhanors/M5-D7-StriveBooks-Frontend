export async function addComment(asin, comment) {
	try {
		const response = await fetch(
			process.env.REACT_APP_BE_URL + `/${asin}/comments`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(comment),
			}
		);

		if (response.ok) {
			alert("comment added successfuly");
			const result = response.json();
			return result;
		} else {
			alert("something went wrong");
			const error = response.json();
			return error;
		}
	} catch (error) {
		console.log(error);
	}
}

export async function getComments(asin) {
	try {
		const response = await fetch(
			process.env.REACT_APP_BE_URL + `/${asin}/comments`
		);

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

export async function deleteComment(commentId) {
	try {
		const response = await fetch(
			process.env.REACT_APP_BE_URL + `/comments/${commentId}`,
			{ method: "DELETE" }
		);

		if (response.ok) {
			alert("succesfully deleted");
			const data = response.json();
			return data;
		} else {
			alert("something went wrong");
			const error = response.json();
			return error;
		}
	} catch (error) {
		console.log(error);
	}
}
