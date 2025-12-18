import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "/src/routes/home/home.component";
import Navigation from "./routes/navigation/navigation-component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <div> shop now</div>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} /> {/* <-- default page */}
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
