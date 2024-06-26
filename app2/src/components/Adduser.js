

export function Adduser(props){
    var user = {}
    // console.log(user)
    
    function getInputID(event){
        user.id = event.target.value
    }
     function getInputName(event){
        user.name = event.target.value
     }
     function getInputDesignation(event){
        user.designation = event.target.value
     }
     function getInputGender(event){
        user.gender = event.target.value
     }
     function getInputRole(event){
        user.role = event.target.value
     }

     function addUser(){
        // console.log(user)
        props.updateUsersToArray(user)
     }


    return(
        <div className="container border" style={{width: "30%"}}>
            <h1>Add New User</h1>
            {/* <form> */}
                <div class="mb-3">
                    <label for="exampleInputID" class="form-label">ID</label>
                    <input onChange={getInputID} type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputName" class="form-label">Employee Name</label>
                    <input onChange={getInputName} type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputOptions" class="form-label">Designation</label>
                    <select onChange={getInputDesignation} id="" class="form-select">
                        <option>ASE</option>
                        <option>SE</option>
                        <option>SSE</option>
                        <option>LSE</option>
                        <option>M</option>
                        <option>D</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputOptions" class="form-label">Gender</label>
                    <select onChange={getInputGender} id="" class="form-select">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputOptions" class="form-label">Role</label>
                    <select onChange={getInputRole} id="" class="form-select">
                        <option>user</option>
                        <option>admin</option>
                    </select>
                </div>
                <button onClick={addUser} type="submit" class="btn btn-primary">Add User</button>
            {/* </form> */}
        </div>
    )
}