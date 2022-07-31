import React from 'react';
import axios from 'axios';
import TableModal from './TableModal';

function  Table(){

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
            axios.get("http://localhost:5000/retail/requests/")
                .then((response) => {setPost(response.data)});
            }, []);

    if (!post) return null;

       
            return (<React.Fragment>
                {post.map(row=><tr key={row._id}>
                        <td className="text-primary"><TableModal data={row}/></td>
                        <td>{row.Name}</td>
                        <td>{row.national_id}</td>
                        <td>{row.phone}</td>
                        <td>{new Date(row.Timestamp).toLocaleDateString()}</td>
                        <td>{new Date(new Date().setDate(new Date(row.Timestamp).getDate()+7)).toLocaleDateString()}</td>
                        <td>
                            {(new Date()<new Date(new Date().setDate(new Date(row.Timestamp).getDate()+7))?<span className="badge rounded-pill text-bg-success">Within SLA</span>:<span className="badge rounded-pill text-bg-danger">Past SLA</span>)}   
                        </td>
                    </tr>)}
                </React.Fragment>);
 
 
        
    
}


export default Table;