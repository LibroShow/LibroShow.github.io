/* =========================
BATALLA DE VACUNAS RPG
VERSIÓN OPTIMIZADA
========================= */

/* =========================
DATOS
========================= */

const levels = [];

const virusNames = [

"🦠 Sarampión",
"🦠 Poliomielitis",
"🦠 Influenza",
"🦠 COVID-19",
"🦠 Hepatitis B",
"🦠 Tétanos",
"🦠 Rabia",
"🦠 Viruela",
"🦠 Dengue",
"🦠 Zika",
"🦠 Chikungunya",
"🦠 Tuberculosis",
"🦠 Paperas",
"🦠 Rubéola",
"🦠 Cólera",
"🦠 Neumonía",
"🦠 Tosferina",
"🦠 Malaria",
"🦠 VIH",
"🦠 Ébola",
"🦠 Meningitis",
"🦠 Salmonella",
"🦠 Varicela",
"🦠 Rotavirus",
"🦠 Fiebre Amarilla",
"🦠 H1N1",
"🦠 SARS",
"🦠 MERS",
"🦠 Norovirus",
"🦠 Astrovirus",
"🦠 Adenovirus",
"🦠 Hantavirus",
"🦠 Influenza A",
"🦠 Influenza B",
"🦠 Rinovirus",
"🦠 Parvovirus",
"🦠 Herpes",
"🦠 Hepatitis A",
"🦠 Hepatitis C",
"🦠 Hepatitis D",
"🦠 Viruela del Mono",
"🦠 Listeria",
"🦠 Peste Negra",
"🦠 Botulismo",
"🦠 Fiebre Tifoidea",
"🦠 Lepra",
"🦠 Escarlatina",
"🦠 Sífilis",
"🦠 Gonorrea",
"🦠 Encefalitis"

];

for(let i = 0; i < 50; i++){

    levels.push({

        vaccine:"Vacuna Nivel " + (i + 1),

        hero:["💉","🛡️","⚡","🔥","🧬"][i % 5],

        virus:virusNames[i]

    });

}

/* =========================
VARIABLES
========================= */

let currentLevel = 0;

let playerMaxHp = 100;
let enemyMaxHp = 120;

let playerHp = playerMaxHp;
let enemyHp = enemyMaxHp;

let allyCooldown = false;

let gameLocked = false;
let battleFinished = false;

/* =========================
ATAQUES
========================= */

const attacks = [

"⚔️ Inyección",
"✨ Anticuerpo Supremo",
"💥 Refuerzo Inmune",
"🧬 ADN Protector",
"☀️ Vitamina C",
"🛡️ Escudo Celular"

];

/* =========================
ELEMENTOS HTML
========================= */

const player = document.getElementById("player");
const enemy = document.getElementById("enemy");

const playerHealth = document.getElementById("playerHealth");
const enemyHealth = document.getElementById("enemyHealth");

const playerHpText = document.getElementById("playerHpText");
const enemyHpText = document.getElementById("enemyHpText");

const vaccineName = document.getElementById("vaccineName");
const enemyName = document.getElementById("enemyName");

const levelText = document.getElementById("level");
const message = document.getElementById("message");

const buttonsContainer = document.getElementById("buttonsContainer");

/* =========================
INICIAR JUEGO
========================= */

function startGame(){

    document
    .getElementById("menuScreen")
    .classList.add("hidden");

    document
    .getElementById("gameContainer")
    .classList.remove("hidden");

    createButtons();

    loadLevel();

}

/* =========================
BOTONES
========================= */

function createButtons(){

    buttonsContainer.innerHTML = "";

    attacks.forEach((attack,index)=>{

        const btn =
        document.createElement("button");

        btn.textContent = attack;

        btn.onclick =
        ()=>playerAttack(index);

        buttonsContainer.appendChild(btn);

    });

    const allyBtn =
    document.createElement("button");

    allyBtn.textContent =
    "🤝 Llamar Aliado";

    allyBtn.onclick =
    allyAttack;

    buttonsContainer.appendChild(allyBtn);

}

/* =========================
ATAQUE JUGADOR
========================= */

