import WimpyKid from "../Categories/WimpyKid";
import Batman from "../Categories/Batman";
import Chucky from "../Categories/Chucky";
import HarryPotter from "../Categories/HarryPotter";
import Navbar from "../components/Navbar";
import StarWars from "../Categories/StarWars";
import MyList from "../Categories/MyList";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { updateLenList } from "../Redux/listSlice";

const Homepage = () => {
  const list = useSelector(state => state.list);
  const lenList = useSelector(state => state.lenList);
  const dispatch = useDispatch();

  const notify = (list) => {
      if(list.length > lenList){
        toast.success("Movie added to WatchList!");
        dispatch(updateLenList(1));
      }else if(list.length < lenList){
        toast.error("Movie removed from WatchList!");
        dispatch(updateLenList(-1));
      };
  };

  useEffect(() => (notify(list)), [list]);

  return (
    <div className="h-full w-full bg-white dark:bg-black pb-10">
        <Navbar/>
        <p className="text-black dark:text-white text-2xl 2xl:text-4xl pl-2 font-raleway -mb-3 mt-10 underline underline-offset-4">Suggested Movies</p>
        <Batman/>
        <HarryPotter/>
        <StarWars/>
        <WimpyKid/>
        <Chucky/>
        <MyList />
        <ToastContainer
        position="top-right"
        autoClose={1700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </div>
  )
}

export default Homepage