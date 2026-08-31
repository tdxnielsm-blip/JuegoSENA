// --- 40 PREGUNTAS TÉCNICAS Y DE X-MEN ---
const bancoDePreguntas = [
    { q: "¿Qué significa el acrónimo RAM en informática?", o: ["Random Access Memory", "Read Access Machine", "Run All Media", "Rapid Action Memory"], a: 0 },
    { q: "¿Cuál de estos NO es un lenguaje de programación?", o: ["Python", "Java", "Cobra", "HTML"], a: 3 },
    { q: "¿Cuántos bits conforman un byte?", o: ["4", "8", "16", "32"], a: 1 },
    { q: "¿Qué metal recubre el esqueleto indestructible de Wolverine?", o: ["Vibranium", "Adamantium", "Titanio", "Acero Valyrio"], a: 1 },
    { q: "¿Qué significa el acrónimo CPU?", o: ["Central Process Utility", "Computer Personal Unit", "Central Processing Unit", "Control Panel Unit"], a: 2 },
    { q: "¿Cuál es el principal archienemigo histórico y líder ideológico de la Hermandad de Mutantes?", o: ["Dr. Doom", "Magneto", "Thanos", "Loki"], a: 1 },
    { q: "¿Qué dispositivo se considera periférico puramente de 'entrada'?", o: ["Monitor", "Impresora", "Teclado", "Altavoces"], a: 2 },
    { q: "¿Qué componente de hardware se conoce coloquialmente como el 'cerebro' del ordenador?", o: ["El Disco Duro", "La Memoria RAM", "El Microprocesador (CPU)", "La Tarjeta Madre"], a: 2 },
    { q: "¿Qué clasificación de nivel de poder mutante ostenta el Profesor Charles Xavier?", o: ["Clase Beta", "Clase Omega", "Clase Alfa", "Clase Gamma"], a: 2 },
    { q: "¿Cuál es la función fundamental de un Sistema Operativo?", o: ["Proteger contra troyanos", "Gestionar y administrar el hardware y software", "Diseñar páginas web dinámicas", "Ampliar físicamente la memoria RAM"], a: 1 },
    { q: "¿Qué etiqueta estándar de HTML se emplea para incrustar una imagen?", o: ["<image>", "<img>", "<pic>", "<src>"], a: 1 },
    { q: "¿Cuál de las siguientes mutantes posee la habilidad innata de controlar el clima atmosférico?", o: ["Jean Grey", "Storm (Tormenta)", "Rogue (Titania)", "Mystique"], a: 1 },
    { q: "¿Qué significa la sigla SSD en sistemas modernos de almacenamiento?", o: ["Solid State Drive", "Super Speed Disk", "System Storage Device", "Secure Save Drive"], a: 0 },
    { q: "¿Qué lenguaje de hojas de estilo se utiliza estrictamente para dar diseño y formato visual a la web?", o: ["JavaScript", "HTML", "CSS", "PHP"], a: 2 },
    { q: "¿Cómo se define conceptualmente un 'Bucle' (Loop) en la programación?", o: ["Un fallo de sintaxis crítico", "Una secuencia de código que se repite condicionalmente", "Un contenedor de variables globales", "Un protocolo de red cifrado"], a: 1 },
    { q: "¿Cómo se denomina la emblemática instalación holográfica de entrenamiento de los X-Men?", o: ["Sala de Peligro (Danger Room)", "Habitación del Tiempo", "Cerebro", "El Domo de Simulación"], a: 0 },
    { q: "¿Qué puerto de red estándar utiliza por defecto el protocolo web HTTP?", o: ["443", "21", "80", "8080"], a: 2 },
    { q: "En el diseño y gestión de bases de datos relacionales, ¿Qué significa SQL?", o: ["Structured Query Language", "Simple Question List", "System Quality Level", "Standard Query Logic"], a: 0 },
    { q: "¿Cuál es el atajo de teclado universal estándar para 'Copiar' contenido en sistemas Windows?", o: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"], a: 1 },
    { q: "Si una variable informática es de tipo de datos 'Boolean', ¿Qué valores posibles puede almacenar?", o: ["Cualquier número entero", "Cualquier cadena de texto", "Exclusivamente Verdadero o Falso", "Valores decimales de precisión"], a: 2 },
    { q: "¿Qué protocolo de seguridad se encarga de cifrar las conexiones web actuales (HTTPS)?", o: ["SSL / TLS", "FTP", "SMTP", "SSH"], a: 0 },
    { q: "¿Cómo se llama el mutante de piel azul capaz de adoptar la forma física de cualquier persona?", o: ["Beast", "Nightcrawler", "Mystique", "Colossus"], a: 2 },
    { q: "¿Qué estructura de datos funciona bajo el principio LIFO (Last In, First Out)?", o: ["Cola (Queue)", "Pila (Stack)", "Árbol Binario", "Tabla Hash"], a: 1 },
    { q: "¿Cuál es el verdadero nombre de nacimiento del mutante conocido como Cíclope (Cyclops)?", o: ["Logan Howlett", "Scott Summers", "Charles Xavier", "Hank McCoy"], a: 1 },
    { q: "¿Qué comando de terminal en sistemas UNIX/Linux se utiliza para listar archivos de un directorio?", o: ["dir", "ls", "show", "cat"], a: 1 },
    { q: "¿Qué mutante posee el poder psiónico de transformarse en Fénix?", o: ["Jean Grey", "Rogue", "Emma Frost", "Jubilee"], a: 0 },
    { q: "¿Qué significa GPU en la arquitectura de un equipo informático?", o: ["Graphical Processing Unit", "General Power Utility", "Global Processor Utility", "Graphic Peripheral Unit"], a: 0 },
    { q: "¿Qué lenguaje se ejecuta directamente en el navegador del cliente para crear interactividad web?", o: ["Python", "C++", "JavaScript", "SQL"], a: 2 },
    { q: "¿Cómo se llama el mutante de origen ruso que puede convertir su piel en acero orgánico?", o: ["Nightcrawler", "Colossus", "Iceman", "Beast"], a: 1 },
    { q: "¿Qué representa el número 10 en sistema decimal convertido a sistema binario?", o: ["1010", "1100", "1001", "1111"], a: 0 },
    { q: "¿Qué entidad científica creó originalmente a los Centinelas para cazar mutantes?", o: ["Dr. Bolivar Trask", "Mr. Sinister", "Stryker", "Forge"], a: 0 },
    { q: "¿Qué significa el acrónimo API en desarrollo de software?", o: ["Application Programming Interface", "Advanced Program Integration", "Automated Process Index", "Application Protocol Instruction"], a: 0 },
    { q: "¿Qué mutante posee la capacidad de teletransportarse dejando una estela de azufre y humo?", o: ["Nightcrawler", "Blink", "Magik", "Bishop"], a: 0 },
    { q: "¿Cuál es el propósito principal de utilizar Git en programación?", o: ["Diseñar interfaces gráficas", "Control de versiones de código fuente", "Compilar programas ejecutables", "Optimizar memoria RAM"], a: 1 },
    { q: "¿Qué mutante telepática de piel de diamante rivaliza con Jean Grey en los X-Men?", o: ["Emma Frost", "Psylocke", "Shadowcat", "Rogue"], a: 0 },
    { q: "¿Qué significa DNS en la infraestructura de internet?", o: ["Domain Name System", "Digital Network Security", "Data Node Source", "Dynamic Name Server"], a: 0 },
    { q: "¿Qué mutante tiene la capacidad de atravesar paredes y materia sólida (intangibilidad)?", o: ["Shadowcat (Kitty Pryde)", "Nightcrawler", "Rogue", "Blink"], a: 0 },
    { q: "¿Qué tipo de estructura de datos almacena elementos en pares de 'Clave - Valor'?", o: ["Arreglo (Array)", "Diccionario / Mapa (Hash Map)", "Pila (Stack)", "Cola (Queue)"], a: 1 },
    { q: "¿Cómo se llama el gigantesco Centinela supremo maestro de los cazadores de mutantes?", o: ["Master Mold (Molde Maestro)", "Nimrod", "Bastion", "Omega Sentinel"], a: 0 },
    { q: "¿Cuál es el puerto de red predeterminado que utiliza el protocolo seguro SSH?", o: ["80", "22", "443", "3306"], a: 1 }
];

const levels = [
    { n: "CENTINELA MK-I", hp: 300, dmg: [20, 35] },
    { n: "MASTER MOLD", hp: 500, dmg: [35, 50] },
    { n: "OMEGA SENTINEL", hp: 700, dmg: [45, 65] },
    { n: "NIMROD", hp: 1000, dmg: [60, 90] }
];

const MAX_HP = 300;
let p = { hp: MAX_HP, def: false, combo: 0 };
let lvl = 0; let boss = null; let turn = true; let askedQuestions = []; let currentQuestion = null;

function updateUI() {
    document.getElementById('p-hp').style.width = `${Math.max(0, p.hp/MAX_HP)*100}%`;
    document.getElementById('e-hp').style.width = `${Math.max(0, boss.hp/boss.mhp)*100}%`;
    document.getElementById('combo-txt').innerText = p.combo > 1 ? `COMBO x${p.combo}` : `NIVEL ${lvl + 1}`;
}

function setBtns(active) { document.querySelectorAll('.btn').forEach(b => b.disabled = !active); }

function cameraFx(type) {
    const c = document.getElementById('cam');
    c.classList.add(type);
    setTimeout(() => c.classList.remove(type), type === 'shake' ? 400 : 800);
}

function createComicText(text, targetId) {
    const el = document.getElementById(targetId);
    const rect = el.getBoundingClientRect();
    const txt = document.createElement('div');
    txt.className = 'comic-text';
    txt.innerText = text;
    txt.style.left = `${rect.left + rect.width/2 - 60}px`;
    txt.style.top = `${rect.top + rect.height/2 - 60}px`;
    document.body.appendChild(txt);
    setTimeout(() => txt.remove(), 600);
}

function initLevel() {
    if(lvl >= levels.length) {
        alert("¡SALA DE PELIGRO COMPLETADA CON ÉXITO ABSOLUTO!");
        location.reload(); return;
    }
    boss = JSON.parse(JSON.stringify(levels[lvl])); boss.mhp = boss.hp;
    document.getElementById('e-name').innerText = boss.n;
    p.hp = MAX_HP; p.combo = 0; turn = true;
    updateUI(); setBtns(true);
}

function action(type) {
    if(!turn) return;
    turn = false; setBtns(false);
    
    if(type === 'def') {
        p.def = true; p.combo = 0; updateUI();
        setTimeout(bossTurn, 500);
    } 
    else if (type === 'atk') {
        p.def = false;
        const p1 = document.getElementById('p1');
        p1.classList.add('atk-slash');
        
        setTimeout(() => {
            cameraFx('shake');
            createComicText("¡SLASH!", 'p2');
            
            let dmg = 25 + (p.combo * 6);
            boss.hp -= dmg; p.combo++;
            
            document.getElementById('p2').classList.add('hit');
            updateUI();

            setTimeout(() => {
                p1.classList.remove('atk-slash');
                document.getElementById('p2').classList.remove('hit');
                setTimeout(checkState, 400);
            }, 400);
        }, 120);
    }
}

function bossTurn() {
    cameraFx('shake');
    createComicText("¡KRAK!", 'p1');
    
    let d = Math.floor(Math.random() * (boss.dmg[1] - boss.dmg[0])) + boss.dmg[0];
    if(p.def) d = Math.floor(d * 0.2); 
    
    p.hp -= d;
    document.getElementById('p1').classList.add('hit');
    updateUI();

    setTimeout(() => {
        document.getElementById('p1').classList.remove('hit');
        setTimeout(() => { turn = true; checkState(); }, 400);
    }, 300);
}

function checkState() {
    if(boss.hp <= 0) {
        setTimeout(() => { lvl++; initLevel(); }, 1000);
    } else if (p.hp <= 0) {
        alert("SISTEMA CRÍTICO. HAS SIDO DERROTADO.");
        location.reload();
    } else {
        if(!turn) setTimeout(bossTurn, 500);
        else setBtns(true);
    }
}

function openTrivia() {
    if(!turn) return;
    
    let pDisp = bancoDePreguntas.filter(pq => !askedQuestions.includes(pq.q));
    if(pDisp.length === 0) {
        askedQuestions = []; pDisp = bancoDePreguntas;
    }

    const rIdx = Math.floor(Math.random() * pDisp.length);
    currentQuestion = pDisp[rIdx];
    askedQuestions.push(currentQuestion.q);

    document.getElementById('m-q').innerText = currentQuestion.q;
    const b = document.getElementById('m-opts'); b.innerHTML = '';
    
    currentQuestion.o.forEach((op, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt'; btn.innerText = op;
        btn.onclick = () => solveTrivia(i);
        b.appendChild(btn);
    });
    
    document.getElementById('modal').classList.add('active');
}

function solveTrivia(sel) {
    document.getElementById('modal').classList.remove('active');
    turn = false; setBtns(false); p.def = false;

    if(sel === currentQuestion.a) {
        cameraFx('zoom-in');
        document.body.style.filter = "saturate(3) contrast(1.4)";
        
        setTimeout(() => {
            document.getElementById('p1').classList.add('atk-slash');
            cameraFx('shake');
            createComicText("¡MEGA TAJO!", 'p2');
            
            boss.hp -= 160; p.combo += 3;
            document.getElementById('p2').classList.add('hit');
            updateUI();
            
            setTimeout(() => {
                document.body.style.filter = "none";
                document.getElementById('p1').classList.remove('atk-slash');
                document.getElementById('p2').classList.remove('hit');
                setTimeout(checkState, 600);
            }, 500);
        }, 400);
    } else {
        p.hp -= 40; p.combo = 0;
        cameraFx('shake'); 
        createComicText("¡ERROR!", 'p1');
        document.getElementById('p1').classList.add('hit');
        updateUI();
        
        setTimeout(() => {
            document.getElementById('p1').classList.remove('hit');
            setTimeout(bossTurn, 500);
        }, 500);
    }
}

initLevel();
