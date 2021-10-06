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
