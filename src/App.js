import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	state = { advice: "" };

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip;

				this.setState({ advice });
			})

			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		const { advice } = this.state;

		return (
      <div className='container'>
       <div className='row justify-content-center'>
        <div className='col-md-6 p-3 bg-info mt-5'>
        <h1 className="heading">{this.state.advice}</h1>
					<button className="btn btn-primary" onClick={this.fetchAdvice}>Generate</button>

         </div>
      </div>
    </div>
		);
	}
}

export default App;
