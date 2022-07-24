import React, { } from "react";
import Stage from "./components/stage";
import './style/style.css'
import Footer from "./components/footer";
//import { MyContext } from "./context";
const App = () => {
    //const context = useContext(MyContext);
    return (
        <div id="body-total">
            <Stage />
            <div>
                <Footer />
            </div>
        </div>

    )
}
export default App;