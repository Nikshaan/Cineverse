import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Authorization from "./pages/Authorization";
import WatchList from "./pages/WatchList";
import SearchPage from "./pages/SearchPage";

const App = () => {
    return(
        <>
            <Routes>
                <Route path = "/" element = {<Homepage/>} />
                <Route path = "/authorization" element = {<Authorization/>} />
                <Route path = "/watchList" element = {<WatchList/>} />
                <Route path = "/search" element = {<SearchPage/>} />
            </Routes>
        </>
    )
}

export default App