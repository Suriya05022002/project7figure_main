import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        theme="light"
        toastOptions={{
          style: {
            background: "#ffffff",
            border: "1px solid rgba(10,10,10,0.10)",
            color: "#0a0a0a",
            fontFamily: "Manrope, sans-serif",
            borderRadius: 0,
            boxShadow: "0 12px 40px rgba(10,10,10,0.10)",
          },
        }}
      />
    </div>
  );
}

export default App;
