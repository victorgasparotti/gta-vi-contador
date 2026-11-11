(() => {
  // Mantém a data que já está configurada no contador Python.
  const launch = new Date(2026, 10, 19, 0, 0, 0);

  const fields = {
    days: document.querySelector("#days"),
    hours: document.querySelector("#hours"),
    minutes: document.querySelector("#minutes"),
    seconds: document.querySelector("#seconds"),
  };

  const pad = (value, size = 2) =>
    String(value).padStart(size, "0");

  function updateCountdown() {
    const remaining = launch.getTime() - Date.now();

    if (remaining <= 0) {
      Object.values(fields).forEach((field) => {
        field.textContent = "00";
      });
      return;
    }

    const totalSeconds = Math.floor(remaining / 1000);

    const values = {
      days: pad(Math.floor(totalSeconds / 86400), 3),
      hours: pad(Math.floor((totalSeconds % 86400) / 3600)),
      minutes: pad(Math.floor((totalSeconds % 3600) / 60)),
      seconds: pad(totalSeconds % 60),
    };

    for (const [unit, value] of Object.entries(values)) {
      if (fields[unit].textContent !== value) {
        fields[unit].textContent = value;
        fields[unit].classList.remove("tick");

        // Reinicia a animação quando o número muda.
        void fields[unit].offsetWidth;

        fields[unit].classList.add("tick");
        window.setTimeout(() => {
          fields[unit].classList.remove("tick");
        }, 260);
      }
    }
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();