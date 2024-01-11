import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './task1/layout';
import TableComponent from './task1/table';
import FormComponent from './task1/form';
import FormElementsComponent from './task1/formelements';
import Addition from "./task1/addition";
import DataList from "./task1/jsondata";
import Weather from "./task1/weather";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} /> 
        <Route path="Table" element={<TableComponent />} />
        <Route path="Form" element={<FormComponent />} />
        <Route path="Formelements" element={<FormElementsComponent />} />
        <Route path="Addition" element={<Addition />} />
        <Route path="jsondata" element={<DataList />} />
        <Route path="Weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}