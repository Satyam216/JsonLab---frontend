export default function ResponseViewer() {
  return (
    <div className="space-y-4">
      
      <h2 className="text-xl font-semibold">Response</h2>

      {/* STATUS */}
      <div className="p-3 bg-gray-800 rounded">
        <p>Status: <span className="text-green-400">200 OK</span></p>
        <p>Time: 120ms</p>
      </div>

      {/* HEADERS */}
      <div>
        <h3 className="font-medium text-gray-300 mb-1">Headers</h3>
        <pre className="bg-gray-800 border border-gray-700 p-3 rounded text-sm overflow-x-auto">
{`{
  "content-type": "application/json",
  "server": "cloudflare"
}`}
        </pre>
      </div>

      {/* BODY */}
      <div>
        <h3 className="font-medium text-gray-300 mb-1">Body</h3>
        <pre className="bg-gray-800 border border-gray-700 p-3 rounded text-sm overflow-x-auto">
{`{
  "message": "Hello World"
}`}
        </pre>
      </div>

    </div>
  );
}
