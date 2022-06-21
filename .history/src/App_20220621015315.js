 
import { Route, Routes } from "react-router-dom";
import DetailPage from "./components/detailPage/DetailPage";
import HomePage from "./components/hompage/HomePage";
 




function App() {

  return (
    <div>

    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/detailPage" element={<DetailPage></DetailPage>}></Route>
    </Routes>

    </div>
   
  );
}

export default App;
