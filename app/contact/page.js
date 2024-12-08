import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm">
          <ContactForm />
        </div>
      </div>
    </main>
  );
} 