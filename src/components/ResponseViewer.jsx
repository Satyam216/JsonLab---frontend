export default function ResponseViewer({ response }) {
  if (!response) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Send a request to see the response.
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-[#131416]">

      {/* HEADER */}
      <div className="p-4 border-b border-[#2A2B2E]">
        <h2 className="text-xl font-bold text-emerald-400">Response</h2>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">

        {/* STATUS */}
        <div className="p-4 bg-[#1A1B1E] border border-[#2A2B2E] rounded">
          <p>
            Status:{" "}
            <span className="text-emerald-400">{response.status}</span>
          </p>
          <p>Time: {response.time}ms</p>
        </div>

        {/* HEADERS */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-1">Headers</h3>
          <pre className="bg-[#1F2023] border border-[#2A2B2E] p-3 rounded text-sm overflow-x-auto">
            {JSON.stringify(response.headers, null, 2)}
          </pre>
        </div>

        {/* BODY */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-1">Body</h3>
          <pre className="bg-[#1F2023] border border-[#2A2B2E] p-3 rounded text-sm overflow-x-auto">
            {JSON.stringify(response.data, null, 2)}
          </pre>
        </div>

      </div>
    </div>
  );
}
