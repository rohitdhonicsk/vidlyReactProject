import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./like";
import Pagination from "./Pagination";
import "../App";
import ListOfGenre from "./genreList";
import paginate from "../utils/paginate";

class Movie extends Component {
  state = {
    Movie: [],
    genre: [],
    selectedGenre: null,
    currentPage: 1,
    pageSize: 4,
  };
  componentDidMount() {
    const genre = [{ name: "All" }, ...getGenres()];
    this.setState({
      Movie: getMovies(),
      genre,
    });
  }
  handleDelete = (i) => {
    const filterMovie2 = this.state.Movie.filter(
      (element) => element._id !== i._id
    );

    this.setState({ Movie: filterMovie2 });
  };
  handleSelectGenre = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleAdd = () => {
    const oldList = [
      ...this.state.Movie,
      {
        _id: "5b21ca3eeb7f65bccd47181a",
        title: "fighter",
        genre: { _id: "5b21ca3eeb7f65bccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 35,
        like: true,
      },
    ];
    console.log(oldList);
    this.setState({ Movie: oldList });
  };
  handleLike = (movie) => {
    const movies = [...this.state.Movie];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ Movie: movies });
  };
  handlePageChange = (pageClicked) => {
    this.setState({ currentPage: pageClicked });
  };
  render() {
    // const { length: count } = this.state.Movie;
    const {
      currentPage: currentActivePage,
      Movie,
      pageSize,
      selectedGenre,
    } = this.state;
    const FilteredMovie =
      selectedGenre && selectedGenre._id
        ? Movie.filter((item) => item.genre.name === selectedGenre.name)
        : Movie;
    const paginatedMovie = paginate(FilteredMovie, pageSize, currentActivePage);
    return (
      <React.Fragment>
        {this.state.Movie.length > 0 ? (
          <div className="box">
            <div>Showing {FilteredMovie.length} movies in table</div>

            <div>
              <button
                className="btn btn-info btn-sm m-2"
                onClick={this.handleAdd}
              >
                Add
              </button>
              <button
                className="btn btn-info btn-sm"
                onClick={() => this.handleSort}
              >
                SortByRate
              </button>
            </div>

            <div className="tableDiv">
              <ListOfGenre
                Genre={this.state.genre}
                selectedGenre={this.state.selectedGenre}
                onGenreSelect={this.handleSelectGenre}
              />
              {paginatedMovie.length > 0 ? (
                <table className="table" id="tableStyle">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Stock</th>
                      <th>Rate</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedMovie.map((i) => (
                      <tr key={i._id}>
                        <td>{i.title}</td>
                        <td>{i.genre.name}</td>
                        <td>{i.numberInStock}</td>
                        <td>{i.dailyRentalRate}</td>
                        <td>
                          <Like
                            liked={i.like}
                            click={() => this.handleLike(i)}
                          />
                        </td>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.handleDelete(i)}
                        >
                          Delete
                        </button>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : currentActivePage ? (
                this.handlePageChange(currentActivePage - 1)
              ) : (
                ""
              )}
            </div>
            <Pagination
              totalMovie={FilteredMovie.length}
              moviePerPage={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentActivePage}
            />
          </div>
        ) : (
          <p>No movie found</p>
        )}
      </React.Fragment>
    );
  }
}
export default Movie;

// handleShowGenre = (GenreName) => {
//   let movie;
//   if (GenreName !== "All") {
//     movie = this.state.AllMovie.filter(
//       (items) => items.genre.name === GenreName
//     );
//   } else {
//     movie = this.state.AllMovie;
//   }

//   this.setState({ Movie: movie });
// };
// handleSort = () => {
//   let old=this.state.Movie[0];
//   const filterMovie = this.state.Movie.filter(
//     (element) => {
//       if(element.dailyRentalRate>)

//     }
//   );

//   this.setState({ Movie: filterMovie });
// };
