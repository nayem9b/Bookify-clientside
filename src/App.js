import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Route";
import BookingModal from "./Components/BookingModal/BookingModal";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <BookingModal></BookingModal> */}
    </div>
  );
}

export default App;
