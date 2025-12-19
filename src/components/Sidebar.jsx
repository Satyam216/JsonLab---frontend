import logo from "/jsonlab-logo.png";
import { useEffect, useState } from "react";
import { fetchHistory } from "../api/historyApi";

export default function Sidebar({ onSelectHistory }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const data = await fetchHistory();
      setHistory(data);
    } catch (err) {
      console.error("Failed to load history", err);
    }
  };

  return (
    <div className="h-full p-4 flex flex-col gap-8 bg-[#1A1B1E]">

      {/* LOGO + NAME */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="JsonLab Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-2xl font-bold text-emerald-400 tracking-wide">
          JsonLab
        </h1>
      </div>

      {/* HISTORY */}
      <div className="flex-1">
        <h3 className="text-gray-400 mb-3 font-semibold">History</h3>

        {history.length === 0 ? (
          <p className="text-gray-500 text-sm">No requests yet</p>
        ) : (
          <div className="space-y-2 max-h-[55vh] overflow-y-auto pr-1">
            {history.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectHistory(item)}
                className="p-2 bg-[#1F2023] hover:bg-[#262729] rounded cursor-pointer text-sm"
              >
                <span className="text-emerald-400 font-semibold">
                  {item.method}
                </span>{" "}
                <span className="text-gray-300 truncate block">
                  {item.url}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* COLLECTIONS (future use) */}
      <div>
        <h3 className="text-gray-400 mb-2 font-semibold">Collections</h3>
        <div className="text-gray-500 text-sm italic">
          Coming soon…
        </div>
      </div>

    </div>
  );
}
