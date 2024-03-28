import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <div>
      <header>
        <h1>App Layout</h1>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default AppLayout;
