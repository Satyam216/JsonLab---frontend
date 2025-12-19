import { useState, useEffect } from "react";
import { api } from "../api/api";

export default function RequestForm({ setResponse, selectedHistory }) {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState([{ key: "", value: "" }]);
  const [params, setParams] = useState([{ key: "", value: "" }]);
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  /* =======================
     AUTO-FILL FROM HISTORY
     ======================= */
  useEffect(() => {
    if (!selectedHistory) return;

    setUrl(selectedHistory.url || "");
    setMethod(selectedHistory.method || "GET");

    setHeaders(
      Object.entries(selectedHistory.headers || {}).map(([k, v]) => ({
        key: k,
        value: v,
      })) || [{ key: "", value: "" }]
    );

    setParams(
      Object.entries(selectedHistory.params || {}).map(([k, v]) => ({
        key: k,
        value: v,
      })) || [{ key: "", value: "" }]
    );

    setBody(
      selectedHistory.body
        ? JSON.stringify(selectedHistory.body, null, 2)
        : ""
    );
  }, [selectedHistory]);

  /* =======================
     HELPERS
     ======================= */
  const addHeader = () => {
    setHeaders([...headers, { key: "", value: "" }]);
  };

  const addParam = () => {
    setParams([...params, { key: "", value: "" }]);
  };

  const updateHeader = (i, field, value) => {
    const updated = [...headers];
    updated[i][field] = value;
    setHeaders(updated);
  };

  const updateParam = (i, field, value) => {
    const updated = [...params];
    updated[i][field] = value;
    setParams(updated);
  };

  // Convert headers array → object
  const headersObject = {};
  headers.forEach((h) => {
    if (h.key) headersObject[h.key] = h.value;
  });

  // Convert params array → object
  const paramsObject = {};
  params.forEach((p) => {
    if (p.key) paramsObject[p.key] = p.value;
  });

  /* =======================
     SEND REQUEST
     ======================= */
  const sendRequest = async () => {
    if (!url) {
      alert("Enter a URL!");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/proxy", {
        url,
        method,
        headers: headersObject,
        params: paramsObject,
        body: body ? JSON.parse(body) : {},
      });

      setResponse(res.data);
    } catch (error) {
      setResponse({
        status: "Error",
        data: error.response?.data || error.message,
      });
    }

    setLoading(false);
  };

  /* =======================
     UI
     ======================= */
  return (
    <div className="space-y-6">
      {/* URL + METHOD */}
      <div className="flex gap-3">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="bg-[#1F2023] border border-[#2A2B2E] p-2 rounded"
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>

        <input
          type="text"
          placeholder="Enter request URL…"
          className="flex-1 bg-[#1F2023] border border-[#2A2B2E] p-2 rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      {/* PARAMS */}
      <div>
        <div className="flex justify-between mb-2">
          <h3 className="text-gray-400 font-semibold">Query Params</h3>
          <button onClick={addParam} className="text-emerald-400 text-sm">
            + Add
          </button>
        </div>

        {params.map((p, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              className="bg-[#1F2023] border border-[#2A2B2E] p-2 rounded w-1/2"
              placeholder="key"
              value={p.key}
              onChange={(e) => updateParam(i, "key", e.target.value)}
            />
            <input
              className="bg-[#1F2023] border border-[#2A2B2E] p-2 rounded w-1/2"
              placeholder="value"
              value={p.value}
              onChange={(e) => updateParam(i, "value", e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* HEADERS */}
      <div>
        <div className="flex justify-between mb-2">
          <h3 className="text-gray-400 font-semibold">Headers</h3>
          <button onClick={addHeader} className="text-emerald-400 text-sm">
            + Add
          </button>
        </div>

        {headers.map((h, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              className="bg-[#1F2023] border border-[#2A2B2E] p-2 rounded w-1/2"
              placeholder="key"
              value={h.key}
              onChange={(e) => updateHeader(i, "key", e.target.value)}
            />
            <input
              className="bg-[#1F2023] border border-[#2A2B2E] p-2 rounded w-1/2"
              placeholder="value"
              value={h.value}
              onChange={(e) => updateHeader(i, "value", e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* BODY */}
      <div>
        <h3 className="text-gray-400 font-semibold mb-1">Body (JSON)</h3>
        <textarea
          className="w-full h-44 bg-[#1F2023] border border-[#2A2B2E] p-2 rounded"
          placeholder='{ "name": "John" }'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      {/* SEND BUTTON */}
      <button
        onClick={sendRequest}
        disabled={loading}
        className="bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded font-semibold shadow-md w-full disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Request"}
      </button>
    </div>
  );
}
