import Form from '@/components/Form';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-[100vh]">
      <div className="max-w-3xl m-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 py-4">
          Markdown ↔ HTML Converter
        </h1>
        <div className="container mx-auto p-8">
          <Form />
        </div>
      </div>
    </main>
  );
}
