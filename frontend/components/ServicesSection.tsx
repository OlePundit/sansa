'use client';
import { Service } from '@/server/home';

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="section-services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div
              key={service.id}
              className="p-6 bg-white shadow-lg rounded-2xl transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-center">
                <img
                  src={service.image || '/images/default-service.png'}
                  alt={service.name}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
