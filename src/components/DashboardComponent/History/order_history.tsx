import { DatePickerDemo } from "@/components/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";


import { DataTable } from "@/components/data-table/Datatable";
import { orderColumns } from "@/components/table/order-column";

const Order_history = () => {
interface Order {
  sno: number;
  pairName: string;
  refId: string;
  orderType: "Buy" | "Sell";   
  quantity: number;
  price: number;
  totalAmount: number;
  filledAmount: number;
  tdsPercent: number;
  feePercent: number;
  receivedToken: string;
  dateTime: string; 
  status: "Completed" | "Pending" | "Failed"; 
}

  const transactions: Order[] = [
    {
      sno: 1,
      pairName: "BTC_INR",
      refId: "REF12345",
      orderType: "Buy",
      quantity: 0.5,
      price: 2500000,
      totalAmount: 1250000,
      filledAmount: 0.5,
      tdsPercent: 1,
      feePercent: 0.2,
      receivedToken: "BTC",
      dateTime: "2025-09-05 14:32",
      status: "Completed",
    },
  ];

  return (
    <div className="w-full sm:px-2 lg:px-3">
      {/* Filters grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6 items-end">
        {/* Pair Name */}
        <Select>
          <SelectTrigger className="w-full h-11 text-sm">
            <SelectValue placeholder="All Pairs" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="BTC_INR">BTC_INR</SelectItem>
            <SelectItem value="BTC_USDT">BTC_USDT</SelectItem>
            <SelectItem value="DOGE_INR">DOGE_INR</SelectItem>
            <SelectItem value="DOGE_USDT">DOGE_USDT</SelectItem>
            <SelectItem value="ETH_INR">ETH_INR</SelectItem>
            <SelectItem value="ETH_USDT">ETH_USDT</SelectItem>
            <SelectItem value="TRX_INR">TRX_INR</SelectItem>
            <SelectItem value="TRX_USDT">TRX_USDT</SelectItem>
            <SelectItem value="USDT_INR">USDT_INR</SelectItem>
            <SelectItem value="XRP_INR">XRP_INR</SelectItem>
            <SelectItem value="XRP_USDT">XRP_USDT</SelectItem>
          </SelectContent>
        </Select>

        {/* Order Type */}
        <Select>
          <SelectTrigger className="w-full h-11 text-sm">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Buy">Buy</SelectItem>
            <SelectItem value="Sell">Sell</SelectItem>
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
          <SelectTrigger className="w-full h-11 text-sm">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>

        {/* Search by Ref ID */}
        <div className="relative w-full">
          <Input
            placeholder="Search by Ref ID"
            className="w-full pr-12 h-11 text-sm"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="Search"
          >
            <FaSearch size={18} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
         {/* <Order_history_table orders={transactions} /> */}
        <DataTable columns={orderColumns} data={transactions} />
      </div>
    </div>
  );
};

export default Order_history;
