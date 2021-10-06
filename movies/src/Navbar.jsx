let Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					MoviesRentals
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<a class="nav-link active" aria-current="page" href="#">
							Home
						</a>
						<a class="nav-link" href="#">
							Customers
						</a>
						<a class="nav-link" href="#">
							Rentals
						</a>
						<a class="nav-link ">Login</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
