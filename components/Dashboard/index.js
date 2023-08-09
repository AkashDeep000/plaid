import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="p-4">
      <Button className="text-lg w-full bg-primary text-primary-foreground">
        <Plus />
        Add new Institution
      </Button>
    </div>
  );
};

export default Dashboard;
