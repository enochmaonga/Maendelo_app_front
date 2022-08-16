import React,{Component} from 'react'
import axios from 'axios';
import SERVERURL from '../../gobalVars';
import Requests from '../Requests';


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
                        loggedin:false,
                        pending:[],
                        closed:[],
                        imei:''
                        
                    }
    }


    async componentDidMount(){
        const response = await axios.get(SERVERURL+"/retail/requests/status/Pending")
        const response2 = await axios.get(SERVERURL+"/retail/requests/status/Closed")
        const json = await response;
        const json2 = await response2;
        this.setState({ pending: json.data });
        this.setState({ closed: json2.data });
       
        };

    handleSearch=()=>  {
    (this.state.imei.length>0)?this.setState({search:true}):this.setState({search:false})


    }
        
  


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
                        <div class="d-flex" role="search">
                            <input className="form-control me-2" 
                                    type="search"
                                    value={this.state.imei} 
                                    placeholder="Search IMEI" 
                                    aria-label="Search" 
                                    onChange={e=>{this.setState({imei:e.target.value})}}/>
                            <button className="btn btn-outline-dark" type="submit" onClick={this.handleSearch}>Search</button>
                        </div>
                        </article>
                    </fieldset>
                    
                    </section>
                    {
                    this.state.search? 
                        <section>
                            <h5>Search Results</h5>
                            <Requests imei={this.state.imei} user={this.props.user}/>
                        </section>
                        :
                        ""
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Home;