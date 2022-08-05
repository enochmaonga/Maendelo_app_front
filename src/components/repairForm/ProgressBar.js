import React,{Component} from "react";
import '../../styles/progressBar.css'

class ProgressBar extends Component{
    constructor(props){
        super(props)
        this.props = props;
    }

    render(){
        return  (
            <React.Fragment>
                <ul className="progres_bar"> 
                    <li className = {this.props.value>=0?"active":""} >Customer</li> 
                    <li className = {this.props.value>=1?"active":""} >Device</li> 
                    <li className = {this.props.value>=2?"active":""} >Faults</li>
                    <li className = {this.props.value>=3?"active":""} >StandBy Device</li>
                    <li className = {this.props.value>=4?"active":""} >Retail Center</li> 
                    <li className = {this.props.value>=5?"active":""} >Repair Center</li>
                </ul>
            </React.Fragment>
        )
    };
}


export default ProgressBar;