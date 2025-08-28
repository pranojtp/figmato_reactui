export default function Sidebar() {
  return (
    <aside className="w-56 bg-neutral-900 p-4">
      <h1 className="text-xl font-bold mb-8 text-white">META</h1><hr /><br />
      <nav className="space-y-3 text-gray-300">
        <a href="/" className="block px-2 py-1 rounded text-white active:bg-neutral-500">Profile</a>
        <a href="/files" className="block px-2 py-1 rounded text-white active:bg-neutral-500">files</a>
        <a href="/project" className="block px-2 py-1 rounded text-white active:bg-neutral-500">Project</a>
      </nav>
    </aside>
  );
}
