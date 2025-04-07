
import { useState } from "react";
import NavBar from "@/components/NavBar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import RequestCard from "@/components/RequestCard";

// Mock data for user requests
const mockUserRequests = [
  {
    id: "1",
    title: "Black T-shirt with short sleeves and a collar",
    category: "T-Shirts",
    location: "Downtown",
    budget: "$20-30",
    isUrgent: true,
    createdAt: "10 hours ago"
  },
  {
    id: "3",
    title: "White button-up formal shirt for an interview",
    category: "Shirts",
    location: "Uptown",
    budget: "$30-60",
    isUrgent: true,
    createdAt: "2 days ago"
  }
];

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "(555) 987-6543",
    location: "Downtown"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally submit to a backend
    console.log(profileData);
    
    toast.success("Profile has been updated!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Profile</h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mb-8">
              <TabsTrigger value="profile">Profile Settings</TabsTrigger>
              <TabsTrigger value="requests">Your Requests</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={profileData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={profileData.location}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    Save Changes
                  </Button>
                </form>
              </div>
            </TabsContent>
            
            <TabsContent value="requests">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Your Clothing Requests</h2>
                  <Link to="/create-request">
                    <Button>Create New Request</Button>
                  </Link>
                </div>
                
                {mockUserRequests.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockUserRequests.map((request) => (
                      <RequestCard key={request.id} request={request} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">You haven't created any requests yet.</p>
                    <Link to="/create-request">
                      <Button className="mt-4">Create Your First Request</Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;
