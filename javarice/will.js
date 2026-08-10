function handlePlayClick() {
    clickCount++;

    const picked = pickMessage();
    if (!picked) return;

    showResultButtons();

    scrambleReveal(
        picked.text,
        scrambleDuration,
        revealDuration,
        t => display.textContent = t
    );
}
startBtn.addEventListener("click", handlePlayClick);

document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "¿Me vas a comprar mi fursuit? ~ Tapia",
        "Bienvenido devuelta ~ Ur10N",
        "Me gusta ser el monito. ~ Tilinasote",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    showResultTextIntro(randomMessage);
});
