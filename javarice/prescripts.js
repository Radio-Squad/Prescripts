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
  { text: "UTILIZA ÚNICAMENTE GOLPES BÁSICOS DURANTE TODO EL ENFRENTAMIENTO. LAS HABILIDADES QUEDAN PROHIBIDAS.", weight: 40, minCount: 0, amounts: 3 },
  { text: "EL USO DEL DESPLAZAMIENTO RÁPIDO QUEDA RESTRINGIDO EN ESTE ENFRENTAMIENTO.", weight: 35, minCount: 0, amounts: 3 },
  { text: "BLOQUEA UN MÍNIMO DE TRES ATAQUES CONSECUTIVOS SIN RECIBIR DAÑO ALGUNO.", weight: 40, minCount: 0, amounts: 3 },
  { text: "EJECUTA UN COMBO COMPLETO DE CUATRO GOLPES BÁSICOS Y FINALÍZALO CON UN GOLPE DESCENDENTE.", weight: 45, minCount: 0, amounts: 3 },
  { text: "ELIMINA A UN OPONENTE UTILIZANDO ÚNICAMENTE HABILIDADES. LOS GOLPES BÁSICOS QUEDAN EXCLUIDOS.", weight: 35, minCount: 0, amounts: 3 },
  { text: "EL SPRINT QUEDA PROHIBIDO DURANTE ESTE ENFRENTAMIENTO.", weight: 35, minCount: 0, amounts: 2 },
  { text: "RESULTA VICTORIOSO SIN EMPLEAR EL BLOQUEO EN NINGÚN MOMENTO.", weight: 35, minCount: 0, amounts: 3 },
  { text: "EL DESPLAZAMIENTO RÁPIDO SÓLO PODRÁ UTILIZARSE CON FINES DEFENSIVOS. SU USO OFENSIVO QUEDA VETADO.", weight: 40, minCount: 0, amounts: 3 },
  { text: "REALIZA AL MENOS DOS GOLPES ASCENDENTES DURANTE EL MISMO ENFRENTAMIENTO.", weight: 40, minCount: 0, amounts: 3 },
  { text: "ELIMINA A UN OPONENTE SIN RECURRIR A LAS HABILIDADES DE TERCER O CUARTO ESPACIO.", weight: 35, minCount: 0, amounts: 3 },
  { text: "EL USO DE LA HABILIDAD ESPECIAL QUEDA SUSPENDIDO EN ESTE ENFRENTAMIENTO.", weight: 40, minCount: 0, amounts: 3 },
  { text: "OBTÉN DOS ELIMINACIONES CONSECUTIVAS SIN PERDER LA VIDA EN EL PROCESO.", weight: 35, minCount: 0, amounts: 3 },
  { text: "LA ELIMINACIÓN DEBERÁ CONCLUIRSE EXCLUSIVAMENTE MEDIANTE UN GOLPE DESCENDENTE.", weight: 35, minCount: 0, amounts: 3 },
  { text: "DURANTE LOS PRIMEROS QUINCE SEGUNDOS NO SE PERMITIRÁ EL USO DE HABILIDAD ALGUNA.", weight: 35, minCount: 0, amounts: 2 },
  { text: "ELIMINA A NR.POTATO EMPLEANDO ÚNICAMENTE GOLPES BÁSICOS.", weight: 35, minCount: 0, amounts: 3 },
  { text: "RESULTA VICTORIOSO SIN UTILIZAR EL CUARTO ESPACIO DE HABILIDADES.", weight: 35, minCount: 0, amounts: 3 },
  { text: "EJECUTA TRES COMBOS COMPLETOS DE GOLPES BÁSICOS EN EL MISMO ENFRENTAMIENTO.", weight: 35, minCount: 0, amounts: 3 },
  { text: "LA ELIMINACIÓN DEBERÁ CONCLUIRSE EXCLUSIVAMENTE MEDIANTE UN GOLPE ASCENDENTE.", weight: 35, minCount: 0, amounts: 3 },
  { text: "RESULTA VICTORIOSO SIN REALIZAR SALTO ALGUNO.", weight: 35, minCount: 0, amounts: 3 },
  { text: "ELIMINA A UN OPONENTE SIN EMPLEAR EL DESPLAZAMIENTO RÁPIDO.", weight: 35, minCount: 0, amounts: 3 },
  { text: "ÚNICAMENTE LOS DOS PRIMEROS ESPACIOS DE HABILIDADES PODRÁN SER UTILIZADOS.", weight: 35, minCount: 0, amounts: 2 },
  { text: "DESTRUYE UN MÍNIMO DE TRES ESTRUCTURAS DEL ENTORNO DURANTE UN SOLO ENFRENTAMIENTO.", weight: 35, minCount: 0, amounts: 3 },
  { text: "RECOGE CUALQUIER OBJETO ARROJADIZO DEL ENTORNO Y EMPLÉALO CONTRA UN OPONENTE.", weight: 35, minCount: 0, amounts: 3 },
  { text: "ADQUIERE UNA BEBIDA EN CUALQUIER MÁQUINA EXPENDEDORA DISPONIBLE.", weight: 40, minCount: 0, amounts: 3 },
  { text: "ALCANZA EL PUNTO MÁS ELEVADO DE LAS TORRES GEMELES.", weight: 35, minCount: 0, amounts: 2 },

  // POCO COMUNES
  { text: "ACTIVA EL DESPERTAR Y RESULTA VICTORIOSO SIN EMPLEAR NINGUNA DE SUS HABILIDADES.", weight: 25, minCount: 2, amounts: 2 },
  { text: "CONSIGUE UN IMPACTO DE DESTELLO NEGRO.", weight: 25, minCount: 2, amounts: 3 },
  { text: "ELIMINA A DOS OPONENTES DISTINTOS EMPLEANDO ÚNICAMENTE EL GOLPE DESCENDENTE.", weight: 20, minCount: 3, amounts: 2 },
  { text: "ÚNICAMENTE SE PERMITIRÁN ATAQUES DE CORTO ALCANCE. TODA TÉCNICA A DISTANCIA QUEDA EXCLUIDA.", weight: 25, minCount: 2, amounts: 2 },
  { text: "EJECUTA UN COMBO QUE CONCLUYA CON UN GOLPE ASCENDENTE.", weight: 25, minCount: 2, amounts: 3 },
  { text: "ELIMINA A UN OPONENTE UTILIZANDO EXCLUSIVAMENTE EL CUARTO GOLPE DEL COMBO BÁSICO.", weight: 20, minCount: 3, amounts: 2 },
  { text: "RESULTA VICTORIOSO SIN EMPLEAR LOS DOS PRIMEROS ESPACIOS DE HABILIDADES.", weight: 20, minCount: 3, amounts: 2 },
  { text: "PERMITE QUE EL OPONENTE DESENCADENE EL PRIMER GOLPE. POSTERIORMENTE, RESULTA VICTORIOSO.", weight: 25, minCount: 2, amounts: 2 },
  { text: "ELIMINA A UN OPONENTE EMPLEANDO ÚNICAMENTE LOS DOS PRIMEROS ESPACIOS DE HABILIDADES.", weight: 20, minCount: 3, amounts: 2 },
  { text: "ELIMINA A PEPITOELHUMANO UTILIZANDO ÚNICAMENTE GOLPES BÁSICOS.", weight: 20, minCount: 2, amounts: 2 },
  { text: "PERMITE QUE FROBSTRUFF RESULTE VICTORIOSO SIN EMPLEAR BLOQUEO NI DESPLAZAMIENTO RÁPIDO.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ELIMINA A ANDRE20009252 Y POSTERIORMENTE PERMITE QUE ÉL TE ELIMINE.", weight: 20, minCount: 2, amounts: 2 },
  { text: "RESULTA VICTORIOSO CONTRA WILSONDEST SIN EMPLEAR EL DESPLAZAMIENTO RÁPIDO.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ELIMINA A NANIS_10892 SIN UTILIZAR SU ESTILO PRINCIPAL.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ELIMINA A REINER8116 EMPLEANDO ÚNICAMENTE HABILIDADES.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ÚNICAMENTE LOS GOLPES ASCENDENTES Y DESCENDENTES PODRÁN SER EMPLEADOS.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ELIMINA A NR.POTATO SIN ACTIVAR EL DESPERTAR.", weight: 20, minCount: 2, amounts: 2 },
  { text: "PERMITE QUE NR.POTATO TE ELIMINE. NO OPONGAS RESISTENCIA.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ELIMINA A UN OPONENTE SIN EMPLEAR EL DESPLAZAMIENTO RÁPIDO EN NINGÚN INSTANTE.", weight: 20, minCount: 2, amounts: 2 },
  { text: "RESULTA VICTORIOSO SIN BLOQUEAR EN NINGUNA OCASIÓN.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ELIMINA A UN OPONENTE EMPLEANDO ÚNICAMENTE EL TERCER ESPACIO DE HABILIDADES.", weight: 20, minCount: 2, amounts: 2 },
  { text: "CONSIGUE DOS IMPACTOS DE DESTELLO NEGRO EN EL MISMO ENFRENTAMIENTO.", weight: 15, minCount: 3, amounts: 2 },
  { text: "RESULTA VICTORIOSO TRAS HABER RECIBIDO EL PRIMER GOLPE DEL ENFRENTAMIENTO.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ELIMINA A UN OPONENTE EMPLEANDO ÚNICAMENTE LAS HABILIDADES DEL DESPERTAR.", weight: 20, minCount: 2, amounts: 2 },
  { text: "RECOGE UN EXTINTOR O UN RECIPIENTE DE DESECHOS Y EMPLÉALO CONTRA UN OPONENTE.", weight: 25, minCount: 2, amounts: 3 },
  { text: "INFLIGE DESTRUCCIÓN SOBRE LAS TORRES GEMELES.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ADQUIERE UNA BEBIDA Y CONSÚMELA DURANTE UN ENFRENTAMIENTO.", weight: 25, minCount: 2, amounts: 2 },
  { text: "RECOGE UN OBJETO ENTREGADO POR EL DRON ANTES QUE CUALQUIER OTRO INDIVIDUO.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ARROJA UNA SILLA U OBJETO SIMILAR CONTRA UN OPONENTE.", weight: 25, minCount: 2, amounts: 3 },
  { text: "ASCEN DE AL TECHO DE CUALQUIER ESTRUCTURA Y PERMANECE ALLÍ DURANTE VEINTE SEGUNDOS.", weight: 20, minCount: 2, amounts: 2 },
  { text: "DESTRUYE AL MENOS UNA SUPERFICIE EMPLEANDO ÚNICAMENTE GOLPES BÁSICOS.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ELIMINA A SANTIAGORUEDA_ALVAREZ SIN QUE ÉSTE OPONGA RESISTENCIA SIGNIFICATIVA.", weight: 20, minCount: 2, amounts: 2 },

  // MEDIOS
  { text: "OBTÉN DOS ELIMINACIONES CONSECUTIVAS SIN PERDER LA VIDA.", weight: 15, minCount: 4, amounts: 2 },
  { text: "CONSIGUE UN IMPACTO DE DESTELLO NEGRO Y CONCLUYE EL ENFRENTAMIENTO CON GOLPES BÁSICOS.", weight: 15, minCount: 4, amounts: 2 },
  { text: "ELIMINA A UN OPONENTE TRAS HABER RECIBIDO UN MÍNIMO DE CUARENTA PUNTOS DE DAÑO.", weight: 15, minCount: 4, amounts: 2 },
  { text: "RESULTA VICTORIOSO EMPLEANDO ÚNICAMENTE DESPLAZAMIENTO RÁPIDO Y GOLPES BÁSICOS.", weight: 15, minCount: 4, amounts: 2 },
  { text: "LA ELIMINACIÓN DEBERÁ FINALIZARSE MEDIANTE UN GOLPE DESCENDENTE.", weight: 15, minCount: 4, amounts: 2 },
  { text: "ELIMINA A REINER8116 EN DOS OCASIONES CONSECUTIVAS.", weight: 15, minCount: 3, amounts: 2 },
  { text: "PERMITE QUE NANIS_10892 TE ELIMINE. NO OPONGAS RESISTENCIA.", weight: 15, minCount: 3, amounts: 2 },
  { text: "RESULTA VICTORIOSO CONTRA PEPITOELHUMANO SIN ACTIVAR EL DESPERTAR.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ELIMINA A ANDRE20009252 EMPLEANDO ÚNICAMENTE EL GOLPE DESCENDENTE.", weight: 15, minCount: 3, amounts: 2 },
  { text: "RESULTA VICTORIOSO CONTRA WILSONDEST SIN EMPLEAR EL BLOQUEO.", weight: 15, minCount: 3, amounts: 2 },
  { text: "CONSIGUE UN IMPACTO DE DESTELLO NEGRO Y EMPLÉALO PARA CONCLUIR LA ELIMINACIÓN.", weight: 15, minCount: 3, amounts: 2 },
  { text: "RESULTA VICTORIOSO COMENZANDO EL ENFRENTAMIENTO CON MENOS DE CINCUENTA PUNTOS DE VIDA.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ELIMINA A FROBSTRUFF SIN RECURRIR A LAS HABILIDADES DE TERCER O CUARTO ESPACIO.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ELIMINA A NR.POTATO EN DOS OCASIONES CONSECUTIVAS.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ELIMINA A NR.POTATO EMPLEANDO ÚNICAMENTE EL GOLPE DESCENDENTE.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ELIMINA A UN OPONENTE SIN EMPLEAR GOLPES BÁSICOS EN NINGÚN MOMENTO.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ACTIVA LA EXPANSIÓN DE DOMINIO Y RESULTA VICTORIOSO.", weight: 15, minCount: 3, amounts: 2 },
  { text: "RESULTA VICTORIOSO SIN EMPLEAR EL PRIMER ESPACIO DE HABILIDADES.", weight: 15, minCount: 3, amounts: 2 },
  { text: "EJECUTA UN COMBO COMPUESTO POR GOLPE BÁSICO, HABILIDAD Y NUEVAMENTE GOLPE BÁSICO.", weight: 15, minCount: 3, amounts: 2 },
  { text: "RESULTA VICTORIOSO TRAS HABER SIDO DERRIBADO EN DOS OCASIONES.", weight: 15, minCount: 3, amounts: 2 },
  { text: "NO EMPLEES EL BLOQUEO EN NINGÚN INSTANTE Y AÚN ASÍ RESULTA VICTORIOSO.", weight: 15, minCount: 3, amounts: 2 },
  { text: "INFLIGE DESTRUCCIÓN SOBRE LA ESTACIÓN DE TREN.", weight: 15, minCount: 3, amounts: 2 },
  { text: "RECOGE UN OBJETO DEL ENTORNO Y EMPLÉALO PARA ELIMINAR A UN OPONENTE.", weight: 15, minCount: 3, amounts: 2 },
  { text: "REALIZA UNA ADQUISICIÓN EN LA TIENDA DISPONIBLE.", weight: 15, minCount: 3, amounts: 2 },
  { text: "CONSUME UNA BEBIDA INMEDIATAMENTE ANTES DE SER ELIMINADO.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ARROJA EL PIANO O UNA MÁQUINA RECREATIVA CONTRA UN OPONENTE.", weight: 15, minCount: 3, amounts: 1 },
  { text: "DESTRUYE EL PUENTE QUE UNE LAS TORRES GEMELES.", weight: 15, minCount: 3, amounts: 2 },
  { text: "RECOGE DOS OBJETOS ARROJADIZOS DE NATURALEZA DISTINTA.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ELIMINA A SANTIAGORUEDA_ALVAREZ EN DOS OCASIONES DURANTE LA MISMA SESIÓN.", weight: 15, minCount: 3, amounts: 2 },
  { text: "PERMITE QUE SANTIAGORUEDA_ALVAREZ TE ELIMINE SIN OPONER RESISTENCIA.", weight: 15, minCount: 3, amounts: 2 },

  // ABSURDOS PERO POSIBLES
  { text: "PIERDE EL ENFRENTAMIENTO DE MANERA DELIBERADA.", weight: 20, minCount: 1, amounts: 3 },
  { text: "ELIMINA AL MISMO INDIVIDUO EN DOS OCASIONES CONSECUTIVAS.", weight: 20, minCount: 2, amounts: 2 },
  { text: "PERMITE QUE TE ELIMINEN SIN EMPLEAR BLOQUEO NI DESPLAZAMIENTO RÁPIDO.", weight: 20, minCount: 1, amounts: 3 },
  { text: "RESULTA VICTORIOSO EN UN ENFRENTAMIENTO Y POSTERIORMENTE PIERDE EL SIGUIENTE DE FORMA INTENCIONAL.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ELIMINA A UN OPONENTE Y POSTERIORMENTE PERMITE QUE EL MISMO INDIVIDUO TE ELIMINE.", weight: 15, minCount: 3, amounts: 2 },
  { text: "DURANTE LOS PRIMEROS QUINCE SEGUNDOS NO SE INICIARÁ ATAQUE ALGUNO.", weight: 20, minCount: 2, amounts: 2 },
  { text: "ÚNICAMENTE EL GOLPE DESCENDENTE PODRÁ SER EMPLEADO COMO FORMA DE ATAQUE.", weight: 15, minCount: 3, amounts: 2 },
  { text: "PERMITE QUE TU VITALIDAD DESCIENDA POR DEBAJO DE VEINTE PUNTOS Y AÚN ASÍ RESULTA VICTORIOSO.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ELIMINA A UN OPONENTE SIN DESPLAZARTE DEL PUNTO EN EL QUE DIO INICIO EL ENFRENTAMIENTO.", weight: 15, minCount: 3, amounts: 2 },
  { text: "PERMITE QUE TE ELIMINEN EMPLEANDO ÚNICAMENTE GOLPES BÁSICOS.", weight: 15, minCount: 3, amounts: 2 },
  { text: "RESULTA VICTORIOSO SIN REALIZAR SALTO ALGUNO DURANTE TODO EL ENFRENTAMIENTO.", weight: 20, minCount: 2, amounts: 2 },
  { text: "PERMITE QUE TE INFLIJAN UN COMBO COMPLETO DE GOLPES BÁSICOS SIN BLOQUEAR.", weight: 20, minCount: 2, amounts: 2 },
  { text: "INICIA EL ENFRENTAMIENTO DESPLAZÁNDOTE EN DIRECCIÓN OPUESTA AL OPONENTE.", weight: 20, minCount: 1, amounts: 2 },
  { text: "PERMITE QUE WILSONDEST TE ELIMINE Y NO EXPRESSES QUEJA ALGUNA.", weight: 15, minCount: 2, amounts: 2 },
  { text: "ELIMINA A ANDRE20009252 Y POSTERIORMENTE PIERDE CONTRA ÉL DE FORMA DELIBERADA.", weight: 15, minCount: 3, amounts: 2 },
  { text: "PERMITE QUE REINER8116 TE ELIMINE AUNQUE MANIFIESTE NO DESEAR COMBATIR.", weight: 15, minCount: 2, amounts: 2 },
  { text: "ELIMINA A NANIS_10892 EMPLEANDO CUALQUIER ESTILO EXCEPTO EL SUYO PRINCIPAL.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ELIMINA A NR.POTATO Y POSTERIORMENTE PERMITE QUE ÉL TE ELIMINE.", weight: 15, minCount: 3, amounts: 2 },
  { text: "PERMITE QUE NR.POTATO RESULTE VICTORIOSO SIN EMPLEAR BLOQUEO NI DESPLAZAMIENTO RÁPIDO.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ELIMINA A NR.POTATO EMPLEANDO ÚNICAMENTE HABILIDADES.", weight: 15, minCount: 3, amounts: 2 },
  { text: "PIERDE DOS ENFRENTAMIENTOS CONSECUTIVOS DE MANERA DELIBERADA.", weight: 10, minCount: 4, amounts: 2 },
  { text: "ELIMINA AL MISMO INDIVIDUO EN TRES OCASIONES DURANTE LA MISMA SESIÓN.", weight: 10, minCount: 4, amounts: 1 },
  { text: "INFLIGE LA MAYOR CANTIDAD DE DESTRUCCIÓN POSIBLE SOBRE EL ENTORNO EN UN MINUTO SIN COMBATIR.", weight: 10, minCount: 4, amounts: 1 },
  { text: "RECOGE EL PIANO Y TRASLÁDALO POR EL ENTORNO SIN ARROJARLO.", weight: 10, minCount: 4, amounts: 1 },
  { text: "ADQUIERE UNA BEBIDA Y NO LA CONSUMAS. ÚNICAMENTE PORTÁLA.", weight: 15, minCount: 3, amounts: 2 },
  { text: "PERMANECE EN EL INTERIOR DE LA ESTACIÓN DE TREN DURANTE TREINTA SEGUNDOS SIN ABANDONARLA.", weight: 15, minCount: 3, amounts: 2 },
  { text: "ELIMINA A SANTIAGORUEDA_ALVAREZ Y POSTERIORMENTE PERMITE QUE ÉL TE ELIMINE.", weight: 15, minCount: 3, amounts: 2 },
  { text: "PERMITE QUE SANTIAGORUEDA_ALVAREZ RESULTE VICTORIOSO SIN QUE OPONGAS RESISTENCIA ALGUNA.", weight: 15, minCount: 2, amounts: 2 },

  // MUY LARGOS Y RAROS
  { text: "RESULTA VICTORIOSO EMPLEANDO ÚNICAMENTE GOLPES BÁSICOS. QUEDAN PROHIBIDOS: HABILIDADES, DESPLAZAMIENTO RÁPIDO, BLOQUEO, SPRINT, DESPERTAR Y HABILIDAD ESPECIAL. DEBERÁS PERMITIR QUE EL OPONENTE DESENCADENE EL PRIMER GOLPE, REALIZAR AL MENOS DOS GOLPES ASCENDENTES Y CONCLUIR EXCLUSIVAMENTE CON UN GOLPE DESCENDENTE SIN HABER SALTADO EN NINGÚN INSTANTE.", weight: 5, minCount: 6, amounts: 1 },
  { text: "DURANTE LOS PRÓXIMOS TRES MINUTOS QUEDA PROHIBIDO ATACAR, EMPLEAR HABILIDADES, DESPLAZAMIENTO RÁPIDO O BLOQUEO. ÚNICAMENTE SE PERMITE CAMINAR, SALTAR Y SPRINTAR. DEBERÁS SEGUIR AL PRIMER INDIVIDUO QUE OBSERVES SIN INFLIGIRLE DAÑO ALGUNO HASTA QUE TRANSCURRA EL TIEMPO ESTIPULADO O HASTA QUE DICHO INDIVIDUO TE ELIMINE.", weight: 5, minCount: 6, amounts: 1 },
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
