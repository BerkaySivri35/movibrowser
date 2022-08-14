import { useNavigate, Link } from "react-router-dom";
import SearchView from "./SearchView";

/* ----------------------------------------------Second way of the make navbar ------------------------------------ */


const Navbar = ({ searchText, setSearchText }) => {

    const navigate = useNavigate()

    const updateSearchText = (e) => {
        navigate('/search')
        console.log(e.target.value)
        setSearchText(e.target.value)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/moviebrowser"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-camera-reels-fill" viewBox="0 0 16 16">
                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z" />
                </svg><span className="h3 ms-3">CineSaloon</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/moviebrowser">Home</Link>
                        </li>

                        <li className="nav-item d-block d-lg-none">
                            <Link className="nav-link" to="/search">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>


                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            // Ekleme yapıyoruz
                            value={searchText}
                            onChange={updateSearchText} />
                        <button className="btn btn-outline-success" type="submit" onClick={SearchView}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;