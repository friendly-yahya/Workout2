/**
 * @typedef {Object} Exercice
 * @property {string} id
 * @property {string} name
 * @property {number} sets
 * @property {number} reps
*/

/**
 * @typedef {Object} WorkoutSession
 * @property {string} id
 * @property {string} date 
 * @property {number} duration
 * @property {Exercice[]} exercices
 */
export {Exercice, WorkoutSession};