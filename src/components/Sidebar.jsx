export default function Sidebar() {
  return (
    <div className="h-full p-4 flex flex-col gap-6">

      <h2 className="text-xl font-semibold">API Tester</h2>

      <div>
        <h3 className="text-gray-300 font-medium mb-2">History</h3>
        <div className="space-y-2">
          <div className="p-2 bg-gray-700 rounded">GET /users</div>
          <div className="p-2 bg-gray-700 rounded">POST /login</div>
        </div>
      </div>

      <div>
        <h3 className="text-gray-300 font-medium mb-2">Collections</h3>
        <div className="space-y-2">
          <div className="p-2 bg-gray-700 rounded">User APIs</div>
          <div className="p-2 bg-gray-700 rounded">Auth APIs</div>
        </div>
      </div>

    </div>
  );
}
