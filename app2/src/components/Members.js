import '../App.css';


export function Members(props){

    function deleteUser(index){
        // console.log('index : ', index)
        props.deleteUserFromArray(index)
    }

    if (props.role==="admin"){
        return (
            <div>
                <h1>Admin users</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Role</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {console.log(props)}
                        {props.users.map((each,index) => {
                            if (each.role === 'admin') {
                                return (
                                <tr key={each.id}>
                                    <th scope="row">{each?.id}</th>
                                    <td>{each?.name}</td>
                                    <td>{each?.designation}</td>
                                    <td>{each?.gender}</td>
                                    <td>{each?.role}</td>
                                    <td><button>update</button></td>
                                    <td><button onClick={deleteUser.bind(null, index)}>delete</button></td>
                                  
                                </tr>
                                );
                            }
                            return null;
                            })}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
    <div className="row">
        <h1>Team Members</h1>
        {props.users.map((each, index) => {
            if (each.role!=="admin"){
                return(
                    <div className='col border'>
                        <img src="/static/user.jpg" className="user-img"/><br/>
                        {/* <label>{each.id}</label> */}
                        <label>{each?.name}</label><br/>
                        {/* <label>{each.designation}</label> */}
                        {/* <label>{each.role}</label> */}
                        <button>update</button>
                        <button onClick={deleteUser.bind(null, index)}>delete</button>
                    </div>
                );
            }
            return null;
        })}
    </div>
    )
}