import React from 'react';
import FormErrors from './FormErrors';


export default class MyForm extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			txt: 'SEND FORESPØRSEL ',
			question: '',
			firstName: '',
			lastName: '',
			phoneNumber: '',
			email: '',
			formErrors: {
				question: '',
				firstName: '',
				lastName: '',
				email: ''
			},
			questionValid: false,
			firstNameValid: false,
			lastNameValid: false,
			emailValid: false
		}
		this.onSubmit = this.onSubmit.bind(this)
	}

	change(e) {
		const name = e.target.name;
		const value = e.target.value
		this.setState({[name]: value},
			() => { this.validateField(name, value) });
	};

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let questionValid = this.questionValid;
		let firstNameValid = this.firstNameValid;
		let lastNameValid = this.lastNameValid;
		let emailValid = this.state.emailValid;

		switch (fieldName) {
			case 'question': 
				questionValid = value.length >= 10;
				fieldValidationErrors.question = questionValid ? '' : ' is too short';
				break;

			case 'firstName':
				firstNameValid = value.length >= 2;
				fieldValidationErrors.firstName = firstNameValid ? '' : ' is too short';
				break;

			case 'lastName':
				lastNameValid = value.length >= 2;
				fieldValidationErrors.lastName = lastNameValid ? '' : ' is too short';
				break;

			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : ' is invalid';
				break;
			default:
				break;
		}
		this.setState({
			formErrors: fieldValidationErrors,
			questionValid: questionValid,
			firstNameValid: firstNameValid,
			lastNameValid: lastNameValid,
			emailValid: emailValid,
		}, this.validateForm);

	}

	validateForm() {
		//console.log(this.state.questionValid);
		//console.log(this.state.firstNameValid);
		//console.log(this.state.emailValid);
		this.setState({formValid:
			this.state.emailValid});
	}

	onSubmit(e){

		this.setState({ txt: "SENDER..."})
		e.preventDefault();
		console.log(this.state);
		setTimeout(
			() => 	{
			this.setState({
				question: "",
				firstName: "",
				lastName: "",
				phoneNumber: "",
				email: "",
				txt: "SEND FORESPØRSEL" 
				})
			},
			3000
		);	
		
	};

	onCancel(e) {
		this.setState({
			question: "",
			firstName: "",
			lastName: "",
			phoneNumber: "",
			email: ""
		})
	};

	render() {
		const { txt } = this.state;

		return (

			<form className="questionForm">
				<div className="errormessage">
	 				<FormErrors formErrors={this.state.formErrors} />
				</div>

				<div className="form-question">
					<p>SPØR OSS OM NOE*</p>
					<textarea
					name="question" 
					placeholder="Skriv her" 
					value={this.state.question}
					onChange={event=> this.change(event)}
					
					/>
				</div>

				<div className="form-group">
					<p>FORNAVN*</p>
					<input
					name="firstName" 
					placeholder="Fornavn" 
					value={this.state.firstName}
					onChange={event=> this.change(event)}
					/>
				</div>

				<div className="form-group">
					<p>ETTERNAVN*</p>
					<input
					name="lastName" 
					placeholder="Etternavn" 
					value={this.state.lastName}
					onChange={event=> this.change(event)}
					/>
				</div>
				<div className="form-group">
					<p>TELEFON</p>
					<input
					name="phoneNumber" 
					placeholder="+ 00 (landskode + nummer) " 
					value={this.state.phoneNumber}
					onChange={event=> this.change(event)}
					/>
				</div>

				<div className="form-group">
					<p>E-POST*</p>
					<input
					name="email" 
					placeholder="E-post" 
					value={this.state.email}
					onChange={(event)=> this.change(event)}
					/>
				</div>

				<button type="submit" disabled={!this.state.formValid}
				onClick={(e) => this.onSubmit(e)} 
					 >{ txt } </button>

				<a href="" onClick={(e) => this.onCancel(e)}>Avbryt</a>
			</form>
		)
	}


}

