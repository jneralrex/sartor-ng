
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
import CheckListLeadmagnet from './pages/CheckListLeadmagnet';
import ReportLeadmagnet from './pages/ReportLeadmagnet';
import PlaybookLeadMagnet from './pages/PlaybookLeadmagnet';
import BluePrintLeadmagnet from './pages/BluePrintLeadmagnet';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<BodyLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route >

        <Route path="checklist" element={<CheckListLeadmagnet />} />
        <Route path='report' element={<ReportLeadmagnet />} />
        <Route path='playbook' element={<PlaybookLeadMagnet />} />
        <Route path='blueprint' element={<BluePrintLeadmagnet />} />
        <Route path="terms-condition" element={<TermsOfUse />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />      </Route>
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
