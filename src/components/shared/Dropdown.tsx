import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineSetting } from "react-icons/ai";

const dropdownItems = {
  project_name: "Project Name",
  bid_value: "Bid Value",
  actual_value: "Actual Value",
  added_by: "Added By",
  country: "Country",
  deal_status: "Deal Status",
  status: "Status",
};

const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <AiOutlineSetting />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {Object.keys(dropdownItems).map((item) => (
          <>
            <DropdownMenuItem>{dropdownItems[item]}</DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
