import React from "react";
import { Form, Button, Container } from "react-bootstrap";
function AddComment(props) {
	return (
		<div>
			<Container className='add-reviews-form'>
				<Form onSubmit={props.onHandleSubmit}>
					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control
							id='username'
							type='text'
							value={props.comment.username}
							onChange={props.fillForm}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Comment</Form.Label>
						<Form.Control
							id='text'
							as='textarea'
							rows={2}
							value={props.comment.text}
							onChange={props.fillForm}
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	);
}

export default AddComment;
