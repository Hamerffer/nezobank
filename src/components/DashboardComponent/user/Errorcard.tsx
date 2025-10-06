interface Props {
  message: string
}

const ErrorCard = ({ message }: Props) => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <p className="text-red-500 mb-4">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  </div>
)

export default ErrorCard
