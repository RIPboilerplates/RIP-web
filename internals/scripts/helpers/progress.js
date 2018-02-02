const readline = require('readline')
const print = require('./print')

/**
 * Adds an animated progress indicator
 *
 * @param  {string} message      The message to write next to the indicator
 * @param  {number} amountOfDots The amount of dots you want to animate
 */
function animateProgress(message, amountOfDots) {
  let dotCount = amountOfDots
  if (typeof amountOfDots !== 'number') {
    dotCount = 3
  }

  let i = 0
  return setInterval(() => {
    readline.cursorTo(process.stdout, 0)
    i = (i + 1) % (dotCount + 1)
    const dots = new Array(i + 1).join('.')
    print(message + dots)
  }, 500)
}

module.exports = animateProgress
