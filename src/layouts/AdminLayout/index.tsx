import { useAuth } from "@/contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

import "react-toastify/dist/ReactToastify.css";

import { NavBar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const AdminLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { logout } = useAuth();

  return (
    <>
      <Head>
        <title>Davide Crestini | Admin Panel</title>
      </Head>
      <div>
        <NavBar onLogout={logout} />

        <div className="flex overflow-hidden bg-white pt-12">
          <Sidebar />

          <div
            id="main-content"
            className="h-screen w-full bg-admin-grey relative overflow-y-auto lg:ml-64 p-4"
          >
            {children}
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};
