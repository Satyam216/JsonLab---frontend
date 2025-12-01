import { useState } from "react";

export default function RequestForm() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");

  return (
    <div className="space-y-4">
      
      {/* URL + METHOD */}
      <div className="flex gap-3">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="bg-gray-800 border border-gray-700 p-2 rounded"
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
          <option>PATCH</option>
        </select>

        <input
          type="text"
          placeholder="Enter request URL..."
          className="flex-1 bg-gray-800 border border-gray-700 p-2 rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      {/* HEADERS */}
      <div>
        <h3 className="font-medium text-gray-300 mb-1">Headers</h3>
        <textarea
          className="w-full h-24 bg-gray-800 border border-gray-700 p-2 rounded"
          placeholder='{"Content-Type": "application/json"}'
        />
      </div>

      {/* BODY */}
      <div>
        <h3 className="font-medium text-gray-300 mb-1">Body (JSON)</h3>
        <textarea
          className="w-full h-40 bg-gray-800 border border-gray-700 p-2 rounded"
          placeholder='{ "name": "John" }'
        />
      </div>

      {/* SEND BUTTON */}
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold">
        Send Request
      </button>

    </div>
  );
}
