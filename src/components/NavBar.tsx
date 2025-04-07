
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search, ShoppingBag, User, Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-6 w-6 text-primary mr-2" />
            <span className="font-bold text-xl text-gray-800">Shoporia</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-primary flex items-center">
              <Home className="h-4 w-4 mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/requests" className="text-gray-600 hover:text-primary flex items-center">
              <Search className="h-4 w-4 mr-1" />
              <span>Browse</span>
            </Link>
            <Link to="/shop-profile" className="text-gray-600 hover:text-primary flex items-center">
              <ShoppingBag className="h-4 w-4 mr-1" />
              <span>For Shops</span>
            </Link>
            <Link to="/profile">
              <Button variant="outline" className="ml-4">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </Link>
            <Link to="/create-request">
              <Button className="bg-primary hover:bg-primary/90">New Request</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-primary py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-4 w-4 mr-2" />
              <span>Home</span>
            </Link>
            <Link 
              to="/requests" 
              className="text-gray-600 hover:text-primary py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-4 w-4 mr-2" />
              <span>Browse</span>
            </Link>
            <Link 
              to="/shop-profile" 
              className="text-gray-600 hover:text-primary py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              <span>For Shops</span>
            </Link>
            <Link 
              to="/profile" 
              className="text-gray-600 hover:text-primary py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-4 w-4 mr-2" />
              <span>Profile</span>
            </Link>
            <Link 
              to="/create-request" 
              className="bg-primary text-white py-2 px-4 rounded-md flex justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              New Request
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
