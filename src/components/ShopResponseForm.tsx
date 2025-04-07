
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Upload } from "lucide-react";
import { toast } from "sonner";

type ShopResponseFormProps = {
  requestId: string;
  onResponseSubmitted: () => void;
};

const ShopResponseForm = ({ requestId, onResponseSubmitted }: ShopResponseFormProps) => {
  const [canDeliver, setCanDeliver] = useState(false);
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImageFiles([...imageFiles, ...files]);
      
      // Create preview URLs
      const newPreviewUrls = files.map(file => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    const newImageFiles = [...imageFiles];
    const newPreviewUrls = [...previewUrls];
    
    // Revoke the URL to avoid memory leaks
    URL.revokeObjectURL(previewUrls[index]);
    
    newImageFiles.splice(index, 1);
    newPreviewUrls.splice(index, 1);
    
    setImageFiles(newImageFiles);
    setPreviewUrls(newPreviewUrls);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally submit to a backend
    console.log({
      requestId,
      price,
      message,
      imageFiles,
      canDeliver
    });
    
    toast.success("Your response has been submitted!");
    onResponseSubmitted();
    
    // Reset form
    setPrice("");
    setMessage("");
    setImageFiles([]);
    setPreviewUrls([]);
    setCanDeliver(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6 p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold">Respond to this request</h3>
      
      <div>
        <Label htmlFor="price">Your Price</Label>
        <Input
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="e.g., $25"
          required
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe the item you have, including details like material, brand, exact color shade, etc."
          required
          className="mt-1"
          rows={4}
        />
      </div>
      
      <div>
        <Label>Upload Images (up to 3)</Label>
        <div className="mt-1">
          {previewUrls.length < 3 && (
            <div className="mt-2">
              <Label 
                htmlFor="image-upload" 
                className="cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 hover:border-primary transition-colors"
              >
                <Upload className="h-6 w-6 text-gray-400 mr-2" />
                <span className="text-gray-600">Click to upload</span>
              </Label>
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                disabled={previewUrls.length >= 3}
              />
            </div>
          )}
          
          {previewUrls.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-3">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative">
                  <img 
                    src={url} 
                    alt={`Upload preview ${index + 1}`} 
                    className="w-full h-24 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch
          id="canDeliver"
          checked={canDeliver}
          onCheckedChange={setCanDeliver}
        />
        <Label htmlFor="canDeliver" className="cursor-pointer">
          I can deliver this item (for urgent requests)
        </Label>
      </div>
      
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
        Submit Response
      </Button>
    </form>
  );
};

export default ShopResponseForm;
