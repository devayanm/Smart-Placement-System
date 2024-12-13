import { Routes, Route } from 'react-router-dom';
import AppNavbar from './constants/Navbar';
import Footer from './constants/Footer';
import routes from './routes';

const App = () => {
  return (
    <div>
      <AppNavbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
