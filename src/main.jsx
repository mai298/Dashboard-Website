import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Manage from './pages/Manage/Manage.jsx';
import Contact from './pages/contact/Contact.jsx';
import Invoices from './pages/invoices/Invoices.jsx';
import Profile from './pages/profile/Profile.jsx';
import Calendar from './pages/Calendar/Calendar.jsx';
import Faq from './pages/faq/Faq.jsx';
import BarChart from './pages/bar/BarChart.jsx';
import PieChart from './pages/pie/PieChart.jsx';
import LineChart from './pages/line/LineChart.jsx';
import GeographyChart from './pages/geography/GeographyChart.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<App />}>
      <Route path='/' element={<Dashboard />} />
      <Route path="manage" element={<Manage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="profile" element={<Profile />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<GeographyChart/>} />

      

    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);