function playerAttack(type){

    if(gameLocked || battleFinished){
        return;
    }

    gameLocked = true;

    player.classList.add("attack-animation");

    setTimeout(()=>{

        player.classList.remove("attack-animation");

        let damage = 0;

        switch(type){

            case 0:
                damage = random(10,20);
            break;

            case 1:
                damage = random(20,35);
            break;

            case 2:
                damage = random(18,30);
            break;

            case 3:
                damage = random(25,40);
            break;

            case 4:

                playerHp += 20;

                if(playerHp > playerMaxHp){
                    playerHp = playerMaxHp;
                }

                message.textContent =
                "☀️ Vitamina C restauró salud.";

            break;

            case 5:

                damage = random(8,18);

                playerHp += 10;

                if(playerHp > playerMaxHp){
                    playerHp = playerMaxHp;
                }

            break;

        }

        enemyHp -= damage;

        if(enemyHp < 0){
            enemyHp = 0;
        }

        createDamage(enemy,damage);

        updateBars();

        if(type !== 4){

            message.textContent =
            attacks[type] +
            " causó " +
            damage +
            " de daño.";

        }

        if(enemyHp <= 0){

            winBattle();

            return;

        }

        setTimeout(()=>{

            enemyTurn();

        },1200);

    },400);

}

/* =========================
ALIADOS
========================= */

function allyAttack(){

    if(gameLocked || battleFinished){
        return;
    }

    if(allyCooldown){

        message.textContent =
        "⏳ El aliado está descansando.";

        return;

    }

    gameLocked = true;

    allyCooldown = true;

    const allyBtn =
    [...buttonsContainer.children]
    .find(btn =>
    btn.textContent.includes("Aliado"));

    allyBtn.disabled = true;

    setTimeout(()=>{

        allyCooldown = false;

        allyBtn.disabled = false;

    },5000);

    const allies = [

    {
        name:"🍵 Té Verde",
        heal:20,
        damage:15
    },

    {
        name:"💊 Analgésico",
        heal:25,
        damage:10
    },

    {
        name:"🥦 Brócoli",
        heal:15,
        damage:20
    },

    {
        name:"🧄 Ajo Protector",
        heal:10,
        damage:25
    },

    {
        name:"🍊 Vitamina C",
        heal:30,
        damage:5
    }

    ];

    const ally =
    allies[random(0,allies.length - 1)];

    playerHp += ally.heal;

    enemyHp -= ally.damage;

    if(playerHp > playerMaxHp){
        playerHp = playerMaxHp;
    }

    if(enemyHp < 0){
        enemyHp = 0;
    }

    createDamage(enemy,ally.damage);

    updateBars();

    message.textContent =
    ally.name +
    " ayudó recuperando " +
    ally.heal +
    " HP y causando " +
    ally.damage +
    " daño.";

    if(enemyHp <= 0){

        winBattle();

        return;

    }

    setTimeout(()=>{

        enemyTurn();

    },1200);

}

/* =========================
TURNO ENEMIGO
========================= */

function enemyTurn(){

    if(battleFinished){
        return;
    }

    enemy.classList.add("enemy-attack");

    setTimeout(()=>{

        enemy.classList.remove("enemy-attack");

        let action =
        random(1,4);

        if(action === 1){

            let damage =
            random(18,30);

            playerHp -= damage;

            createDamage(player,damage);

            message.textContent =
            "🦠 El virus atacó.";

        }

        else if(action === 2){

            let heal =
            random(15,25);

            enemyHp += heal;

            if(enemyHp > enemyMaxHp){
                enemyHp = enemyMaxHp;
            }

            message.textContent =
            "☣️ El virus evolucionó.";

        }

        else if(action === 3){

            let damage =
            random(25,40);

            playerHp -= damage;

            createDamage(player,damage);

            message.textContent =
            "☠️ Ataque crítico.";

        }

        else{

            let damage =
            random(12,22);

            playerHp -= damage;

            enemyHp += 10;

            if(enemyHp > enemyMaxHp){
                enemyHp = enemyMaxHp;
            }

            createDamage(player,damage);

            message.textContent =
            "🧬 El virus absorbió energía.";

        }

        if(playerHp < 0){
            playerHp = 0;
        }

        updateBars();

        if(playerHp <= 0){

            loseBattle();

            return;

        }

        gameLocked = false;

    },700);

}

/* =========================
GANAR
========================= */

