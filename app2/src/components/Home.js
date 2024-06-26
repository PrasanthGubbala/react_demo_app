import { Meetroom } from "./Meetroom"
import { Navbar } from "./Navbar"
import { Carousel } from "./Carousel"
// import { Members } from "./Members"


export function Home(){
    return(
        <div>
            {console.log(process.env.REACT_APP_API)}
            <Navbar/>
            <Carousel />
            <hr/>
            {/* <Members role="admin"/> */}
            {/* <Members role="user"/> */}
            <Meetroom/>
        </div>
    )
}