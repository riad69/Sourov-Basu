import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

type DataProps = {
  data: {
    project_name: string;
    bid_value: number;
    actual_value: number;
    added_by: number;
    country: string;
    deal_status: number;
    status: string;
  };
};

type LeadProps = {
  project_name: string;
  bid_value: number;
  actual_value: number;
  added_by: number;
  country: string;
  deal_status: number;
  status: string;
};

const Tables = ({ data }: DataProps[]) => {
  return (
    <Table className="w-full overflow-x-scroll">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>

          <TableHead className="w-[100px]">Project Name</TableHead>
          <TableHead>Bid Value</TableHead>
          <TableHead>Actual Value</TableHead>
          <TableHead className="text-right">Added By</TableHead>
          <TableHead className="w-[100px]">Country</TableHead>
          <TableHead>Deal Status</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((lead: LeadProps, index: number) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium">{lead.project_name}</TableCell>
            <TableCell>{lead.bid_value}</TableCell>
            <TableCell>{lead.actual_value}</TableCell>
            <TableCell className="text-right">{lead.added_by}</TableCell>
            <TableCell className="font-medium">{lead.country}</TableCell>
            <TableCell
              className={`${
                lead.deal_status === 0 ? "text-red-500" : "text-teal-500"
              }`}
            >
              {lead.deal_status === 0 ? (
                <Badge variant="destructive">Not converted to deal</Badge>
              ) : (
                <Badge className="bg-teal-500">Converted to deal</Badge>
              )}
            </TableCell>
            <TableCell>{lead.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Tables;
