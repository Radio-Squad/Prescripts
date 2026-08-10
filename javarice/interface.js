function updateCounters() {
    achievedSpan.textContent = `PASasTE: ${achieved}`;
    failedSpan.textContent = `FallASTe: ${failed}`;
    totalSpan.textContent = `PRECEPTOS: ${total}`;
}

function showPlayButton() {
    buttonContainer.innerHTML = `<button id="startBtn">Siguiente</button>`;
    document.getElementById("startBtn").addEventListener("click", handlePlayClick);
}

function showResultText(text) {
    canResolve = false;
    scrambleReveal(text, 0.3, 0.8, t => display.textContent = t, showPlayButton);
}

function showResultTextIntro(text) {
    scrambleReveal(text, 0.3, 0.8,t => display.textContent = t,);
}

function showResultButtons() {
    canResolve = false;

    buttonContainer.innerHTML = `
        <button id="achievedBtn" disabled>Pase</button>
        <button id="failedBtn" disabled>Falle</button>
    `;

    document.getElementById("achievedBtn").onclick = () => {
        if (!canResolve) return;
        achieved++; total++;
        updateCounters();
        showResultText("_terMinaDO_");
    };

    document.getElementById("failedBtn").onclick = () => {
        if (!canResolve) return;
        failed++; total++;
        updateCounters();
        showResultText("_FallASTe_");
    };
}
function redirect(url, newTab = true) {
    if (newTab) {
        window.open(url, "_blank", "noopener,noreferrer");
    } else {
        window.location.href = url;
    }
}
