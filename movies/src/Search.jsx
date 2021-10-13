let Search = (props) => {
	return (
		<>
			<p class="mt-4">Showing {props.total} movies from the database</p>

			<button type="button" class="btn btn-primary mt-2">
				New
			</button>

			<div class="row">
				<div class="col-4">
					<div class="input-group">
						<input
							onChange={(e) => {
								props.updateSearch(e.currentTarget.value);
							}}
							type="text"
							class="form-control mt-4"
							placeholder="Search..."
							value={props.search}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Search;
