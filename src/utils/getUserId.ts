let cachedUserId: string | null = null;

export function getUserIdFromDOM(): string | null {
  if (cachedUserId) return cachedUserId;

  const userField = document.getElementById("hidUserId") as HTMLInputElement | null;
  if (userField && userField.value) {
    cachedUserId = userField.value.replace(/^.*\\/, ""); // limpia dominio interno
    return cachedUserId;
  }

  return null;
}

window.addEventListener("message", (event) => {
  if (event.data?.userId) {
    cachedUserId = event.data.userId.replace(/^.*\\/, "");
    if (cachedUserId !== null) {
      localStorage.setItem("userId", cachedUserId);
    }
  }
});