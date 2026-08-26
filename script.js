// --- VARIABLES GLOBALES DU JEU ---
let currentGameMode = 'classic'; // 'classic', 'chrono', 'sudden-death'
let currentQuestionIndex = 0;
let score = 0;
let activeQuestions = [];
let timerInterval = null;
let timeLeft = 60;
let settingsLevel = 'all';
let showRationaleSetting = true;

// --- INITIALISATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Charger les paramètres initiaux depuis le HTML
    const levelSelect = document.getElementById('setting-level');
    if (levelSelect) {
        levelSelect.addEventListener('change', (e) => {
            settingsLevel = e.target.value;
        });
    }

    const rationaleCheck = document.getElementById('setting-rationale');
    if (rationaleCheck) {
        rationaleCheck.addEventListener('change', (e) => {
            showRationaleSetting = e.target.checked;
        });
    }
});

// --- GESTION DES ÉCRANS & PARAMÈTRES ---
function toggleSettings() {
    const panel = document.getElementById('settings-panel');
    const btn = document.getElementById('settings-toggle-btn');
    panel.classList.toggle('hidden');
    if (panel.classList.contains('hidden')) {
        btn.textContent = "⚙️ Paramètres du jeu";
    } else {
        btn.textContent = "✖️ Fermer les paramètres";
    }
}

function showScreen(screenId) {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    
    document.getElementById(screenId).classList.remove('hidden');

    const homeBtn = document.getElementById('home-btn-header');
    const statsBadge = document.getElementById('stats-header');

    if (screenId === 'welcome-screen') {
        homeBtn.classList.add('hidden');
        statsBadge.classList.add('hidden');
        if (timerInterval) clearInterval(timerInterval);
    } else {
        homeBtn.classList.remove('hidden');
        statsBadge.classList.remove('hidden');
    }
}

// --- LANCEMENT D'UN MODE DE JEU ---
function selectMode(mode) {
    currentGameMode = mode;
    score = 0;
    currentQuestionIndex = 0;

    // Filtrer les questions selon le niveau choisi (PSE1 / PSE2 / Tous)
    let filteredQuestions = masterQuestionBank;
    if (settingsLevel === 'PSE1') {
        filteredQuestions = masterQuestionBank.filter(q => q.tags && q.tags.includes('PSE1'));
        if (filteredQuestions.length === 0) filteredQuestions = masterQuestionBank; // Sécurité si pas de tag
    } else if (settingsLevel === 'PSE2') {
        filteredQuestions = masterQuestionBank.filter(q => q.tags && q.tags.includes('PSE2'));
        if (filteredQuestions.length === 0) filteredQuestions = masterQuestionBank;
    }

    // Mélanger les questions de manière aléatoire
    activeQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5);

    // Ajuster selon le mode
    if (mode === 'classic') {
        activeQuestions = activeQuestions.slice(0, 10); // 10 questions pour le mode classique
    } else if (mode === 'chrono') {
        timeLeft = 60;
        document.getElementById('stat-secondary').classList.remove('hidden');
        document.getElementById('timer-val').textContent = timeLeft;
        startChronoTimer();
    } else {
        document.getElementById('stat-secondary').classList.add('hidden');
    }

    document.getElementById('current-score').textContent = score;
    showScreen('quiz-screen');
    loadQuestion();
}

// --- CHARGEMENT D'UNE QUESTION ---
function loadQuestion() {
    if (currentGameMode === 'classic' && currentQuestionIndex >= activeQuestions.length) {
        endGame();
        return;
    }
    
    // Si en mode chrono et qu'on a épuisé la banque, on remélange
    if (currentGameMode === 'chrono' && currentQuestionIndex >= activeQuestions.length) {
        activeQuestions = [...masterQuestionBank].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    }

    // Si en mode mort subite et qu'on épuise la banque, on remélange
    if (currentGameMode === 'sudden-death' && currentQuestionIndex >= activeQuestions.length) {
        activeQuestions = [...masterQuestionBank].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    }

    const q = activeQuestions[currentQuestionIndex];

    // Mettre à jour l'en-tête du quiz
    if (currentGameMode === 'classic') {
        document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1} / ${activeQuestions.length}`;
        const progressPercent = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
        document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    } else {
        document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1}`;
        document.getElementById('progress-bar').style.width = `100%`;
    }

    // Tag principal
    const tagEl = document.getElementById('question-tag');
    if (q.tags && q.tags.length > 0) {
        tagEl.textContent = q.tags[0];
        tagEl.classList.remove('hidden');
    } else {
        tagEl.classList.add('hidden');
    }

    // Texte de la question
    document.getElementById('question-text').textContent = q.question;

    // Cacher la justification et le bouton suivant
    document.getElementById('rationale-container').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');

    // Générer les boutons de réponses (mélangés pour plus de piment)
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const shuffledOptions = [...q.answerOptions].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => selectAnswer(opt, btn, shuffledOptions);
        optionsContainer.appendChild(btn);
    });
}

