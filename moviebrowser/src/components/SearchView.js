import Hero from "./Hero";
import { Link } from "react-router-dom";
import { useState } from "react";

// TMDB API KEY = 53bc57827eea68547de5bc7f75ca86e7

const MovieCard = ({ movie }) => {
    const [posterUrl, setImgSrc] = useState(`https://image.tmdb.org/t/p/w500${movie.poster_path}`);
    const detailUrl = `/movies/${movie.id}`
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card" >
                <img src={posterUrl} onError = {() => setImgSrc("https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80")} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
                </div>
            </div>
        </div>

    )
}


const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        //return <div key={i}>{obj.original_title}</div>
        return <MovieCard movie={obj} key={i} />
    })
    console.log(searchResults, "are the search results")
    return (
        <>
            <Hero text={title} />
            {resultsHtml && (
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
                //film bulunamadığında gösterilecek
            )}{" "} 
            <h2 className="py-5 ms-5">
                {"Sorry, we couldn't find anything for " + keyword}
            </h2>

        </>

    );
};
export default SearchView;