import React,{Component} from 'react'
import axios from 'axios';
import SERVERURL from '../../gobalVars';


class Home extends Component{
    constructor(props){
        super(props);
        this.state={loggedin:false,pending:[],closed:[]}
    }


    async componentDidMount(){
        const response = await axios.get(SERVERURL+"/retail/requests/status/Pending")
        const response2 = await axios.get(SERVERURL+"/retail/requests/status/Closed")
        const json = await response;
        const json2 = await response2;
        this.setState({ pending: json.data });
        this.setState({ closed: json2.data });
       
        };


    render(){
        return(
            <React.Fragment>
                <div class="container">
                    <section className="row mx-auto p-5">
                    <article className="col-12">
                        <h6 className="display-6">Welcome: {this.props.user.name} </h6>
                    </article>
                    <fieldset className="col-lg-6  col-sm-12 mb-5">
                        <legend>Summary</legend>
                        <article>
                        <h6 className="d-flex justify-content-between align-items-start">
                            {this.props.user.internal?"Sent to repair":"Received request"}
                            <span className="badge bg-danger rounded-pill">
                                {this.state.pending.length}
                            </span>
                        </h6>
                        <h6 className="d-flex justify-content-between align-items-start">
                        {this.props.user.internal?" Back from repair":"Resolved requests"}
                            <span className="badge bg-success rounded-pill">
                            {this.state.closed.length}
                            </span>
                        </h6>
                        </article>
                    </fieldset>
                    
                    
                    <fieldset class="col-lg-6  col-sm-12 mb-5">
                        <legend>Search Requests</legend>
                        <article >
                        <div class="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                            Request ID
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label" for="flexRadioDefault2">
                            Phone
                            </label>
                        </div>
                        <div class="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                        </div>
                        </article>
                    </fieldset>
                    
                    
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;