import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./components/authentication/authentication.component";

const Shop = () => (
  <div>
    I am the Shop
    <Outlet />
  </div>
)

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>

    </Routes>
  );
};

export default App;