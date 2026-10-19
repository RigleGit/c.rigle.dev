(function () {
  const form = document.getElementById('packForm');
  if (!form) return;
  const btn = document.getElementById('packBtn');
  const status = document.getElementById('packStatus');
  const lang = form.dataset.lang === 'en' ? 'en' : 'es';
  const messages = {
    es: { sending: 'Solicitando…', button: 'Recibir el pack', email: 'Introduce un correo válido.', challenge: 'Completa la comprobación antes de enviar.', unavailable: 'El envío no está disponible ahora. Puedes acceder a los recursos de abajo.', failed: 'No se ha podido enviar el pack. Inténtalo de nuevo en unos minutos.' },
    en: { sending: 'Requesting…', button: 'Send me the pack', email: 'Enter a valid email address.', challenge: 'Complete the check before sending.', unavailable: 'Email delivery is unavailable right now. You can use the resources below.', failed: 'We could not send the pack. Please try again in a few minutes.' },
  }[lang];
  const source = document.getElementById('source');
  if (source) {
    const query = new URLSearchParams(window.location.search);
    source.value = query.get('utm_content') || query.get('utm_source') || 'c100_pack';
  }
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    status.textContent = '';
    if (!form.dataset.endpoint || !form.dataset.sitekey) {
      status.textContent = messages.unavailable;
      return;
    }
    const data = new FormData(form);
    const email = (data.get('email') || '').toString().trim();
    const token = (data.get('cf-turnstile-response') || '').toString();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = messages.email;
      return;
    }
    if (!token) {
      status.textContent = messages.challenge;
      return;
    }
    btn.disabled = true;
    btn.textContent = messages.sending;
    try {
      const response = await fetch(form.dataset.endpoint, {
        method: 'POST', credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: (data.get('name') || '').toString().trim(), email,
          packId: 'c100', lang,
          source: (data.get('source') || '').toString().slice(0, 120),
          botcheck: (data.get('botcheck') || '').toString(), turnstileToken: token,
        }),
      });
      const result = await response.json().catch(() => null);
      if (response.ok && result && result.ok === true) {
        window.location.assign(form.dataset.successUrl);
        return;
      }
      status.textContent = messages.failed;
    } catch (_) {
      status.textContent = messages.failed;
    } finally {
      btn.disabled = false;
      btn.textContent = messages.button;
      if (window.turnstile) window.turnstile.reset();
    }
  });
})();
