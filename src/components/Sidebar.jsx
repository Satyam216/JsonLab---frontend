import logo from "/jsonlab-logo.png"; // adjust path if needed

export default function Sidebar() {
  return (
    <div className="h-full p-4 flex flex-col gap-8">

      {/* LOGO + NAME */}
      <div className="flex items-center gap-3">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-2xl font-bold text-emerald-400 tracking-wide">
          JsonLab
        </h1>
      </div>

      {/* HISTORY */}
      <div>
        <h3 className="text-gray-400 mb-2 font-semibold">History</h3>
        <div className="space-y-2">
          <div className="p-2 bg-[#1F2023] hover:bg-[#262729] rounded cursor-pointer">
            GET /users
          </div>
          <div className="p-2 bg-[#1F2023] hover:bg-[#262729] rounded cursor-pointer">
            POST /login
          </div>
        </div>
      </div>

      {/* COLLECTIONS */}
      <div>
        <h3 className="text-gray-400 mb-2 font-semibold">Collections</h3>
        <div className="space-y-2">
          <div className="p-2 bg-[#1F2023] hover:bg-[#262729] rounded cursor-pointer">
            User APIs
          </div>
          <div className="p-2 bg-[#1F2023] hover:bg-[#262729] rounded cursor-pointer">
            Auth APIs
          </div>
        </div>
      </div>

    </div>
  );
}
