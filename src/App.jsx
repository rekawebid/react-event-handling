import { useState } from 'react';
import './App.css';

function App() {

	// Pendefinisian state
	const [name, setName] = useState("")
	const [age, setAge] = useState("")

	const handleNameInput = (event) => {
		setName(event.target.value)
	}

	const handleAgeInput = (event) => {
		setAge(event.target.value)
	}

	// const handleAddressInput = (event) => {
		
	// }

	return (
		<div className='container-fluid'>
			<div className='d-flex justify-content-center'>
				<div className='card'>
					<div className='card-body'>
						<form>
							<div className=''>
								<label for="">Name</label>
								<input type="text" className='form-control' onChange={(e) => handleNameInput(e)}/>
							</div>

							<div className=''>
								<label for="">Age</label>
								<input type="text" className='form-control' onChange={(e) => handleAgeInput(e)}/>
							</div>

							{/* <div className=''>
								<label for="">Address</label>
								<input type="text" className='form-control' />
							</div> */}

							<br />

							<button className='btn btn-primary'>Submit</button>
						</form>
					</div>
				</div>
			</div>

			<br />
			
			<div className='card'>
				<div className='card-body text-center'>
					<h5>{name} {age}</h5>
					{/* <p>Address</p> */}
				</div>
			</div>
		</div>
	);
}

export default App;
