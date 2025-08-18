
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';


import AppLayout from './components/AppLayout';
import LandingPage from './pages/LandingPage';
import BodyLayout from './components/BodyLayout';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Leadmagnet from './pages/LeadMagnet';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<BodyLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route >
        <Route path="lead" element={<Leadmagnet />} />
      </Route>
    </Route>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
}
