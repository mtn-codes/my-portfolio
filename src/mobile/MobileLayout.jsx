// MobileLayout — the chrome wrapper for the mobile experience.
// Provides top app bar, bottom NavigationBar, and the overflow drawer.
//
// The drawer is mode-aware — each app-bar trigger opens it with the
// appropriate mode:
//   • avatar / menu  → "menu"   (full menu)
//   • notification   → "alerts" (no Appearance)
//   • theme palette  → "theme"  (Appearance only)

import { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileAppBar from "./MobileAppBar";
import MobileNavBar from "./MobileNavBar";
import MobileDrawer from "./MobileDrawer";
import MobileSettingsDialog from "./components/MobileSettingsDialog";
import OfflineBanner from "../shared/components/OfflineBanner";
import ChatAssistant from "../features/chatbot";

export default function MobileLayout() {
  // null when closed; otherwise the mode the drawer should render in.
  const [drawerMode, setDrawerMode] = useState(null);
  const [activeSettingModal, setActiveSettingModal] = useState(null);

  const drawerOpen = drawerMode !== null;

  const openDrawer = (mode = "menu") => setDrawerMode(mode);
  const closeDrawer = () => setDrawerMode(null);

  const openSetting = (type) => {
    setActiveSettingModal(type);
  };

  const closeSetting = () => {
    setActiveSettingModal(null);
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-base-100 text-base-content flex flex-col">
      <MobileAppBar
        onOpenDrawer={openDrawer}
        onOpenSetting={openSetting}
      />

      {/* Scoped mobile page shell: guarantees content starts below top navbar and ends above bottom nav */}
      <main className="flex-1 mobile-page-shell">
        <Outlet />
      </main>

      <MobileNavBar />
      <MobileDrawer
        open={drawerOpen}
        onClose={closeDrawer}
        mode={drawerMode || "menu"}
        onOpenSetting={openSetting}
      />
      <OfflineBanner />
      <ChatAssistant />

      {/* Standalone large top-anchored popup modal for Language, Font, and Theme */}
      <MobileSettingsDialog
        type={activeSettingModal}
        open={Boolean(activeSettingModal)}
        onClose={closeSetting}
      />
    </div>
  );
}