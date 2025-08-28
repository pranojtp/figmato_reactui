import { Settings, Bell ,UserRound} from "lucide-react";
import dp from '../assets/image.png'

export default function ProfileCard({ profile }) {
  return (
    <div className="lg:h-65 rounded-2xl bg-gradient-to-r from-[#00FFA3] to-[#00C4FF] ">
      {/* 🔹 Top Navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left Side */}
        <h1 className="font-semibold text-black text-lg">Profile</h1>

        {/* Right Side */}
        <div className="flex items-center gap-4 text-black font-medium">
          <UserRound size={18}/>
          <button size={18}>Sign Out</button>
          <Settings size={18} />
          <Bell size={18} />
        </div>
      </div>

      
      <section className="rounded-2xl bg-gradient-to-r from-[#00FFA3] to-[#00C4FF] p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.6)] mt-15">  
        <div className="flex items-center space-x-4">
          <img
            src={dp}
            alt="profile"
            className="w-20 h-20 rounded-2xl object-cover border-2 border-white"
          />
          <div>
            <h2 className="text-2xl font-semibold text-black">{profile.name}</h2>
            <p className="text-sm text-black/80 max-w-lg">{profile.bio}</p>
          </div>
        </div>

        <div className="flex space-x-3">
          <button className="px-4 py-2 rounded-3xl bg-[#00FFA3] text-black shadow-md hover:bg-[#00e695] transition">
            Create Team
          </button>
          <button className="px-4 py-2 rounded-3xl bg-black text-[#00FFA3] shadow-md hover:bg-gray-900 transition">
            Edit Details
          </button>
        </div>
      </section>
    </div>
  );
}
