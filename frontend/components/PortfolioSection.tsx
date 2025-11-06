// components/home/PortfolioSection.tsx
'use client';
export default function PortfolioSection() {
  const portfolioItems = [
    { id: 1, title: 'Project A', image: '/images/portfolio1.jpg', link: '#' },
    { id: 2, title: 'Project B', image: '/images/portfolio2.jpg', link: '#' },
    { id: 3, title: 'Project C', image: '/images/portfolio3.jpg', link: '#' },
  ];

  return (
    <section id="section-portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Portfolio</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {portfolioItems.map(item => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover hover:scale-105 transition"
                />
                <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
