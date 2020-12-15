import React, { Component } from "react";
import BookList from "./BookList";
export default class Home extends Component {
	render() {
		return (
			<div>
				<h1 className='text-center my-5'>Homeros Book Shop</h1>
				<BookList />
			</div>
		);
	}
}
