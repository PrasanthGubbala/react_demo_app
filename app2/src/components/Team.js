import { Members } from "./Members"
import { Adduser } from "./Adduser"
import { useState } from "react"

export function Team(){
    var [users, setUser] = useState([]);

    function updateUsersToArray(data){
        users = [...users, data]
        setUser(users)
    }
    function deleteUserFromArray(index){
        // console.log(index)
        users.splice(index, 1);
        setUser(...users);
    }
    return(
        <div>
            <Adduser updateUsersToArray={updateUsersToArray}/>
            <hr/>
            <Members role="admin" users={users} deleteUserFromArray={deleteUserFromArray}/>
            <Members role="user" users={users} deleteUserFromArray={deleteUserFromArray}/>
        </div>
    )
}