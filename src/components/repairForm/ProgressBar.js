import React,{Component} from "react";

class ProgressBar extends Component{
    constructor(props){
        super(props)
        this.props = props;
    }

    render(){
        return  (
            <React.Fragment>
                <ul className="progres_bar"> 
                    <li className = {this.props.value>=0?"active":""} >Customer Details</li> 
                    <li className = {this.props.value>=1?"active":""} >Device Details</li> 
                    <li className = {this.props.value>=2?"active":""} >Fault Description</li>
                    <li className = {this.props.value>=3?"active":""} >StandBy Device</li>
                    <li className = {this.props.value>=4?"active":""} >Retail Center Details</li> 
                    <li className = {this.props.value>=5?"active":""} >Repair Center Details</li>
                </ul>
            </React.Fragment>
        )
    };
}


export default ProgressBar;