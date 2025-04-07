
import { useState } from "react";
import NavBar from "@/components/NavBar";
import RequestCard from "@/components/RequestCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Mock data - would normally come from an API
const mockRequests = [
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
    id: "2",
    title: "Blue slim-fit jeans with minimal distressing",
    category: "Jeans",
    location: "West End",
    budget: "$50-80",
    isUrgent: false,
    createdAt: "1 day ago"
  },
  {
    id: "3",
    title: "White button-up formal shirt for an interview",
    category: "Shirts",
    location: "Uptown",
    budget: "$30-60",
    isUrgent: true,
    createdAt: "2 days ago"
  },
  {
    id: "4",
    title: "Summer dress with floral pattern, knee length",
    category: "Dresses",
    location: "Midtown",
    budget: "$40-70",
    isUrgent: false,
    createdAt: "3 days ago"
  },
  {
    id: "5",
    title: "Gray hoodie with front pocket, size L",
    category: "Sweaters",
    location: "East Side",
    budget: "$25-45",
    isUrgent: false,
    createdAt: "4 days ago"
  },
  {
    id: "6",
    title: "Black leather belt with silver buckle",
    category: "Accessories",
    location: "North End",
    budget: "$15-30",
    isUrgent: false,
    createdAt: "5 days ago"
  }
];

const categoryOptions = [
  "All Categories", "T-Shirts", "Shirts", "Dresses", "Pants", "Jeans", "Skirts", 
  "Jackets", "Sweaters", "Activewear", "Formal Wear", "Accessories", "Other"
];

const Requests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [showUrgentOnly, setShowUrgentOnly] = useState(false);

  // Filter requests based on search and filters
  const filteredRequests = mockRequests.filter(request => {
    const matchesSearch = request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All Categories" || request.category === category;
    const matchesUrgent = !showUrgentOnly || request.isUrgent;

    return matchesSearch && matchesCategory && matchesUrgent;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Browse Clothing Requests</h1>
        
        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="search">Search</Label>
              <div className="relative mt-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  id="search"
                  placeholder="Search by title or location"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={category}
                onValueChange={setCategory}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button 
                variant="outline" 
                className={`${showUrgentOnly ? 'bg-secondary/10 border-secondary' : ''} mt-1 w-full`}
                onClick={() => setShowUrgentOnly(!showUrgentOnly)}
              >
                {showUrgentOnly ? 'Showing Urgent Only' : 'Show All Requests'}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Request Cards */}
        {filteredRequests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRequests.map((request) => (
              <RequestCard key={request.id} request={request} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No matching requests found</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters or search term</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Requests;
