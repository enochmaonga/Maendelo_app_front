import React,{Component} from 'react'
import RequestsMenu from '../RequestsMenu';

class LoginForm extends Component{
    constructor(){
        super();
        this.state={loggedin:false}
    }

    handleLogin=()=>{   (this.state.email==="retail@mail.com")? 
                        this.setState({loggedin:true})
                        :this.setState({loggedin:false})
                    };
 

    render(){
        return(
            <React.Fragment>
            {(this.state.loggedin===true)?<RequestsMenu />:
            <main className="bg-light  h-100 d-flex align-items-center">
                <div className="row w-100">
                <div className="col-12 col-md-4 mx-auto rounded p-3 shadow">
                    <h6 className="display-6">Login</h6>
                    
                    <div className="mb-3">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <input type="text"  value={this.state.value} className="form-control" id="staticEmail" onChange={e=>this.setState({email:e.target.value})}/>
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <input type="password"  className="form-control" id="inputPassword" />
                    </div>
                    <div className="mb-3 text-center">
                        <button className="btn btn-large btn-dark"  onClick={this.handleLogin}>Login</button>
                    </div>
                
                </div>
                </div>
            </main>}
            </React.Fragment>
        )
    }
}

export default LoginForm;