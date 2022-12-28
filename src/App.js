import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import { router } from "./routes/Router";

function App() {
  return (
    <div className="container mx-auto">
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </AuthProvider>
    </div>
  );
}

export default App;
