export default function TermsCard() {
  return (
    <div className="bg-black p-4 rounded-xl flex justify-between items-center lg:h-30">
      <div>
        <h3 className="font-semibold">Terms and Condition</h3>
        <p className="text-xs text-gray-400">Agreement code : FRB1235476</p>
      </div>
      <button className="border border-cyan-400 text-cyan-400 rounded-full px-4 py-1 hover:bg-cyan-400 hover:text-black transition">
        View Now
      </button>
    </div>
  );
}
