/* BlitzNest — TR/EN dil geçişi. Tercih yalnız bu tarayıcıda (localStorage) tutulur. */
(function () {
  var d = document.documentElement, KEY = "bn-lang", lang = null;
  try { lang = localStorage.getItem(KEY); } catch (e) {}
  if (lang !== "tr" && lang !== "en") {
    lang = String(navigator.language || "").toLowerCase().indexOf("tr") === 0 ? "tr" : "en";
  }
  function apply(l) {
    d.setAttribute("data-lang", l);
    d.setAttribute("lang", l);
    var t = d.getAttribute("data-title-" + l);
    if (t) document.title = t;
    var b = document.getElementById("lang-btn");
    if (b) {
      b.textContent = l === "tr" ? "EN" : "TR";
      b.setAttribute("aria-label", l === "tr" ? "Switch to English" : "Türkçeye geç");
    }
  }
  apply(lang);
  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);
    var b = document.getElementById("lang-btn");
    if (!b) return;
    b.hidden = false;
    b.addEventListener("click", function () {
      lang = lang === "tr" ? "en" : "tr";
      try { localStorage.setItem(KEY, lang); } catch (e) {}
      apply(lang);
    });
  });
})();
