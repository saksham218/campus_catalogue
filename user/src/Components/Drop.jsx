import axios from 'axios';

import React,{Component} from 'react';

class Drop extends Component {

	state = {
	selectedFile: null
	};
	
	onFileChange = event => {
	this.setState({ selectedFile: event.target.files[0] });
	};
	

	onFileUpload = () => {

	const formData = new FormData();
	
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	console.log(this.state.selectedFile);
	
	
	axios.post("api/uploadfile", formData);
	};
	
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>File Details:</h2>
			<p>File Name: {this.state.selectedFile.name}</p>

			<p>File Type: {this.state.selectedFile.type}</p>

			<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
			<h1>
			Upload a PDF or Image
			</h1>
			<h3>
			Select a file to upload
			</h3>
			<div>
				<input type="file" onChange={this.onFileChange} style={{cursor: "pointer"}} />
				<button onClick={this.onFileUpload} style={{cursor: "none"}} >
				Upload!
				</button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default Drop;
