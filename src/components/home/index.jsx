import "../../App.css"
import Carousels from "./carousels";
import Slogan from "./slogan";
import HotJob from "./hotJob";
function Home(){
    return(
        <div className="main">
            <Slogan/>
            <Carousels/>
            <HotJob/>
        </div>
    )
}
export default Home