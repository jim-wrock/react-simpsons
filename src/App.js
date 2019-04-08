import React, { Component } from "react";
import logo from "./working.gif";
import logo2 from "./notworking.gif";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

import DisplayQuote from "./DisplayQuote";
import GenerateQuote from "./GenerateQuote";

// import Quote from "./Quote";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Simpsons Quotes</h1>
//         </header>
//         <Quote
//           quote="I believe the children are the future... Unless we stop them now!"
//           character="Homer Simpson"
//           image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
//         />
//         <Quote
//           quote="Me fail English? That's unpossible"
//           character="Ralph Wiggum"
//           image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
//         />
//       </div>
//     );
//   }
// }

// Employee start

// const sampleEmployee = {
// 	gender: "male",
// 	name: {
// 		title: "mr",
// 		first: "mathys",
// 		last: "aubert"
// 	},
// 	location: {
// 		street: "9467 rue gasparin",
// 		city: "perpignan",
// 		postcode: "90208"
// 	},
// 	email: "mathys.aubert@example.com",
// 	picture: {
// 		medium: "https://randomuser.me/api/portraits/med/men/66.jpg"
// 	}
// };

// Employee end

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			working: false,
			quotes: "default"
			// Employee State init
		};
	}
	handleClick = () => {
		console.log("Button clicked");
		this.setState({ working: !this.state.working });
	};

	getQuote() {
		// Récupération de l'employé via fetch
		fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
			.then(response => response.json())
			.then(data => {
				// Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
				this.setState({
					quotes: data[0]
				});
			});
	}

	render() {
		const isWorking = this.state.working ? "on" : "off";
		const HisWorking = this.state.working
			? "Homer is working"
			: "Homer isn't working";
		const switchClass = this.state.working ? "class1" : "class2";
		const switchClassInv = this.state.working ? "class2" : "class1";

		return (
			<React.Fragment>
				{/* <GenerateEmployee selectEmployee={() => this.getEmployee()} />
				<DisplayEmployee employee={this.state.quotes} /> */}

				<div className={switchClass}>
					<GenerateQuote selectQuote={() => this.getQuote()} />
					<DisplayQuote quotes={this.state.quotes} />
				</div>
				{/* HOMER */}
				<div className={switchClass}>
					<div className="Lamp">
						<button
							onClick={this.handleClick}
							// onClick={() => alert('Button clicked')}
							className={isWorking}
						>
							{isWorking.toUpperCase()}
						</button>

						{/* <button className={light}>{light.toUpperCase()}</button> */}
						<figure className={isWorking} />
					</div>

					<div className="App">
						<header className={switchClassInv + " App-header"}>
							<img
								src={this.state.working ? logo : logo2}
								className="App-logo"
								alt="logo"
							/>
							<p> {HisWorking} </p>
						</header>

						<Quotes />
						<Lamp on />
						<Lamp />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
