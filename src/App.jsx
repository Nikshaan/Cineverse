import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import WatchList from "./pages/WatchList";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
    return(
        <>
            <Routes>
                <Route path = "/" element = {<Homepage/>} />
                <Route path = "/Cineverse/" element = {<Homepage/>} />
                <Route path = "/Cineverse/watchList" element = {<WatchList/>} />
                <Route path = "/Cineverse/search" element = {<SearchPage/>} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default App