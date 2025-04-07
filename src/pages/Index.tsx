
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, MapPin } from "lucide-react";
import NavBar from "@/components/NavBar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shoporia</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              One stop solution for shopaholic
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/create-request">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Create Request
                </Button>
              </Link>
              <Link to="/shop-profile">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  I'm a Shop Owner
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How StyleSnap Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Describe What You Need</h3>
                <p className="text-gray-600">
                  Submit a detailed request for the clothing item you're looking for, including specifications like color, size, and style.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Get Shop Responses</h3>
                <p className="text-gray-600">
                  Local shop owners will respond with photos and details if they have items matching your request.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Visit or Get Delivery</h3>
                <p className="text-gray-600">
                  Visit the shop to purchase your item, or request delivery for urgent needs (additional charges may apply).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Style?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join Shoporia today and connect with local shops that have exactly what you're looking for.
            </p>
            <Link to="/create-request">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <ShoppingBag className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">Shoporia</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <Link to="/requests" className="hover:text-primary">Browse Requests</Link>
              <Link to="/shop-profile" className="hover:text-primary">For Shop Owners</Link>
              <Link to="/about" className="hover:text-primary">About</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Shoporia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
