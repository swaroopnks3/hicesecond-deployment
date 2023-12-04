import React from "react";


const Error = () => {
    return(
        <>
        <section class="p-01 bg-img cover-background section" >
        <div class="container-fluid d-flex flex-column">
            <div class="row align-items-center justify-content-center min-vh-100">
                <div class="col-md-9 col-lg-6 my-5">
                    <div class="text-center error-page">
                        <h1 class="mb-0 text-secondary">404</h1>
                        <h2 class="mb-4 ">Sorry, something went wrong!</h2>
                        <p class="w-sm-80 mx-auto mb-4 ">This page is inaccessible. Your are trying to access the wrong path you can return to home and explore Hice India.</p>
                        <div>
                            <a href="/" class="btn btn-info btn-lg me-sm-2 mb-2 mb-sm-0 bg-primary">Return Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Error;