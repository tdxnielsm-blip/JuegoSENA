// ==========================================
// 1. BASE DE DATOS DE VILLANOS (Niveles)
// ==========================================
const nivelesGame = [
    {
        nivel: 1,
        nombre: "CENTINELA MK-I",
        hpMaximo: 100,
        colorUi: "#ff007f", // Magenta
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 680" preserveAspectRatio="xMidYMax meet">
            <defs>
                <linearGradient id="sentinelArmor" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#7a00cc"/><stop offset="50%" stop-color="#4d0080"/><stop offset="100%" stop-color="#2a0044"/>
                </linearGradient>
                <linearGradient id="sentinelMag" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ff1493"/><stop offset="100%" stop-color="#99004d"/>
                </linearGradient>
            </defs>
            <g class="boss-realistic">
                <!-- Piernas Y Pies -->
                <path d="M 170 560 L 130 670 L 210 670 L 220 560 Z" fill="url(#sentinelArmor)"/>
                <path d="M 280 560 L 320 670 L 240 670 L 230 560 Z" fill="url(#sentinelArmor)"/>
                <path d="M 130 670 L 110 680 L 210 680 L 210 670 Z" fill="#222"/>
                <path d="M 320 670 L 340 680 L 240 680 L 240 670 Z" fill="#222"/>
                <path d="M 140 480 L 310 480 L 290 570 L 160 570 Z" fill="url(#sentinelMag)"/>
                <path d="M 200 480 L 250 480 L 240 550 L 210 550 Z" fill="#111"/>
                <!-- Torso -->
                <path d="M 90 280 L 360 280 L 330 480 L 120 480 Z" fill="url(#sentinelArmor)"/>
                <circle cx="90" cy="280" r="65" fill="url(#sentinelMag)"/>
                <circle cx="360" cy="280" r="65" fill="url(#sentinelMag)"/>
                <circle cx="90" cy="280" r="45" fill="url(#sentinelArmor)"/>
                <circle cx="360" cy="280" r="45" fill="url(#sentinelArmor)"/>
                <path d="M 140 300 L 310 300 L 280 410 L 170 410 Z" fill="url(#sentinelMag)"/>
                <circle cx="225" cy="355" r="32" fill="var(--x-yellow)" stroke="#111" stroke-width="4"/>
                <circle cx="225" cy="355" r="15" fill="#fff" opacity="0.8"/>
                <rect x="185" y="220" width="80" height="60" fill="#151515" rx="5"/>
                <!-- Cabeza -->
                <path d="M 165 70 L 285 70 L 310 220 L 140 220 Z" fill="url(#sentinelArmor)"/>
                <path d="M 165 70 L 145 20 L 195 70 Z" fill="url(#sentinelMag)"/>
                <path d="M 285 70 L 305 20 L 255 70 Z" fill="url(#sentinelMag)"/>
                <path d="M 185 110 L 265 110 L 255 205 L 195 205 Z" fill="url(#sentinelMag)"/>
                <polygon points="195,135 225,142 210,152" fill="var(--x-yellow)" filter="drop-shadow(0 0 8px #ffcc00)"/>
                <polygon points="255,135 225,142 240,152" fill="var(--x-yellow)" filter="drop-shadow(0 0 8px #ffcc00)"/>
            </g>
        </svg>`
    },
    {
        nivel: 2,
        nombre: "DIENTES DE SABLE",
        hpMaximo: 150,
        colorUi: "#ff6600", // Naranja
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 680" preserveAspectRatio="xMidYMax meet">
            <g class="boss-realistic" transform="scale(0.95) translate(10, 30)">
                <path d="M 180 500 L 150 680 L 220 680 L 230 500 Z" fill="#4a2e15"/>
                <path d="M 270 500 L 300 680 L 230 680 L 220 500 Z" fill="#4a2e15"/>
                <path d="M 130 250 L 320 250 L 280 500 L 170 500 Z" fill="#e65c00"/>
                <path d="M 190 250 L 260 250 L 240 500 L 210 500 Z" fill="#4a2e15"/>
                <path d="M 100 230 Q 225 320 350 230 Q 300 150 225 180 Q 150 150 100 230 Z" fill="#f2e3c6"/>
                <path d="M 130 250 L 50 400 L 100 420 Z" fill="#e65c00"/>
                <path d="M 320 250 L 400 400 L 350 420 Z" fill="#e65c00"/>
                <path d="M 30 400 L 10 480 M 50 410 L 40 490 M 70 420 L 70 500" stroke="#ddd" stroke-width="6" stroke-linecap="round"/>
                <path d="M 420 400 L 440 480 M 400 410 L 410 490 M 380 420 L 380 500" stroke="#ddd" stroke-width="6" stroke-linecap="round"/>
                <circle cx="225" cy="140" r="45" fill="#f0c0a0"/>
                <polygon points="205,130 215,135 205,140" fill="#000"/>
                <polygon points="245,130 235,135 245,140" fill="#000"/>
                <path d="M 210 160 Q 225 150 240 160" stroke="#000" stroke-width="4" fill="none"/>
            </g>
        </svg>`
    },
    {
        nivel: 3,
        nombre: "MAGNETO",
        hpMaximo: 250,
        colorUi: "#cc0000", // Rojo oscuro
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 680" preserveAspectRatio="xMidYMax meet">
            <g class="boss-realistic" style="animation: breatheBoss 4s ease-in-out infinite alternate;">
                <path d="M 150 150 Q 50 400 100 650 L 350 650 Q 400 400 300 150 Z" fill="#660099"/>
                <path d="M 190 450 L 170 600 L 210 600 L 220 450 Z" fill="#cc0000"/>
                <path d="M 260 450 L 280 600 L 240 600 L 230 450 Z" fill="#cc0000"/>
                <path d="M 150 220 L 300 220 L 270 450 L 180 450 Z" fill="#cc0000"/>
                <path d="M 180 220 L 270 220 L 250 450 L 200 450 Z" fill="#800000"/>
                <path d="M 150 250 L 50 150 L 70 130 Z" fill="#cc0000"/>
                <path d="M 300 250 L 400 150 L 380 130 Z" fill="#cc0000"/>
                <circle cx="50" cy="130" r="15" fill="#660099"/>
                <circle cx="400" cy="130" r="15" fill="#660099"/>
                <path d="M 175 180 L 175 100 Q 225 50 275 100 L 275 180 Q 225 150 175 180 Z" fill="#cc0000"/>
                <path d="M 190 100 Q 225 80 260 100 L 250 150 Q 225 130 200 150 Z" fill="#660099"/>
                <polygon points="195,160 255,160 225,190" fill="#f0c0a0"/>
            </g>
        </svg>`
    }
];

// ==========================================
// 2. BASE DE DATOS DE PREGUNTAS (Licenciamiento de Software)
// ==========================================
const dbPreguntas = {
    1: [ // Nivel 1: Conceptos Básicos
        { q: "¿Qué tipo de licencia permite ver, modificar y distribuir libremente el código fuente?", opts: ["Freeware", "Shareware", "Open Source", "Propietario"], ans: 2 },
        { q: "¿Qué significan las siglas EULA en el licenciamiento?", opts: ["End-User License Agreement", "Enterprise Unified License API", "External User Legal Action", "Electronic Usage License App"], ans: 0 },
        { q: "En el software 'Freeware' (gratuito), ¿tienes derecho legal a modificar su código fuente?", opts: ["Sí, siempre", "No, normalmente es código cerrado", "Solo si pagas un extra", "Sí, pero no puedes venderlo"], ans: 1 }
    ],
    2: [ // Nivel 2: Licencias Específicas
        { q: "¿Cuál de estas es una licencia de tipo 'Copyleft' estricta?", opts: ["Licencia MIT", "Apache 2.0", "GNU GPL", "BSD de 2 cláusulas"], ans: 2 },
        { q: "Bajo la licencia MIT, ¿qué condición principal es obligatoria al distribuir el software?", opts: ["Abrir tu propio código", "Pagar regalías", "Incluir el aviso de copyright y la licencia original", "Prohibir su uso comercial"], ans: 2 },
        { q: "¿Qué modelo de licenciamiento y distribución ofrece el software alojado en la nube bajo suscripción?", opts: ["SaaS (Software as a Service)", "Licencia Perpetua", "Copyleft", "FOSS"], ans: 0 }
    ],
    3: [ // Nivel 3: Casos Avanzados y Compatibilidad
        { q: "¿Qué sucede si integras directamente una librería con licencia GPL en tu proyecto cerrado?", opts: ["Nada, es legal", "Debes pagar al creador", "Tu proyecto entero está obligado a usar la licencia GPL", "Solo debes citar al autor en el 'Acerca de'"], ans: 2 },
        { q: "A diferencia de la MIT, ¿qué protección legal clave incluye explícitamente la licencia Apache 2.0?", opts: ["Prohibición de uso militar", "Concesión de derechos de patentes", "Obligación de cambiar el nombre", "Protección contra ingeniería inversa"], ans: 1 },
        { q: "¿Qué variante de las licencias Creative Commons prohíbe explícitamente el uso comercial?", opts: ["CC BY", "CC BY-SA", "CC BY-NC", "CC0 (Dominio Público)"], ans: 2 }
    ]
};

// ==========================================
// 3. VARIABLES DE ESTADO Y REFERENCIAS
// ==========================================
let nivelActual = 1;
let pMaxHp = 100;
let pCurHp = 100;
let eMaxHp = 100;
let eCurHp = 100;

const p1El = document.getElementById('p1');
const p2El = document.getElementById('p2'); 
const eHpBg = document.getElementById('e-hp-bg');
const eHpFill = document.getElementById('e-hp');
const pHpBg = document.getElementById('p-hp-bg');
const pHpFill = document.getElementById('p-hp');
const eNameText = document.getElementById('e-name');
const comboTxt = document.getElementById('combo-txt');
const announcer = document.getElementById('fight-announcer');
const modal = document.getElementById('modal');
const btnAtk = document.getElementById('btn-atk');
const btnDef = document.getElementById('btn-def');
const btnUlt = document.getElementById('btn-ult');

// ==========================================
// 4. LÓGICA PRINCIPAL (Carga y Combate)
// ==========================================

document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('intro-screen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('intro-screen').style.display = 'none';
        iniciarNivel(nivelActual);
    }, 300);
});

function iniciarNivel(nivel) {
    const dataNivel = nivelesGame[nivel - 1]; 
    
    eMaxHp = dataNivel.hpMaximo;
    eCurHp = dataNivel.hpMaximo;
    pCurHp = pMaxHp;
    updateHP('p');
    
    eNameText.innerText = dataNivel.nombre;
    eNameText.style.color = dataNivel.colorUi;
    comboTxt.innerText = `NIVEL ${nivel}`;
    p2El.innerHTML = dataNivel.svg; 
    updateHP('e');

    announcer.innerText = `NIVEL ${nivel}: ¡FIGHT!`;
    announcer.classList.remove('hidden');
    announcer.classList.add('fight-pop');
    
    setTimeout(() => {
        announcer.classList.remove('fight-pop');
        announcer.classList.add('hidden');
        habilitarBotones(true);
    }, 1500);
}

function updateHP(target) {
    if (target === 'e') {
        const pct = Math.max(0, (eCurHp / eMaxHp) * 100);
        eHpFill.style.width = pct + '%';
        setTimeout(() => eHpBg.style.width = pct + '%', 200);
    } else {
        const pct = Math.max(0, (pCurHp / pMaxHp) * 100);
        pHpFill.style.width = pct + '%';
        setTimeout(() => pHpBg.style.width = pct + '%', 200);
    }
}

function habilitarBotones(estado) {
    btnAtk.disabled = !estado;
    btnUlt.disabled = !estado;
}

function action(tipo) {
    if (tipo === 'atk') {
        habilitarBotones(false);
        p1El.classList.add('atk-slash');
        document.getElementById('cam').classList.add('zoom-in');
        
        setTimeout(() => {
            p2El.classList.add('hit');
            document.getElementById('cam').classList.add('shake');
            
            eCurHp -= Math.floor(Math.random() * 10) + 10;
            updateHP('e');
            verificarVictoria();

            setTimeout(() => {
                p1El.classList.remove('atk-slash');
                p2El.classList.remove('hit');
                document.getElementById('cam').classList.remove('shake', 'zoom-in');
                
                if(eCurHp > 0) contraataqueJefe();
            }, 400);
        }, 100);
    }
}

function contraataqueJefe() {
    setTimeout(() => {
        p1El.classList.add('hit');
        document.getElementById('cam').classList.add('shake');
        
        const danioJefe = (Math.floor(Math.random() * 10) + 5) * nivelActual;
        pCurHp -= danioJefe;
        updateHP('p');

        setTimeout(() => {
            p1El.classList.remove('hit');
            document.getElementById('cam').classList.remove('shake');
            
            if(pCurHp <= 0) {
                alert("¡HAS SIDO DERROTADO! Recarga la página para intentarlo de nuevo.");
            } else {
                habilitarBotones(true);
            }
        }, 300);
    }, 500);
}

// ==========================================
// 5. SISTEMA CEREBRO (Trivia de Licencias)
// ==========================================
function openTrivia() {
    const banco = dbPreguntas[nivelActual] || dbPreguntas[1]; 
    const randObj = banco[Math.floor(Math.random() * banco.length)];
    
    document.getElementById('m-q').innerText = randObj.q;
    const optsDiv = document.getElementById('m-opts');
    optsDiv.innerHTML = '';
    
    randObj.opts.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'opt';
        btn.innerText = opt;
        btn.onclick = () => resolverTrivia(idx === randObj.ans);
        optsDiv.appendChild(btn);
    });
    
    modal.classList.add('active');
}

function resolverTrivia(correcto) {
    modal.classList.remove('active');
    if (correcto) {
        document.getElementById('cam').classList.add('zoom-in');
        p2El.classList.add('hit');
        
        const comicText = document.createElement('div');
        comicText.className = 'comic-text';
        comicText.innerText = '¡CRÍTICO!';
        comicText.style.top = '30%';
        comicText.style.right = '20%';
        document.getElementById('cam').appendChild(comicText);
        
        eCurHp -= 50 * nivelActual; 
        updateHP('e');
        
        setTimeout(() => {
            comicText.remove();
            p2El.classList.remove('hit');
            document.getElementById('cam').classList.remove('zoom-in');
            verificarVictoria();
            if(eCurHp > 0) habilitarBotones(true);
        }, 1000);

    } else {
        alert("¡Cerebro rechaza la respuesta! Recibes daño por fallo de licencia.");
        pCurHp -= 20 * nivelActual;
        updateHP('p');
        if(pCurHp <= 0) alert("¡HAS SIDO DERROTADO! Recarga la página.");
    }
}

// ==========================================
// 6. GESTIÓN DE PROGRESIÓN (Niveles)
// ==========================================
function verificarVictoria() {
    if (eCurHp <= 0) {
        habilitarBotones(false);
        eCurHp = 0;
        
        setTimeout(() => {
            if (nivelActual < nivelesGame.length) {
                nivelActual++;
                alert(`¡VILLANO DERROTADO! Preparando el Nivel ${nivelActual}...`);
                iniciarNivel(nivelActual);
            } else {
                announcer.innerText = `¡SALA DE PELIGRO SUPERADA!`;
                announcer.style.fontSize = '3rem';
                announcer.classList.remove('hidden');
                announcer.classList.add('fight-pop');
                p2El.style.display = 'none'; 
            }
        }, 1000);
    }
}
