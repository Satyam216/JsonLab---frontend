export default function ResponseViewer({ response }) {
  if (!response) {
    return <p className="text-gray-500">Send a request to see the response.</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-emerald-400">Response</h2>

      {/* STATUS */}
      <div className="p-4 bg-[#1A1B1E] border border-[#2A2B2E] rounded">
        <p>Status: <span className="text-emerald-400">{response.status}</span></p>
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
  );
}
