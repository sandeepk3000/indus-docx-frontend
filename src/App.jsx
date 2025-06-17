import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="min-w-screen flex flex-wrap content-between h-full">
      <div className="w-full block  flex flex-col h-full">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
