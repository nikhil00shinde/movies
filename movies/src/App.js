import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Rentals from "./Rentals";
import Customers from "./Customers";

class App extends React.Component {
	state = {
		movies: [],
		genre: [],
		selectedFilter: "All Genre",
		search: "",
	};

	updateSearch = (searchString) => {
		this.setState({ search: searchString });
	};

	setFilter = (filter) => {
		this.setState({ selectedFilter: filter });
	};

	toggleLike = (id) => {
		let index = this.state.movies.findIndex((el) => {
			return el._id == id;
		});

		let currMovieArr = this.state.movies.map((el) => el);

		if (currMovieArr[index].liked) {
			currMovieArr[index].liked = false;
		} else {
			currMovieArr[index].liked = true;
		}

		this.setState({ movies: currMovieArr });
	};

	deleteMovie = (id) => {
		let filteredArr = this.state.movies.filter((el) => {
			return el._id !== id;
		});

		this.setState({ movies: filteredArr });
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
			<Router>
				<div>
					<Navbar />

					<Switch>
						<Route exact path="/customers">
							<Customers />
						</Route>
						<Route exact path="/rentals">
							<Rentals />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/">
							<div className="row">
								<Filter
									handleFilter={this.setFilter}
									selectedFilter={this.state.selectedFilter}
									genreData={this.state.genre}
								/>
								<div class="col-9 p-4">
									<Search
										search={this.state.search}
										updateSearch={this.updateSearch}
										total={this.state.movies.length}
									/>
									<Table
										search={this.state.search}
										deleteMovie={this.deleteMovie}
										toggleLike={this.toggleLike}
										movieData={this.state.movies}
										selectedFilter={this.state.selectedFilter}
									/>
								</div>
							</div>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}
export default App;
