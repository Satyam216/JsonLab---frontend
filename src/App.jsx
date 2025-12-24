import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import TopBar from "./components/TopBar";
import AuthPanel from "./components/AuthPanel";
import Sidebar from "./components/Sidebar";
import RequestForm from "./components/RequestForm";
import ResponseViewer from "./components/ResponseViewer";

export default function App() {
  const { user } = useAuth();
  const [authMode, setAuthMode] = useState(null);
  const [response, setResponse] = useState(null);
  const [selectedHistory, setSelectedHistory] = useState(null);

  if (!user) {
    return (
      <div className="h-screen bg-[#131416] text-white flex flex-col">
        <TopBar onAuthMode={setAuthMode} />
        <AuthPanel mode={authMode || "login"} onDone={() => setAuthMode(null)} />
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#131416] text-white flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-72 border-r border-[#2A2B2E]">
          <Sidebar onSelectHistory={setSelectedHistory} />
        </div>

        <div className="flex-1 p-6 overflow-auto">
          <RequestForm
            setResponse={setResponse}
            selectedHistory={selectedHistory}
          />
        </div>

        <div className="w-[420px] border-l border-[#2A2B2E] p-4 overflow-hidden">
          <ResponseViewer response={response} />
        </div>
      </div>
    </div>
  );
}
