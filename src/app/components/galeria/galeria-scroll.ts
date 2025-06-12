export function ativarScrollReveal() {
  const fotos = document.querySelectorAll('.foto');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  fotos.forEach(foto => observer.observe(foto));
}
