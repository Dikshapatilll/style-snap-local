
import { useState } from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type ResponseCardProps = {
  response: {
    id: string;
    shopName: string;
    shopLocation: string;
    shopPhone: string;
    price: string;
    message: string;
    images: string[];
    canDeliver: boolean;
  };
};

const ResponseCard = ({ response }: ResponseCardProps) => {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{response.shopName}</CardTitle>
          {response.canDeliver && (
            <Badge className="bg-green-500 hover:bg-green-600">Delivery Available</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="mr-1 h-4 w-4" />
          <span>{response.shopLocation}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Phone className="mr-1 h-4 w-4" />
          <span>{response.shopPhone}</span>
        </div>
        <div className="font-semibold text-lg mb-2">
          Price: {response.price}
        </div>
        <p className="text-gray-700 mb-4">{response.message}</p>
        
        {response.images.length > 0 && (
          <div>
            <p className="font-medium mb-2">Product Images:</p>
            <div className="grid grid-cols-3 gap-2">
              {response.images.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div 
                      className="cursor-pointer h-20 rounded-md overflow-hidden"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`Product ${index + 1}`} 
                        className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{response.shopName}'s Product</DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-center">
                      <img 
                        src={selectedImage} 
                        alt="Product large view" 
                        className="max-h-[70vh] object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1 bg-primary hover:bg-primary/90">
          <MessageCircle className="mr-2 h-4 w-4" /> Contact Shop
        </Button>
        {response.canDeliver && (
          <Button className="flex-1 bg-secondary hover:bg-secondary/90">
            Request Delivery
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ResponseCard;
