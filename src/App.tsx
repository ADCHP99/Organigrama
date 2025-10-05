import React, { useEffect, useState } from "react";
import { fetchOrganigramaPersona } from "./services/organigramaService";
import { getUserIdFromDOM } from "./utils/getUserId";

function App() {
    const userId = getUserIdFromDOM();

  useEffect(() => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchOrganigramaPersona().then(setData).catch(console.error);
    }, []);
  }, []);

 return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Organigrama Personas</h1>
      <p className="mt-2 text-gray-700">
         <strong>Usuario logueado:</strong> {userId || "No recibido"}
      </p>
      {/* aquí puedes cargar tu componente Organigrama */}
    </div>
  );
}

export default App;
