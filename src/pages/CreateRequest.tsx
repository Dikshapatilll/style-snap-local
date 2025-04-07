
import NavBar from "@/components/NavBar";
import RequestForm from "@/components/RequestForm";

const CreateRequest = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Create a Clothing Request</h1>
          <p className="text-gray-600 mb-6">
            Describe exactly what you're looking for and local shops will respond if they have matching items.
          </p>
          <RequestForm />
        </div>
      </main>
    </div>
  );
};

export default CreateRequest;
