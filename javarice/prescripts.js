//HEY YOU FOUND THE PRESCRIPTS
//DON'T BE ADDING PRESCRIPTS OR I WILL SEND THE WILL OF THE CITY
//ON YOU ASS
// <!-- ⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⣿⣿⣆⠄⠄⠄
// ⠄⠄⣼⢀⣿⣿⣿⣿⣏⡏⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⡆⠄⠄
// ⠄⠄⡟⣼⣿⣿⣿⣿⣿⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⠄⠄
// ⠄⢰⠃⣿⣿⠿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠙⠿⣿⣿⣿⣿⣿⠄⢿⣿⣿⣿⡄⠄
// ⠄⢸⢠⣿⣿⣧⡙⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⡇⠸⣿⡿⣸⡇⠄
// ⠄⠈⡆⣿⣿⣿⣿⣦⡙⠳⠄⠄⠄⠄⠄⠄⢀⣠⣤⣀⣈⠙⠃⠄⠿⢇⣿⡇⠄
// ⠄⠄⡇⢿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣠⣶⣿⣿⣿⣿⣿⣿⣷⣆⡀⣼⣿⡇⠄
// ⠄⠄⢹⡘⣿⣿⣿⢿⣷⡀⠄⢀⣴⣾⣟⠉⠉⠉⠉⣽⣿⣿⣿⣿⠇⢹⣿⠃⠄
// ⠄⠄⠄⢷⡘⢿⣿⣎⢻⣷⠰⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⠟⢫⡾⢸⡟⠄.
// ⠄⠄⠄⠄⠻⣦⡙⠿⣧⠙⢷⠙⠻⠿⢿⡿⠿⠿⠛⠋⠉⠄⠂⠘⠁⠞⠄⠄⠄
// ⠄⠄⠄⠄⠄⠈⠙⠑⣠⣤⣴⡖⠄⠿⣋⣉⣉⡁⠄⢾⣦⠄⠄⠄⠄⠄⠄⠄⠄  -->
const messages = [
  // COMUNES
  { text: "EN ROBLOX, ENTRA A UN JUEGO Y NO TE MUEVAS DURANTE 2 MINUTOS", weight: 40, minCount: 0, amounts: 3 },
  { text: "EN CUALQUIER JUEGO, GANA UNA PARTIDA USANDO SOLO EL PERSONAJE MÁS DÉBIL", weight: 40, minCount: 0, amounts: 3 },
  { text: "EN ROBLOX, SALUDA A 5 PERSONAS DIFERENTES SIN DECIR NADA MÁS", weight: 45, minCount: 0, amounts: 3 },
  { text: "JUEGA UNA PARTIDA COMPLETA SIN USAR EL BOTÓN DE SALTAR", weight: 40, minCount: 0, amounts: 3 },
  { text: "EN UN JUEGO DE DISPAROS, NO DISPARES DURANTE LOS PRIMEROS 30 SEGUNDOS", weight: 35, minCount: 0, amounts: 3 },
  { text: "EN ROBLOX, COMPRA EL OBJETO MÁS INÚTIL QUE ENCUENTRES EN LA TIENDA", weight: 35, minCount: 0, amounts: 2 },
  { text: "JUEGA UNA PARTIDA ENTERA CAMINANDO HACIA ATRÁS", weight: 40, minCount: 0, amounts: 3 },
  { text: "EN CUALQUIER JUEGO, MUERE A PROPÓSITO EN LOS PRIMEROS 10 SEGUNDOS", weight: 35, minCount: 0, amounts: 3 },
  { text: "EN ROBLOX, ENTRA A UN SERVIDOR Y DI SOLO 'LA VOLUNTAD DE LA CIUDAD LO EXIGE'", weight: 40, minCount: 0, amounts: 2 },
  { text: "JUEGA SIN USAR NINGÚN OBJETO O HABILIDAD ESPECIAL DURANTE TODA LA PARTIDA", weight: 40, minCount: 0, amounts: 3 },

  // POCO COMUNES
  { text: "EN ROBLOX, HAZ AMIGOS CON ALGUIEN QUE TENGA UN AVATAR COMPLETAMENTE DIFERENTE AL TUYO", weight: 25, minCount: 2, amounts: 3 },
  { text: "EN UN JUEGO DE SUPERVIVENCIA, SOBREVIVE 5 MINUTOS SIN RECOGER NADA", weight: 25, minCount: 3, amounts: 2 },
  { text: "EN CUALQUIER JUEGO, GANA SIN MIRAR LA BARRA DE VIDA", weight: 20, minCount: 3, amounts: 2 },
  { text: "EN ROBLOX, ENTRA A UN JUEGO DE HORROR Y NO CORRAS EN NINGÚN MOMENTO", weight: 20, minCount: 3, amounts: 2 },
  { text: "JUEGA UNA PARTIDA COMPLETA USANDO SOLO EL CHAT PARA COMUNICARTE", weight: 25, minCount: 2, amounts: 3 },
  { text: "EN UN JUEGO DE CARRERAS, TERMINA EN ÚLTIMO LUGAR A PROPÓSITO", weight: 20, minCount: 3, amounts: 2 },
  { text: "EN ROBLOX, CONSTRUYE ALGO Y DESTRUYELO INMEDIATAMENTE DESPUÉS", weight: 25, minCount: 2, amounts: 3 },
  { text: "JUEGA SIN USAR EL MOUSE DURANTE 1 MINUTO COMPLETO", weight: 15, minCount: 4, amounts: 2 },
  { text: "EN CUALQUIER JUEGO, DEJA QUE TE MATEN 3 VECES SEGUIDAS SIN RESISTIRTE", weight: 20, minCount: 3, amounts: 2 },
  { text: "EN ROBLOX, ENTRA A UN JUEGO Y SOLO BAILA DURANTE TODO EL TIEMPO QUE ESTÉS DENTRO", weight: 20, minCount: 3, amounts: 2 },

  // RAROS
  { text: "EN UN JUEGO MULTIJUGADOR, AYUDA AL EQUIPO CONTRARIO HASTA QUE TE ECHEN", weight: 10, minCount: 5, amounts: 2 },
  { text: "EN ROBLOX, ENCUENTRA A ALGUIEN Y SÍGUELO EN SILENCIO DURANTE 3 MINUTOS", weight: 12, minCount: 5, amounts: 2 },
  { text: "JUEGA UNA PARTIDA ENTERA SIN RECARGAR NI UNA SOLA VEZ", weight: 10, minCount: 6, amounts: 1 },
  { text: "EN UN JUEGO DE TERROR, ENCIENDE TODAS LAS LUCES Y QUÉDATE QUIETO HASTA QUE TE ENCUENTREN", weight: 10, minCount: 5, amounts: 2 },
  { text: "EN ROBLOX, GASTA TODO TU DINERO EN COSAS QUE NO NECESITAS", weight: 8, minCount: 6, amounts: 1 },
  { text: "JUEGA SIN AURICULARES Y CON EL VOLUMEN AL MÁXIMO DURANTE TODA LA PARTIDA", weight: 12, minCount: 5, amounts: 2 },
  { text: "EN CUALQUIER JUEGO, GANA UNA PARTIDA USANDO SOLO ATAQUES BÁSICOS", weight: 15, minCount: 4, amounts: 2 },
  { text: "EN ROBLOX, ENTRA A UN JUEGO DE ROLEPLAY Y HABLA SOLO EN MAYÚSCULAS", weight: 10, minCount: 5, amounts: 2 },
  { text: "DEJA QUE TE DERROTEN SIN USAR NINGUNA HABILIDAD DE DEFENSA", weight: 10, minCount: 6, amounts: 1 },
  { text: "EN UN JUEGO DE ESTRATEGIA, HAZ EL MOVIMIENTO MÁS ESTÚPIDO POSIBLE A PROPÓSITO", weight: 12, minCount: 5, amounts: 2 },

  // MUY RAROS / ABSURDOS
  { text: "EN ROBLOX, ENTRA A UN SERVIDOR Y DECLARA QUE ERES UN MENSAJERO DEL ÍNDICE", weight: 5, minCount: 4, amounts: 2 },
  { text: "JUEGA UNA PARTIDA COMPLETA CON LOS OJOS CERRADOS DESPUÉS DE ELEGIR PERSONAJE", weight: 5, minCount: 6, amounts: 1 },
  { text: "EN CUALQUIER JUEGO, MUERE Y QUÉDATE MIRANDO LA PANTALLA DE MUERTE DURANTE 1 MINUTO", weight: 5, minCount: 5, amounts: 2 },
  { text: "EN ROBLOX, CREA UN AVATAR LO MÁS HORRIBLE POSIBLE Y ÚSALO EN PÚBLICO", weight: 5, minCount: 4, amounts: 2 },
  { text: "JUEGA SIN MIRAR LA PANTALLA DURANTE 20 SEGUNDOS CONTINUOS", weight: 5, minCount: 5, amounts: 1 },
  { text: "EN UN JUEGO MULTIJUGADOR, DILE A TODO EL MUNDO QUE ESTÁS SIGUIENDO UN PRESCRIPT", weight: 5, minCount: 3, amounts: 2 },
  { text: "EN ROBLOX, ENTRA A UN JUEGO Y NO HAGAS NADA HASTA QUE ALGUIEN TE HABLE PRIMERO", weight: 8, minCount: 4, amounts: 2 },
  { text: "GANA UNA PARTIDA Y LUEGO DESCONÉCTATE INMEDIATAMENTE SIN RECLAMAR NADA", weight: 5, minCount: 6, amounts: 1 },
  { text: "LA CIUDAD EXIGE QUE PIERDAS ESTA PARTIDA DE FORMA INTENCIONAL", weight: 3, minCount: 8, amounts: 1 },
  { text: "Uhm... ¿Me compras un helado? ~ Sora", weight: 5, minCount: 50, amounts: 1 },
  
];

const recentMessagesSize = 5;
const recentMessages = [];

function pickMessage() {
    const eligible = messages.filter(m => clickCount >= m.minCount && m.amounts > 0);
    if (!eligible.length){
      return null;  
    }
    let picked = null;
    let attempts = 0;
    const MAX_ATTEMPTS = 25;

    while (attempts < MAX_ATTEMPTS) {
        attempts++;

        const totalWeight = eligible.reduce((s, m) => s + m.weight, 0);
        let roll = Math.random() * totalWeight;

        for (const m of eligible) {
            roll -= m.weight;
            if (roll <= 0) {
                picked = m;
                break;
            }
        }

        if (
            picked &&
            picked !== lastMessage &&
            !recentMessages.includes(picked)
        ) {
            break;
        }

        picked = null;
    }

    if (!picked){
      return null;  
    } 
    picked.amounts--;

    if (picked.amounts <= 0) {
        const idx = messages.indexOf(picked);
        if (idx !== -1) {
            messages.splice(idx, 1);
        }
    }

    recentMessages.push(picked);
    if (recentMessages.length > recentMessagesSize) {
        recentMessages.shift();
    }

    lastMessage = picked;
    return picked;
}
