document.addEventListener("DOMContentLoaded", () => {
  const footerPlaceholder = document.querySelector("#footer-placeholder");

  if (!footerPlaceholder) return;

  fetch("footer/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Footer non trovato");
      }

      return response.text();
    })
    .then((html) => {
      footerPlaceholder.innerHTML = html;
    })
    .catch((error) => {
      console.error("Errore caricamento footer:", error);
    });
});