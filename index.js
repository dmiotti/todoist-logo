import './reset.scss'
import './main.scss'

const animate = start => {
  const checkmarks = document.querySelectorAll('.mark')
  for (let i = 0; i < checkmarks.length; i++) {
    if (start) checkmarks[i].classList.add('animated')
    else checkmarks[i].classList.remove('animated')
  }
}

window.startAnimation = () => animate(true)
window.stopAnimation = () => animate()
window.useColor = color => document.querySelector('svg .square').style.fill = color
window.useCustomColor = () => {
  const color = document.getElementById('color-input').value
  useColor(color)
  return false
}
