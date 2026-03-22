import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to eyi</h1>
          <p className="text-xl text-gray-700 mb-8">Your personal eye health companion</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
            Get Started
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Eye Health Tracking</h2>
            <p className="text-gray-700 mb-4">Monitor your eye health with our comprehensive tracking tools.</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Learn More
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Eye Exam Scheduling</h2>
            <p className="text-gray-700 mb-4">Schedule your eye exams with ease and get reminders.</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Learn More
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Personalized Tips</h2>
            <p className="text-gray-700 mb-4">Receive personalized eye care tips based on your needs.</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Learn More
            </Button>
          </div>
        </section>

        <section className="bg-blue-600 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Ready to take control of your eye health?</h2>
          <p className="text-xl mb-6">Join thousands of users who are already improving their vision and eye health.</p>
          <Button className="bg-white hover:bg-gray-200 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold">
            Sign Up Now
          </Button>
        </section>
      </main>
    </div>
  );
}