// components/home/ProjectsSection.tsx
'use client';
export default function ProjectsSection() {
  return (
    <section id="section-projects" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Clients</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {[1, 2, 3, 4, 5].map(i => (
          <img
            key={i}
            src={`/images/client${i}.png`}
            alt={`Client ${i}`}
            className="w-24 h-24 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}
