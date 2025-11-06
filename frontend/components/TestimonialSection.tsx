// components/home/TestimonialsSection.tsx
'use client';
export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'Excellent service, fast turnaround, and beautiful results!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Highly professional team that delivers on every promise.',
    },
  ];

  return (
    <section id="section-testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow">
              <p className="italic text-gray-600 mb-4">“{testimonial.feedback}”</p>
              <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
