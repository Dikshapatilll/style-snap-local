
import { Clock, MapPin, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

type RequestCardProps = {
  request: {
    id: string;
    title: string;
    category: string;
    location: string;
    budget: string;
    isUrgent: boolean;
    createdAt: string;
  };
};

const RequestCard = ({ request }: RequestCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{request.title}</CardTitle>
          {request.isUrgent && (
            <Badge className="bg-secondary hover:bg-secondary/90">Urgent</Badge>
          )}
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Clock className="mr-1 h-4 w-4" />
          <span>{request.createdAt}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="flex items-center mb-2">
          <Badge variant="outline" className="mr-2">
            {request.category}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="mr-1 h-4 w-4" />
          <span>{request.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <DollarSign className="mr-1 h-4 w-4" />
          <span>Budget: {request.budget}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/requests/${request.id}`} className="w-full">
          <Button 
            className="w-full bg-primary hover:bg-primary/90" 
            variant="default"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RequestCard;