// --- SÉLECTION D'UNE RÉPONSE ---
function selectAnswer(selectedOption, clickedButton, allOptions) {
    // Désactiver tous les boutons de réponse pour éviter les clics multiples
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(b => b.disabled = true);

    const isCorrect = selectedOption.isCorrect;

    // Colorer les boutons
    optionButtons.forEach(b => {
        // Retrouver l'option correspondante
        const optData = allOptions.find(o => o.text === b.textContent);
        if (optData.isCorrect) {
            b.classList.add('option-correct');
        } else if (b === clickedButton) {
            b.classList.add('option-incorrect');
        } else {
            b.classList.add('option-dimmed');
        }
    });

    // Gérer le score et les modes
    if (isCorrect) {
        score++;
        document.getElementById('current-score').textContent = score;
    }

    // Afficher la justification si activée
    if (showRationaleSetting && selectedOption.rationale) {
        document.getElementById('rationale-text').textContent = selectedOption.rationale;
        document.getElementById('rationale-container').classList.remove('hidden');
    } else if (showRationaleSetting) {
        // S'il n'y a pas de rationale spécifique dans l'option, chercher dans une autre
        const correctOpt = allOptions.find(o => o.isCorrect);
        if (correctOpt && correctOpt.rationale) {
            document.getElementById('rationale-text').textContent = correctOpt.rationale;
            document.getElementById('rationale-container').classList.remove('hidden');
        }
    }

    // Gestion de la fin de partie en Mort Subite
    if (currentGameMode === 'sudden-death' && !isCorrect) {
        setTimeout(() => {
            endGame();
        }, 1500); // Petite pause pour voir la bonne réponse avant de basculer
        return;
    }

    // Afficher le bouton suivant ou enchaîner
    if (currentGameMode === 'chrono') {
        // En chrono, on passe automatiquement après 1,2 seconde pour aller vite
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1200);
    } else {
        // En classique ou mort subite (si bonne réponse), on clique sur "Question suivante"
        document.getElementById('next-btn').classList.remove('hidden');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// --- GESTION DU CHRONO (MODE CONTRE LA MONTRE) ---
function startChronoTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-val').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// --- FIN DE PARTIE ---
function endGame() {
    if (timerInterval) clearInterval(timerInterval);
    showScreen('result-screen');

    document.getElementById('final-score').textContent = score;
    
    const msgEl = document.getElementById('result-message');
    const saveSection = document.getElementById('save-score-section');
    const leaderboardView = document.getElementById('leaderboard-view');

    saveSection.classList.add('hidden');
    leaderboardView.classList.add('hidden');

    if (currentGameMode === 'classic') {
        msgEl.textContent = `Vous avez obtenu ${score} bonnes réponses sur ${activeQuestions.length}.`;
    } else if (currentGameMode === 'chrono') {
        msgEl.textContent = `Temps écoulé ! Vous avez enchaîné ${score} bonnes réponses en 60 secondes.`;
    } else if (currentGameMode === 'sudden-death') {
        msgEl.textContent = `Partie terminée ! Erreur commise. Score final : ${score} bonne(s) réponse(s) d'affilée.`;
        saveSection.classList.remove('hidden');
        leaderboardView.classList.remove('hidden');
        renderLeaderboard();
    }
}

// --- SYSTÈME DE HIGHSCORE / LEADERBOARD (MORT SUBITE) ---
function saveHighScore() {
    const pseudoInput = document.getElementById('player-pseudo');
    const pseudo = pseudoInput.value.trim() || "Secouriste Anonyme";

    let leaderboard = JSON.parse(localStorage.getItem('sdis36_leaderboard')) || [];
    leaderboard.push({ name: pseudo, score: score, date: new Date().toLocaleDateString() });
    
    // Trier du plus grand au plus petit score
    leaderboard.sort((a, b) => b.score - a.score);
    
    // Garder uniquement le Top 10
    leaderboard = leaderboard.slice(0, 10);

    localStorage.setItem('sdis36_leaderboard', JSON.stringify(leaderboard));
    
    pseudoInput.value = '';
    renderLeaderboard();
    document.getElementById('save-score-section').classList.add('hidden');
}

function renderLeaderboard() {
    const tbody = document.getElementById('leaderboard-tbody');
    tbody.innerHTML = '';

    let leaderboard = JSON.parse(localStorage.getItem('sdis36_leaderboard')) || [];

    if (leaderboard.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: #94a3b8;">Aucun score enregistré pour l'instant.</td></tr>`;
        return;
    }

    leaderboard.forEach((entry, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>#${index + 1}</td>
            <td>${escapeHtml(entry.name)}</td>
            <td>${entry.score}</td>
        `;
        tbody.appendChild(tr);
    });
}

function openLeaderboardFromHome() {
    showScreen('result-screen');
    document.getElementById('final-score').textContent = "---";
    document.getElementById('result-message').textContent = "Classement général du mode Mort Subite :";
    document.getElementById('save-score-section').classList.add('hidden');
    document.getElementById('leaderboard-view').classList.remove('hidden');
    renderLeaderboard();
}

function restartGame() {
    if (timerInterval) clearInterval(timerInterval);
    showScreen('welcome-screen');
}

// Utilitaire de sécurité pour les pseudos
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
} // <--- C'est cette accolade fermante qui manquait pour clore escapeHtml !

// Enregistrement du Service Worker pour la PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log("Service Worker enregistré avec succès !"))
      .catch((err) => console.log("Erreur Service Worker :", err));
  });
}