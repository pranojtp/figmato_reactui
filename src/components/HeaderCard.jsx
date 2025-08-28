import { LogOut, Settings, Bell,UserRound } from "lucide-react";
import VaultImage from "../assets/vault.png";

export default function HeaderCard() {
  return (
    <div className="lg:h-65 rounded-2xl bg-gradient-to-r from-green-400 to-cyan-500">
      {/* 🔹 Top Navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left side */}
        <h1 className="font-semibold text-black text-lg">Files</h1>

        {/* Right side */}
        <div className="flex items-center gap-4 text-black font-medium">
            <UserRound size={18}/>
          <button className="flex items-center gap-1 hover:underline">
            <LogOut size={18} /> Sign Out
          </button>
          <Settings size={18} className="cursor-pointer hover:text-gray-700" />
          <Bell size={18} className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* 🔹 Header Card */}
      <div className="bg-gradient-to-r from-green-400 to-cyan-500 p-6  flex flex-col md:flex-row justify-between items-center gap-6  mx-6 mt-6">
        {/* Left Section - Text */}
        <div>
          <p className="max-w-xl text-sm text-black">
            Pizza ipsum dolor meat lovers buffalo. Marinara mushrooms tossed
            anchovies personal party lovers. Onions beef broccoli ham personal
            white ham mouth. Red ipsum pork beef Philly mushrooms sautéed and
            broccoli. Bell stuffed lovers mushrooms bbq roll pesto lovers.
            Chicken bacon banana pineapple Bianca anchovies broccoli pepperoni
            ranch thin.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="flex flex-col items-end">
          <img src={VaultImage} alt="Vault" className="w-60 h-auto" />
        </div>
      </div>
    </div>
  );
}
