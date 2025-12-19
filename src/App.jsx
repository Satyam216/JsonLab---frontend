import { useState } from "react";
import Sidebar from "./components/Sidebar";
import RequestForm from "./components/RequestForm";
import ResponseViewer from "./components/ResponseViewer";

export default function App() {
  const [response, setResponse] = useState(null);
  const [selectedHistory, setSelectedHistory] = useState(null);

  return (
    <div className="h-screen w-full flex bg-[#131416] text-gray-200">

      <div className="w-[20%] bg-[#1A1B1E] border-r border-[#2A2B2E]">
        <Sidebar onSelectHistory={setSelectedHistory}  />
      </div>

      <div className="w-[50%] border-r border-[#2A2B2E] p-4 overflow-y-auto">
        <RequestForm 
        setResponse={setResponse} 
        selectedHistory={selectedHistory}/>
      </div>

      <div className="w-[30%] p-4 overflow-y-auto">
        <ResponseViewer response={response} />
      </div>

    </div>
  );
}
