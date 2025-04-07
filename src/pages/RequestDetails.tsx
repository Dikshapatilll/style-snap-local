
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import ResponseCard from "@/components/ResponseCard";
import ShopResponseForm from "@/components/ShopResponseForm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Clock, MessageCircle } from "lucide-react";

// Mock data - would normally come from an API
const mockRequest = {
  id: "1",
  title: "Black T-shirt with short sleeves and a collar",
  category: "T-Shirts",
  description: "Looking for a comfortable black t-shirt with a collar. Preferably cotton material, not too thick as it's for summer wear. Need it in size medium, and I'm looking for something with a modern fit that's not too loose or too tight.",
  location: "Downtown",
  budget: "$20-30",
  size: "Medium",
  color: "Black",
  isUrgent: true,
  createdAt: "10 hours ago",
  user: {
    name: "Alex Johnson",
    rating: 4.5,
  }
};

// Mock responses
const mockResponses = [
  {
    id: "resp1",
    shopName: "Urban Style Boutique",
    shopLocation: "123 Main St, Downtown",
    shopPhone: "(555) 123-4567",
    price: "$25",
    message: "We have exactly what you're looking for! It's a premium cotton black polo shirt with short sleeves, perfect for summer. We have it in medium size and it has a modern slim fit. The material is breathable and high-quality.",
    images: [
      "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww"
    ],
    canDeliver: true
  },
  {
    id: "resp2",
    shopName: "Fashion Forward",
    shopLocation: "456 Oak Ave, Midtown",
    shopPhone: "(555) 987-6543",
    price: "$28",
    message: "We have a great black polo t-shirt in stock. It's made from 100% organic cotton with a classic collar. The fit is regular and very comfortable. We have several in medium size available right now.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww"
    ],
    canDeliver: false
  }
];

const RequestDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [request, setRequest] = useState(mockRequest);
  const [responses, setResponses] = useState(mockResponses);
  const [showResponseForm, setShowResponseForm] = useState(false);

  useEffect(() => {
    // Here you would normally fetch the request data from an API
    console.log(`Fetching request details for ID: ${id}`);
    // For now we're using mock data
  }, [id]);

  const handleResponseSubmitted = () => {
    setShowResponseForm(false);
    // In a real app, you would refresh the responses from the API
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Request Details Card */}
          <Card className="mb-8">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h1 className="text-2xl font-bold text-gray-800">{request.title}</h1>
                {request.isUrgent && (
                  <Badge className="bg-secondary hover:bg-secondary/90">Urgent Request</Badge>
                )}
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <Clock className="mr-1 h-4 w-4" />
                <span>{request.createdAt} by {request.user.name}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="mr-2">
                  {request.category}
                </Badge>
                {request.size && (
                  <Badge variant="outline">
                    Size: {request.size}
                  </Badge>
                )}
                {request.color && (
                  <Badge variant="outline">
                    Color: {request.color}
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{request.location}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <DollarSign className="mr-1 h-4 w-4" />
                <span>Budget: {request.budget}</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <h3 className="font-medium mb-2">Request Details:</h3>
                <p className="text-gray-700">{request.description}</p>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <Button 
                  variant="outline"
                  className="flex items-center"
                  onClick={() => {}}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Requester
                </Button>
                
                <Button 
                  onClick={() => setShowResponseForm(!showResponseForm)}
                  className={showResponseForm ? "bg-gray-200 text-gray-700" : "bg-primary hover:bg-primary/90"}
                >
                  {showResponseForm ? "Cancel Response" : "Respond to Request"}
                </Button>
              </div>
              
              {showResponseForm && (
                <ShopResponseForm 
                  requestId={request.id} 
                  onResponseSubmitted={handleResponseSubmitted}
                />
              )}
            </CardContent>
          </Card>
          
          {/* Responses Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Responses ({responses.length})
            </h2>
            
            {responses.length > 0 ? (
              responses.map((response) => (
                <ResponseCard key={response.id} response={response} />
              ))
            ) : (
              <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                <p className="text-gray-500">No responses yet</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestDetails;
