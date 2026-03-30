export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "220px",
        background: "#111",
        color: "white",
        padding: "20px"
      }}>
        <h2>Dashboard</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href="/dashboard" style={{color:"white"}}>Home</a></li>
          <li><a href="/dashboard/profile" style={{color:"white"}}>Profile</a></li>
        </ul>

      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px" }}>
        {children}
      </div>

    </div>
  );
}