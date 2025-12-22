import { useState } from "react";

export default function CreateCollectionModal({ onCreate, onClose }) {
  const [name, setName] = useState("");

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1F2023] p-6 rounded-lg w-[360px] space-y-4">
        <h2 className="text-lg font-semibold text-emerald-400">
          Create Collection
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Collection name"
          className="w-full p-2 bg-[#131416] rounded text-sm"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="text-gray-400 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (!name.trim()) return;
              onCreate(name);
            }}
            className="bg-emerald-600 px-4 py-1.5 rounded text-sm"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
