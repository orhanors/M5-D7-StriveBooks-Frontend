import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import Comments from "./Comments";

function Book(props) {
	const [commentsModal, setcommentsModal] = useState(false);
	const [currentBookAsin, setCurrentBookAsin] = useState("");
	const book = props.book;
	return (
		<div>
			<Comments
				bookId={currentBookAsin}
				show={commentsModal}
				onHide={() => setcommentsModal(false)}
			/>
			<Col md={3}>
				<Card style={{ width: "12rem" }}>
					<Card.Img variant='top' src={book.img} />
					<Card.Body>
						<Card.Title>
							{book.title.substring(0, 14) + "..."}
						</Card.Title>
						<Card.Text>
							<strong>${book.price}</strong>
						</Card.Text>
						<Button
							id={book.asin}
							onClick={() => {
								setCurrentBookAsin(book.asin);
								setcommentsModal(true);
							}}
							variant='primary'>
							Comments
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</div>
	);
}

export default Book;
