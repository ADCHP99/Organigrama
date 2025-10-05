// src/utils/getUserId.ts
let cachedUserId: string | null = null;

// 🔹 Limpia el dominio tipo "interno\\achucuyan"
function cleanUserId(raw: string): string {
  return raw?.replace(/^.*\\/, "").trim().toLowerCase();
}

// 🔹 Captura si el valor ya vino desde ASPX (postMessage)
window.addEventListener("message", (event) => {
  if (event.data?.userId) {
    cachedUserId = cleanUserId(event.data.userId);
    localStorage.setItem("userId", cachedUserId);
    console.log("📩 UserId recibido desde ASPX:", cachedUserId);
  }
});

// 🔹 Función para obtener el userId en cualquier parte de React
export function getUserIdFromDOM(): string | null {
  if (cachedUserId) return cachedUserId;

  const fromLocal = localStorage.getItem("userId");
  if (fromLocal) {
    cachedUserId = fromLocal;
    return cachedUserId;
  }

  return "achucuyan";
}
