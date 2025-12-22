import { useEffect, useState } from "react";
import { fetchHistory } from "../api/historyApi";
import { useAuth } from "../context/AuthContext";
import CreateCollectionModal from "./CreateCollectionModal";
import { createCollection, fetchCollections } from "../api/collectionApi";


export default function Sidebar({ onSelectHistory, onSelectCollection }) {
  const { user } = useAuth();

  const [history, setHistory] = useState([]);
  const [collections, setCollections] = useState([]);
  const [showModal, setShowModal] = useState(false);
  /* =====================
     LOAD HISTORY
     ===================== */
  useEffect(() => {
  if (!user) return;
  fetchHistory(user.uid).then(setHistory);
}, [user]);


  const loadHistory = async () => {
    try {
      const data = await fetchHistory(user.uid);
      setHistory(data);
    } catch (err) {
      console.error("Failed to load history", err);
    }
  };

  /* =====================
     LOAD COLLECTIONS
     ===================== */
  useEffect(() => {
    if (!user) return;

    fetchCollections(user.uid)
      .then((res) => setCollections(res.data))
      .catch((err) => console.error("Failed to load collections", err));
  }, [user]);

  const handleCreate = async (name) => {
  await createCollection({ user_id: user.uid, name });
  setShowModal(false);
  fetchCollections(user.uid).then(res => setCollections(res.data));
};

  return (
    <div className="h-full p-4 flex flex-col gap-8 bg-[#1A1B1E]">

      {/* LOGO + NAME */}


      {/* =====================
          HISTORY
          ===================== */}
      <div className="flex-1">
        <h3 className="text-gray-400 mb-3 font-semibold">History</h3>

        {history.length === 0 ? (
          <p className="text-gray-500 text-sm">No requests yet</p>
        ) : (
          <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-1">
            {history.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectHistory(item)}
                className="p-2 bg-[#1F2023] hover:bg-[#262729] rounded cursor-pointer text-sm"
              >
                <span className="text-emerald-400 font-semibold">
                  {item.method}
                </span>
                <span className="text-gray-300 truncate block">
                  {item.url}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =====================
          COLLECTIONS
          ===================== */}
      <div>
          <h3 className="text-gray-400 mb-2 font-semibold text-sm flex justify-between">
            Collections
            <button
              onClick={() => setShowModal(true)}
              className="text-emerald-400 text-xs"
            >
              + New
            </button>
          </h3>

          {collections.map(col => (
            <div
              key={col.id}
              className="p-2 bg-[#1F2023] rounded hover:bg-[#262729] cursor-pointer text-sm"
            >
              📁 {col.name}
            </div>
          ))}
        </div>

        {showModal && (
          <CreateCollectionModal
            onCreate={handleCreate}
            onClose={() => setShowModal(false)}
          />
        )}
    </div>
  );
}
