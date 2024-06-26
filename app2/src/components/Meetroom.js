
import {useState} from 'react'

export function Meetroom(){
    var [users, setUsers] = useState(0)
    
    function attendTrainingReact(){
        setUsers(users+1)
    }
    return(
        <div>
            <h1>People Joined: {users}</h1>
            <button onClick={attendTrainingReact}>Join Meeting</button>
        </div>
    )
}