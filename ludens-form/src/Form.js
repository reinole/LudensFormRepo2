import React from 'react';

export default class Form extends React.Component {
	state = {
		question: "",
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: ""
	};

	change = i => {
		this.setState({
			[i.target.name]: i.target.value
		});
	};

	onSubmit = (i) => {
		i.preventDefault();
		console.log(this.state);
		this.setState({
			question: "",
			firstName: "",
			lastName: "",
			phoneNumber: "",
			email: "",
			submit: "Sender"		
		})
	};
	sendChange() {
		this.setState({submit: "SENDER..."});
		console.log(this)
	};

	onCancel = (i) => {
		this.setState({
			question: "",
			firstName: "",
			lastName: "",
			phoneNumber: "",
			email: ""
		})
	};



	render() {

		return (

			<form className="questionForm" >

				<div className="form-question">
					<p>SPØR OSS OM NOE*</p>
					<textarea
					name="question" 
					placeholder="Skriv her" 
					value={this.state.question}
					onChange={i=> this.change(i)}
					/>
				</div>

				<div className="form-group">
					<p>FORNAVN*</p>
					<input
					name="firstName" 
					placeholder="Fornavn" 
					value={this.state.firstName}
					onChange={i=> this.change(i)}
					/>
				</div>

				<div className="form-group">
					<p>ETTERNAVN*</p>
					<input
					name="lastName" 
					placeholder="Etternavn" 
					value={this.state.lastName}
					onChange={i=> this.change(i)}
					/>
				</div>
				<div className="form-group">
					<p>TELEFON</p>
					<input
					name="phoneNumber" 
					placeholder="+ 00 (landskode + nummer) " 
					value={this.state.phoneNumber}
					onChange={i=> this.change(i)}
					/>
				</div>

				<div className="form-group">
					<p>E-POST*</p>
					<input
					name="email" 
					placeholder="E-post" 
					value={this.state.email}
					onChange={i=> this.change(i)}
					/>
				</div>

				<button
				name="submit" 
				onClick={i => this.onSubmit(i)}
				>SEND FORESPØRSEL &nbsp;&nbsp; <i className="fa fa-envelope-o"></i> </button>

				<a href="" onClick={i => this.onCancel(i)}>Avbryt</a>
			</form>
		)
	}


}