function winBattle(){

    battleFinished = true;
    gameLocked = true;

    enemy.classList.add("lose-animation");

    player.classList.add("win-animation");

    message.textContent =
    "🏆 ¡Victoria!";

    setTimeout(()=>{

        showVictoryAlert();

    },1500);

}

/* =========================
PERDER
========================= */

function loseBattle(){

    battleFinished = true;
    gameLocked = true;

    player.classList.add("lose-animation");

    message.textContent =
    "☠️ Has perdido.";

    setTimeout(()=>{

        showLoseAlert();

    },1500);

}

/* =========================
ALERTA GANAR
========================= */

function showVictoryAlert(){

    if(document.querySelector(".alert-box")){
        return;
    }

    const alert =
    document.createElement("div");

    alert.classList.add("alert-box");

    alert.innerHTML = `

    <h2>
    🎉 ¡Felicidades!
    </h2>

    <p>
    Derrotaste a
    ${levels[currentLevel].virus}
    </p>

    <button class="continue-btn"
    id="continueBtn">

    ➡️ Continuar

    </button>

    <button class="home-btn"
    id="homeBtn">

    🏠 Inicio

    </button>

    `;

    document.body.appendChild(alert);

    document
    .getElementById("continueBtn")
    .onclick = nextLevel;

    document
    .getElementById("homeBtn")
    .onclick = goHome;

}

/* =========================
ALERTA PERDER
========================= */

function showLoseAlert(){

    if(document.querySelector(".alert-box")){
        return;
    }

    const alert =
    document.createElement("div");

    alert.classList.add("alert-box");

    alert.innerHTML = `

    <h2>
    💀 Has Perdido
    </h2>

    <p>
    El virus logró vencer.
    </p>

    <button class="home-btn"
    id="restartBtn">

    🔄 Reiniciar

    </button>

    `;

    document.body.appendChild(alert);

    document
    .getElementById("restartBtn")
    .onclick = goHome;

}

/* =========================
SIGUIENTE NIVEL
========================= */

function nextLevel(){

    const alert =
    document.querySelector(".alert-box");

    if(alert){
        alert.remove();
    }

    currentLevel++;

    if(currentLevel >= levels.length){

        alert(
        "🎉 ¡COMPLETASTE LOS 50 NIVELES!"
        );

        location.reload();

        return;

    }

    battleFinished = false;
    gameLocked = false;

    enemy.classList.remove("lose-animation");
    player.classList.remove("win-animation");

    /* VIDA SUBE CADA NIVEL */

    playerMaxHp += 10;

    enemyMaxHp += 15;

    playerHp = playerMaxHp;
    enemyHp = enemyMaxHp;

    loadLevel();

}

/* =========================
IR AL INICIO
========================= */

function goHome(){

    location.reload();

}

/* =========================
CARGAR NIVEL
========================= */

function loadLevel(){

    vaccineName.textContent =
    levels[currentLevel].vaccine;

    enemyName.textContent =
    levels[currentLevel].virus;

    levelText.textContent =
    "Nivel " +
    (currentLevel + 1) +
    " / 50";

    player.textContent =
    levels[currentLevel].hero;

    updateBars();

}

/* =========================
ACTUALIZAR BARRAS
========================= */

function updateBars(){

    playerHealth.style.width =
    (playerHp / playerMaxHp * 100)
    + "%";

    enemyHealth.style.width =
    (enemyHp / enemyMaxHp * 100)
    + "%";

    playerHpText.textContent =
    playerHp +
    " / " +
    playerMaxHp +
    " HP";

    enemyHpText.textContent =
    enemyHp +
    " / " +
    enemyMaxHp +
    " HP";

}

/* =========================
DAÑO FLOTANTE
========================= */

function createDamage(target,damage){

    if(damage <= 0){
        return;
    }

    const text =
    document.createElement("div");

    text.classList.add("damage-text");

    text.textContent =
    "-" + damage;

    const rect =
    target.getBoundingClientRect();

    text.style.left =
    rect.left + 50 + "px";

    text.style.top =
    rect.top + "px";

    document.body.appendChild(text);

    setTimeout(()=>{

        text.remove();

    },1000);

}

/* =========================
RANDOM
========================= */

function random(min,max){

    return Math.floor(
    Math.random() *
    (max - min + 1)
    ) + min;

}
