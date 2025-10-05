import React, { useEffect, useState } from "react";
import OrganigramaPersona from "./components/OrganigramaPersona";
import { fetchOrganigramaPersona } from "./services/organigramaService";

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchOrganigramaPersona().then(setData).catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Organigrama Personas</h1>
      <OrganigramaPersona data={data} />
    </div>
  );
}

export default App;
