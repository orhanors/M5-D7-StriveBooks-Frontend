import React, { useState, useEffect } from "react";
import { deleteComment, getComments } from "../api/comments";
import { ListGroup, Button } from "react-bootstrap";
function ShowComments(props) {
	const [comments, setComments] = useState([]);
	const [deletedSize, setDeletedSize] = useState(0);

	const handleDelete = async (e) => {
		let commentId = e.currentTarget.id;

		const result = await deleteComment(commentId);

		setDeletedSize(deletedSize + 1);
	};

	const getBookComments = async () => {
		try {
			const comments = await getComments(props.bookId);
			setComments(comments);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const handler = async () => {
			await getBookComments();
		};
		handler();
	}, [props.submittedSize, deletedSize]);

	return (
		<div>
			<h1 className='text-center mt-3'>Comments</h1>
			<ListGroup>
				{comments &&
					comments.map((comment) => {
						return (
							<div>
								<ListGroup.Item>
									<strong>comment: </strong> {comment.text}
								</ListGroup.Item>
								<ListGroup.Item>
									<strong>username: </strong>{" "}
									{comment.username}
								</ListGroup.Item>

								<ListGroup.Item>
									<Button
										id={comment._id}
										onClick={(e) => handleDelete(e)}
										variant='danger'>
										Delete
									</Button>
								</ListGroup.Item>
							</div>
						);
					})}
			</ListGroup>
		</div>
	);
}

export default ShowComments;
