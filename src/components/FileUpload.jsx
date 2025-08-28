export default function FileUpload() {
  return (
    <div className="bg-black p-6 rounded-xl">
      <div className="border-2 border-dashed border-neutral-600 rounded-lg h-64 flex flex-col justify-center items-center gap-3">
        <p className="text-white">Drag your files here</p>
        <p className="text-sm text-gray-400">or</p>
        <button className="bg-gradient-to-r from-green-400 to-cyan-500 px-6 py-2 rounded-md text-black font-semibold hover:opacity-80">
          Browse
        </button>
      </div>
    </div>
  );
}
