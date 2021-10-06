let Filter = (props) => {
	return (
		<div class="col-3">
			<ul class="list-group m-4">
				<li
					class="list-group-item"
					onClick={(e) => {
						props.handleFilter("All Genre");
					}}
					className={`list-group-item ${
						props.selectedFilter == "All Genre" ? "active" : ""
					}`}
				>
					All Genre
				</li>
				{props.genreData.map((el) => {
					return (
						<li
							key={el._id}
							onClick={(e) => {
								props.handleFilter(el.name);
							}}
							className={`list-group-item ${
								props.selectedFilter == el.name ? "active" : ""
							}`}
						>
							{el.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Filter;
