import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    render() {
        const {length: count} = this.state.movies.length;
        if (count === 0) {
            return <p>No movies in DataBase!!!</p>

        }
        return (
            <React.Fragment>
                <p className="text-center font-weight-bold">{this.state.movies.length === 0 ? 'No movies in DataBase!!!' :
                    `Showing ${this.state.movies.length} movies in the DataBase`}
                </p>
                {this.state.movies.length !== 0 && <table className="table">
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
                    {this.state.movies.map((movie) => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button onClick={() => this.handleDelete(movie)}
                                        className="btn btn-danger btn-sm">Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>}
            </React.Fragment>
        );
    }
}

export default Movies;
