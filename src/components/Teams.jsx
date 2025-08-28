export default function Teams({ teams }) {
  return (
    <div className="bg-black rounded-2xl p-4 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Teams</h3>
        <button className="px-4 py-1 bg-[#00FFA3] text-black rounded-2xl hover:bg-[#00e695] transition">
          Add Members
        </button>
      </div>

      {/* Team List */}
      <ul className="space-y-3">
        {teams.map((member, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-black px-4 py-3 rounded-lg border-b border-gray-500"
          >
            {/* Left Section - Avatar + Text */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00FFA3] flex-shrink-0"></div>
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex gap-3 text-sm">
              <button className="text-[#00FFA3] hover:underline">Edit</button>
              <button className="text-[#00FFA3] hover:underline">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
