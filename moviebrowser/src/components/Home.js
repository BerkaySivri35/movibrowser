import Hero from "./Hero";


const Home = () => {
    return (
        <>
            <Hero text="Home" />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            İstediğiniz filmi arama butonuna yazarak bulabilirsiniz. Dilerseniz detail butonuna basarak film ile ilgili detaylara ulaşabailirsiniz.
                        </p>
                    </div>
                </div>

            </div>
            
        </>

    )
}

export default Home;