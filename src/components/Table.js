import React from 'react';
import axios from 'axios';

function  Table(){

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
            axios.get("http://localhost:5000/retail/requests/")
                .then((response) => {setPost(response.data)});
            }, []);

    if (!post) return null;

 

       
            return (<React.Fragment>
                {post.map(row=><tr>
                        <td>{row._id}</td>
                        <td>{row.Name}</td>
                        <td>{row.national_id}</td>
                        <td>{row.phone}</td>
                        <td>{new Date(row.Timestamp).toLocaleDateString()}</td>
                        <td>{new Date(new Date().setDate(new Date(row.Timestamp).getDate()+7)).toLocaleDateString()}</td>
                        <td><span className="badge rounded-pill text-bg-danger">Past SLA</span></td>
                    </tr>)}
                </React.Fragment>);
 
 
        
    
}


export default Table;