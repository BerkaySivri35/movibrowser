import Hero from "./Hero";



const PageNotFound = () => {
    return (
        <>
            <Hero text="Page Not Found :(" />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <h1 className="display-1 lead">
                            We can not find anything you try :(
                        </h1>
                    </div>
                </div>

            </div>
            
        </>

    )
}

export default PageNotFound;