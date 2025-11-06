'use client';
import { Package } from '@/types/home';

interface PackagesSectionProps {
  webs: Package[];
  digitals: Package[];
}

export default function PackagesSection({ webs, digitals }: PackagesSectionProps) {
  const renderPackageCard = (pkg: Package) => (
    <div
      key={pkg.id}
      className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2"
    >
      <h4 className="text-xl font-bold mb-2">{pkg.title}</h4>
      <p className="text-gray-600 mb-4">{pkg.description}</p>
      <p className="text-blue-600 font-semibold text-lg">${pkg.price}</p>
    </div>
  );

  return (
    <section id="section-packages" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Packages</h2>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Web Design Packages</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {webs.map(renderPackageCard)}
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Digital Marketing Packages</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {digitals.map(renderPackageCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
