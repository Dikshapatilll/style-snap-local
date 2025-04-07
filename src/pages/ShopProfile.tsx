
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ShopProfile = () => {
  const [formData, setFormData] = useState({
    shopName: "",
    address: "",
    phone: "",
    description: "",
    categories: "",
    openingHours: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally submit to a backend
    console.log(formData);
    
    toast.success("Shop profile has been saved!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Shop Profile</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Shop Information</h2>
            <p className="text-gray-600 mb-6">
              Complete your shop profile to start responding to customer requests and grow your local business.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="shopName">Shop Name</Label>
                <Input
                  id="shopName"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                  placeholder="e.g., Urban Style Boutique"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g., 123 Main St, Downtown"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g., (555) 123-4567"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Shop Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your shop, including the types of clothing you sell, your target audience, and any specialties."
                  className="mt-1"
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="categories">Product Categories</Label>
                <Input
                  id="categories"
                  name="categories"
                  value={formData.categories}
                  onChange={handleChange}
                  placeholder="e.g., Men's Casual, Women's Formal, Accessories, etc."
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="openingHours">Opening Hours</Label>
                <Textarea
                  id="openingHours"
                  name="openingHours"
                  value={formData.openingHours}
                  onChange={handleChange}
                  placeholder="e.g., Mon-Fri: 10am-7pm, Sat: 11am-6pm, Sun: Closed"
                  className="mt-1"
                  rows={3}
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Save Shop Profile
              </Button>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Find Requests to Respond To</h2>
            <p className="text-gray-600 mb-4">
              Browse active customer requests and respond to those that match your inventory.
            </p>
            <Link to="/requests">
              <Button className="w-full">Browse Requests</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShopProfile;
