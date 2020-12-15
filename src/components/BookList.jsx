import React, { useState, useEffect } from "react";
import Book from "./Book";
import { getBooks } from "../api/booksApi";
import { Col, Container, Row, Spinner } from "react-bootstrap";

function BookList(props) {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getAllBooks();
	}, []);
	const getAllBooks = async () => {
		setLoading(true);
		try {
			const allBooks = await getBooks();
			setBooks(allBooks.slice(0, 24));
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			{books.length > 0 && !loading ? (
				<Container>
					<Row>
						{books.map((book) => {
							return <Book book={book} />;
						})}
					</Row>
				</Container>
			) : (
				<Spinner
					style={{ marginLeft: "50%" }}
					animation='border'
					role='status'>
					<span className='sr-only'>Loading...</span>
				</Spinner>
			)}
		</div>
	);
}

export default BookList;
