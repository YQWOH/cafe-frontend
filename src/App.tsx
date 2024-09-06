import { Routes, Route } from "react-router-dom";
import Cafes from "./pages/Cafes";
import Employees from "./pages/Employees";
import AddEditEmployee from "./pages/AddEditEmployee"; // Import the Add/Edit Employee page
import AddEditCafe from "./pages/AddEditCafe"; // Import the Add/Edit Café page

function Home() {
  return <h1>Home</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cafes" element={<Cafes />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/employee/new" element={<AddEditEmployee />} />{" "}
      <Route path="/employee/:id/edit" element={<AddEditEmployee />} />{" "}
      <Route path="/cafe/new" element={<AddEditCafe />} />
      <Route path="/cafe/:id/edit" element={<AddEditCafe />} />
    </Routes>
  );
}
