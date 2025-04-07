
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const categoryOptions = [
  "T-Shirts", "Shirts", "Dresses", "Pants", "Jeans", "Skirts", 
  "Jackets", "Sweaters", "Activewear", "Formal Wear", "Accessories", "Other"
];

const RequestForm = () => {
  const navigate = useNavigate();
  const [isUrgent, setIsUrgent] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    budget: "",
    size: "",
    color: "",
    location: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally submit to a backend
    console.log({ ...formData, isUrgent });
    
    toast.success("Your request has been submitted!");
    navigate("/requests");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="title">What are you looking for?</Label>
        <Input
          id="title"
          name="title"
          placeholder="e.g., Black T-shirt with short sleeves and a collar"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="category">Category</Label>
        <Select
          value={formData.category}
          onValueChange={handleCategoryChange}
          required
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categoryOptions.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="size">Size</Label>
          <Input
            id="size"
            name="size"
            placeholder="e.g., Medium, 32, XL"
            value={formData.size}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="color">Color</Label>
          <Input
            id="color"
            name="color"
            placeholder="e.g., Black, Navy Blue"
            value={formData.color}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">Additional Details</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Describe any specific details, fabric preferences, brand preferences, etc."
          value={formData.description}
          onChange={handleChange}
          className="mt-1"
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="budget">Budget Range</Label>
        <Input
          id="budget"
          name="budget"
          placeholder="e.g., $20-30"
          value={formData.budget}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="location">Your Location</Label>
        <Input
          id="location"
          name="location"
          placeholder="e.g., Downtown, North Side"
          value={formData.location}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="urgent"
          checked={isUrgent}
          onCheckedChange={setIsUrgent}
        />
        <Label htmlFor="urgent" className="cursor-pointer">
          This is an urgent request (delivery option available)
        </Label>
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
        Submit Request
      </Button>
    </form>
  );
};

export default RequestForm;
