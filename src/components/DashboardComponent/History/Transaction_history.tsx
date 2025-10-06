import { DatePickerDemo } from "@/components/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/data-table/Datatable";
import { transactionColumns } from "@/components/table/transaction-column";

const Transaction_history = () => {
   interface Transaction {
  id: string;
  currency: string;
  type: string;
  requestAmt: number;
  fee: number;
  receivedAmt: number;
  status: "Pending" | "Completed" | "Failed";
  date: string;
}
  const transactions: Transaction[] = [
    {
      id: "TXN12345",
      currency: "BTC",
      type: "Deposit",
      requestAmt: 0.5,
      fee: 0.001,
      receivedAmt: 0.499,
      status: "Completed",
      date: "2025-09-05 14:32",
    },
     {
      id: "TXN12345",
      currency: "BTC",
      type: "Deposit",
      requestAmt: 0.5,
      fee: 0.001,
      receivedAmt: 0.499,
      status: "Completed",
      date: "2025-09-05 14:32",
    },
     {
      id: "TXN12345",
      currency: "BTC",
      type: "Deposit",
      requestAmt: 0.5,
      fee: 0.001,
      receivedAmt: 0.499,
      status: "Completed",
      date: "2025-09-05 14:32",
    },
     {
      id: "TXN12345",
      currency: "BTC",
      type: "Deposit",
      requestAmt: 0.5,
      fee: 0.001,
      receivedAmt: 0.499,
      status: "Completed",
      date: "2025-09-05 14:32",
    },
     {
      id: "TXN12345",
      currency: "BTC",
      type: "Deposit",
      requestAmt: 0.5,
      fee: 0.001,
      receivedAmt: 0.499,
      status: "Completed",
      date: "2025-09-05 14:32",
    },
     {
      id: "TXN12345",
      currency: "BTC",
      type: "Deposit",
      requestAmt: 0.5,
      fee: 0.001,
      receivedAmt: 0.499,
      status: "Completed",
      date: "2025-09-05 14:32",
    },
  ];

  return (
    <div className="w-full  sm:px-2 lg:px-3 mr-24 ">
      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6 ">
        {/* Currency Type */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Fiat / Crypto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Fiat">Fiat</SelectItem>
            <SelectItem value="Crypto">Crypto</SelectItem>
          </SelectContent>
        </Select>

        {/* Transaction Type */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Deposit">Deposit</SelectItem>
            <SelectItem value="Withdrawl">Withdrawl</SelectItem>
          </SelectContent>
        </Select>

        {/* Start Date */}
        <div className="w-full">
          <DatePickerDemo placeholder="Start Date" />
        </div>

        {/* End Date */}
        <div className="w-full">
          <DatePickerDemo placeholder="End Date" />
        </div>

        {/* Status */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Complete">Complete</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
            <SelectItem value="Waiting For User Confirmation">
              Waiting For User Confirmation
            </SelectItem>
            <SelectItem value="Waiting For Payment Confirmation">
              Waiting For Payment Confirmation
            </SelectItem>
            <SelectItem value="Time expire">Time expire</SelectItem>
            <SelectItem value="Order Cancelled">Order Cancelled</SelectItem>
          </SelectContent>
        </Select>

        {/* Search by ID */}
        <Input placeholder="Search by ID" className="w-full" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        {/* <TransactionTable transactions={transactions} /> */}
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </div>
  );
};

export default Transaction_history;
