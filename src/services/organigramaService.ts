import { getUserIdFromDOM } from "../utils/getUserId";

const API_URL = "https://mobileqa.liris.com.ec/delportal/wp-json/delportal/v1";

export async function fetchOrganigramaPersona() {
  const userId = getUserIdFromDOM();
  const params = new URLSearchParams();

  if (userId) params.append("userId", userId);

  const url = `${API_URL}/get_organigrama_persona?${params.toString()}`;
  console.log(" Solicitando organigrama con userId:", userId);

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener organigrama persona");

  const json = await res.json();
  return json?.Organigrama?.Persona || [];
}
