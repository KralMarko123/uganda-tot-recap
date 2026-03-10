const buttons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach((el) => {
    const value = el.dataset[lang];
    if (value) el.innerHTML = value;
  });

  buttons.forEach((b) =>
    b.classList.toggle("is-active", b.dataset.lang === lang),
  );

  localStorage.setItem("recapLang", lang);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem("recapLang") || "en");
