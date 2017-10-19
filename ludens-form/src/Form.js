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
			email: ""		
		})
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
			<form>
			
				<p>SPØR OSS OM NOE*</p>
				<textarea
				name="question" 
				placeholder="Skriv her" 
				value={this.state.question}
				onChange={i=> this.change(i)}
				/>

				<p>FORNAVN*</p>
				<input
				name="firstName" 
				placeholder="Fornavn" 
				value={this.state.firstName}
				onChange={i=> this.change(i)}
				/>

				<p>ETTERNAVN*</p>
				<input
				name="lastName" 
				placeholder="Etternavn" 
				value={this.state.lastName}
				onChange={i=> this.change(i)}
				/>

				<p>TELEFON</p>
				<input
				name="phoneNumber" 
				placeholder="+ 00 (landskode + nummer) " 
				value={this.state.phoneNumber}
				onChange={i=> this.change(i)}
				/>

				<p>E-POST*</p>
				<input
				name="email" 
				placeholder="E-post" 
				value={this.state.email}
				onChange={i=> this.change(i)}
				/>
			

				<button onClick={i => this.onSubmit(i)}>Submit</button>

				<a href="" onClick={i => this.onCancel(i)}>Avbryt</a>
			</form>
		)
	}


}

