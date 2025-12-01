import Sidebar from "./components/Sidebar";
import RequestForm from "./components/RequestForm";
import ResponseViewer from "./components/ResponseViewer";

export default function App() {
  return (
    <div className="h-screen w-full flex bg-gray-900 text-white">
      
      {/* LEFT SIDEBAR */}
      <div className="w-[20%] border-r border-gray-700 bg-gray-800">
        <Sidebar />
      </div>

      {/* CENTER REQUEST BUILDER */}
      <div className="w-[50%] border-r border-gray-700 p-4 overflow-y-auto">
        <RequestForm />
      </div>

      {/* RIGHT RESPONSE VIEWER */}
      <div className="w-[30%] p-4 overflow-y-auto">
        <ResponseViewer />
      </div>
    </div>
  );
}
