import React,{Component} from 'react'


class Home extends Component{
    constructor(){
        super();
        this.state={loggedin:false}
    }


    render(){
        return(
            <React.Fragment>
                <div class="container">
                    <section class="row mx-auto p-5">
                    <article class="col-12">
                        <h6 class="display-6">Welcome: Retail User</h6>
                    </article>
                    <fieldset class="col-lg-6  col-sm-12 mb-5">
                        <legend>Summary</legend>
                        <article class="col-6">
                        <h6 class="d-flex justify-content-between align-items-start">Pending Requests<span class="badge bg-dark rounded-pill">14</span></h6>
                        <h6 class="d-flex justify-content-between align-items-start">Out for repair<span class="badge bg-dark rounded-pill">14</span></h6>
                        <h6 class="d-flex justify-content-between align-items-start">Repaired<span class="badge bg-dark rounded-pill">14</span></h6>
                        </article>
                    </fieldset>
                    
                    
                    <fieldset class="col-lg-6  col-sm-12 mb-5">
                        <legend>Search Requests</legend>
                        <article >
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                            Request ID
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label class="form-check-label" for="flexRadioDefault2">
                            Phone
                            </label>
                        </div>
                        <div class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-dark" type="submit">Search</button>
                        </div>
                        </article>
                    </fieldset>
                    
                    <fieldset class="col-lg-6  col-sm-12 mb-5">
                        <legend>Links</legend>
                        <article >
                        <p><a href="./repair_form.html">Book a request</a></p> 
                        <p><a href="./pending.html">Pending requests</a></p>
                        <p><a href="./repaired.html">Repaired</a></p>
                        </article>
                    </fieldset>
                    
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;