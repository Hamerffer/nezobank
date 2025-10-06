import { createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePickerDemo } from '@/components/date-picker'
import { Button } from '@/components/ui/button'
import { toast } from 'react-toastify'

export const Route = createFileRoute('/dashboard/report')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-4 md:p-6 w-full max-w-3xl mx-auto">
      {/* Header Card */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-center font-extrabold font-mono text-emerald-400 text-2xl">
            Generate Report
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center font-mono">
          <p>Fill and submit the form. We’ll email the report after review.</p>
        </CardContent>
      </Card>

      {/* Form Card */}
      <Card className='h-fit'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
           toast.success('Report request submitted! You will receive an email shortly.')
          }}
        >
          {/* Form Fields */}
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Select Fields */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Report Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="transactions">Transactions</SelectItem>
                <SelectItem value="security">Security</SelectItem>
                <SelectItem value="activity">User Activity</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="xlsx">Excel</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>

            {/* Date Pickers */}
            <DatePickerDemo placeholder="Start Date" />
            <DatePickerDemo placeholder="End Date" />
          </CardContent>

          {/* Submit Button */}
          <CardFooter className="px-4 pb-6 pt-5">
            <Button
              type="submit"
              className="w-full sm:w-48 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
