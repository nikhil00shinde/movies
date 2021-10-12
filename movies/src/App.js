import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {
	state = {
		movies: [],
		genre: [],
		selectedFilter: "All Genre",
	};

	setFilter = (filter) => {
		this.setState({ selectedFilter: filter });
	};

	// Aap koi bhi information change kar rahe ho REACT App ke Andhar then the right way to do it is to SET THE INFORMATION CHANGE IN STATE
	// Apne state mei voh cheej update kar dijiye

	toggleLike = (id) => {
		let index = this.state.movies.findIndex((el) => {
			return el._id == id;
		});
		// hum change kar sakte they usi state ki array ke andhar par hum copy bana rahe kyuki company mei bola hota ki BUG ISSSUE hota hain
		let currMovieArr = this.state.movies.map((el) => el);

		if (currMovieArr[index].liked) {
			currMovieArr[index].liked = false;
		} else {
			currMovieArr[index].liked = true;
		}

		this.setState({ movies: currMovieArr });
	};

	componentDidMount() {
		let f = async () => {
			let responseMovies = await fetch("/movies");
			let responseGenre = await fetch("/genre");
			// ye dono, ek object jiske andhar hamara data aa raha hain server se via API
			let moviesJson = await responseMovies.json();
			let genreJson = await responseGenre.json();

			this.setState({
				movies: moviesJson,
				genre: genreJson,
			});
		};
		f();
	}

	render() {
		return (
			<div>
				<Navbar />

				<div className="row">
					<Filter
						handleFilter={this.setFilter}
						selectedFilter={this.state.selectedFilter}
						genreData={this.state.genre}
					/>
					<div class="col-9 p-4">
						<Search />
						<Table
						    toggleLike = {this.toggleLike}
							movieData={this.state.movies}
							selectedFilter={this.state.selectedFilter}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
