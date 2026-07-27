(() => {
  const progress = document.querySelector('[data-reading-progress]');
  if (progress) {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progress.style.width = `${Math.min(100, Math.max(0, value))}%`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  }

  document.querySelectorAll('[data-quiz-card]').forEach((card) => {
    const correct = card.dataset.correct;
    const feedback = card.querySelector('[data-feedback]');
    card.addEventListener('change', (event) => {
      if (!(event.target instanceof HTMLInputElement)) return;
      const isCorrect = event.target.value === correct;
      feedback.textContent = isCorrect
        ? 'נכון. הסיווג תואם את עקרונות החוקיות, השקיפות והכוונה.'
        : 'נסו שוב: בדקו האם המידע גלוי, האם הושג כחוק והאם נעשה שימוש בהתחזות או בגישה לא מורשית.';
      feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    });
  });

  document.querySelectorAll('[data-print]').forEach((button) => {
    button.addEventListener('click', () => window.print());
  });
})();
