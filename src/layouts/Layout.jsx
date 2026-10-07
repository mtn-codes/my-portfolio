// src/components/Layout.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../sections/Contact";
import OfflineBanner from "../shared/components/OfflineBanner";
import InstallAppButton from "../shared/components/InstallAppButton";
import ChatAssistant from "../features/chatbot";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <OfflineBanner />
      <Navbar />
      <main className="desktop-page-shell flex-1">
        <Outlet /> {/* Renders child routes */}
        {pathname !== "/contact" && <Contact />}
        <Footer />
      </main>
      {/*
        Floating action stack — bottom-right column on desktop.
        ┌─────────────────────────────┐
        │ PWA install chip (when available)
        │ ↕ 8px gap
        │ Chat FAB (always)
        └─────────────────────────────┘
        Hidden on mobile (<768px) because MobileDrawer hosts the install
        chip and the mobile FAB lives inside MobileNavBar.
      */}
      <div className="hidden md:flex fixed bottom-[88px] right-6 z-40">
        <InstallAppButton variant="desktop" className="shadow-lg shadow-primary/10" />
      </div>
      {/* Floating AI assistant — same mount point on both experiences. */}
      <ChatAssistant />
    </>
  );
};

export default Layout;
