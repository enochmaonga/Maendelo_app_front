import React, { Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class TableModal extends Component {
    constructor(props){
        super(props)
        this.props =props;
        this.state ={show:false};
    }

    handleClose=()=>{
        this.setState({show:false})
    }
    handleShow = ()=>{
        this.setState({show:true})
    }

    render(){
        let data = this.props.data;
        return (
            <>
            <Button variant="secondary" className="btn-sm" onClick={this.handleShow}>
                details
            </Button>
        
            <Modal show={this.state.show}   size="xl" onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data._id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {(data.Name=="Raila Odinga")?"Blank":<p>{JSON.stringify(data)}</p>}
                    
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        );

    }
  
}

export default TableModal