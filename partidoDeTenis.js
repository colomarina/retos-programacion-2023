/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */

const winner = (array) => {
  try {
    if (array.length === 0) throw new ('El array esta vacio');
    const namePoints = ['Love', 15, 30, 40]
    let pointsP1 = 0;
    let pointsP2 = 0;
  
    array.forEach(player => {
      (player === "P1") ? pointsP1 += 1 : pointsP2 += 1;
      if (pointsP1 === 5 || pointsP2 === 5) return console.log(`Ha ganado ${player}`)
      if (pointsP1 === 4) {
        console.log(`Ventaja ${player}`)
      } else if (pointsP2 === 4) {
        console.log(`Ventaja ${player}`)
      } else if (pointsP1 === 3 && pointsP2 === 3) {
        console.log(`Deuce`)
      } else  {
        console.log(`${namePoints[pointsP1]} - ${namePoints[pointsP2]}`)
      }
    });
  } catch (error) {
    console.log(error);
  }
}

console.log('Partido de tenis')
winner(["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"])
