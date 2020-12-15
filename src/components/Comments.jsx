import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { addComment, getComments } from "../api/comments";
import AddComment from "./AddComment";
import ShowComments from "./ShowComments";

function Comments(props) {
	const [addedComment, setAddedComment] = useState({
		username: "",
		text: "",
	});

	const [bookId, setBookId] = useState("");

	useEffect(() => {
		setBookId(props.bookId);
	}, [props.bookId]);
	const [allComments, setAllComments] = useState([]);

	const [submittedSize, setSubmittedSize] = useState(0);

	const fillCommentForm = (e) => {
		const currentId = e.currentTarget.id;
		const newComment = { ...addedComment };
		newComment[currentId] = e.currentTarget.value;

		setAddedComment(newComment);
		setSubmittedSize(submittedSize + 1);
	};

	const submitComment = async (e) => {
		e.preventDefault();
		try {
			const result = await addComment(bookId, addedComment);
			setAddedComment({
				username: "",
				text: "",
			});
		} catch (error) {}
	};
	return (
		<div>
			<Modal
				{...props}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Add New Comment
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddComment
						fillForm={(e) => fillCommentForm(e)}
						comment={addedComment}
						onHandleSubmit={submitComment}
					/>

					<ShowComments
						submittedSize={submittedSize}
						bookId={bookId}
						comments={allComments}
					/>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Comments;
