import React from "react";
import { moviesData} from "../moviesData";
// import { render } from "react-dom";
import MovieItem from "./MovieItem"; 

// UI = fn(state, props)

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            movies: moviesData,
            moviesWillWatch: []

        };

        this.removeMovie =this.removeMovie.bind(this);
    }
    removeMovie = movie => {
        const updateMovies = this.state.movies.filter(function(item) {
            return item.id !== movie.id;
        });
        console.log(updateMovies);
        // this.state.movies = updateMovies;
        this.setState({
            movies: updateMovies
        });
    }

    addMovieToWillWatch = movie => {
        console.log(movie);
        // this.state.moviesWillWatch.push(movie);
        // const updateMoviesWillWatch = [...this.state.moviesWillWatch];
        // updateMoviesWillWatch.push(movie);
        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

        this.setState({
            moviesWillWatch: updateMoviesWillWatch
        });
    };

    render() {
        console.log("render", this.state, this);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.movies.map(movie => {
                            return (
                                <div className="col-6 mb-4"key={movie.id}>
                                    <MovieItem movie={movie} 
                                    removeMovie={this.removeMovie} 
                                    addMovieToWillWatch={this.addMovieToWillWatch} 
                                />
                                </div>
                            );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Will Watch: {this.state.moviesWillWatch.lenght}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;