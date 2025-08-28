export default function Projects({ projects }) {
  return (
    <section className="bg-black rounded-2xl p-4 text-white">
      <h2 className="text-lg font-bold mb-4">Projects</h2>
      <h3 className="text-sm font-semibold mb-4">Architects Design House</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`rounded-xl h-32 bg-gradient-to-r ${proj.color} flex items-center justify-center text-black font-semibold`}
          >
          </div>
        ))}
      </div>
    </section>
  );
}
