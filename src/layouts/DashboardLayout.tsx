import { Outlet } from "react-router-dom";
import ChatSidebar from "../components/chat/ChatSidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-white text-black">
      <ChatSidebar />

      <main className="min-w-0 flex-1 pt-20 md:pt-0">
        <Outlet />
      </main>
    </div>
  );
}