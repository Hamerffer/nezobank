import { DatePickerDemo } from "@/components/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import { DataTable } from "@/components/data-table/Datatable";
import { fiatCryptoColumns } from "@/components/table/fiat_crypto_column";

const Fiat_crypto_history = () => {
  const transactions = [
    {
      sno: 1,
      currencySymbol: "BTC",
      transferedAmount: 0.5,
      Transferfrom: "Wallet A",
      dateTime: "2025-09-06 10:30",
    },
  ];

  return (
    <div className="w-full">
      {/* Filters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {/* Currency Select */}
        <Select>
          <SelectTrigger className="w-full h-10 text-sm">
            <SelectValue placeholder="All Currencies" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="BTC">BTC</SelectItem>
            <SelectItem value="ETH">ETH</SelectItem>
            <SelectItem value="XRP">XRP</SelectItem>
            <SelectItem value="TRX">TRX</SelectItem>
            <SelectItem value="USDT">USDT</SelectItem>
            <SelectItem value="DOGE">DOGE</SelectItem>
            <SelectItem value="INR">INR</SelectItem>
          </SelectContent>
        </Select>

        {/* Start Date */}
        <DatePickerDemo placeholder="Start Date" />

        {/* End Date */}
        <DatePickerDemo placeholder="End Date" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
      
        <DataTable columns={fiatCryptoColumns} data={transactions}/>
      </div>
    </div>
  );
};

export default Fiat_crypto_history;
