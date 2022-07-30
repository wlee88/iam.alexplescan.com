import { AlexLauncher } from './AlexLauncher'
const AUTO_LAUNCH_HASH = '#auto'

const launcher = new AlexLauncher()
launcher.listenForDomEventsAndLaunchAlexThings()
launcher.animate()

const autoLaunchElem = document.getElementById('auto-launch')

if (document.location.hash === AUTO_LAUNCH_HASH) {
  toggleAutoLaunch()
}

autoLaunchElem.addEventListener('click', e => {
  e.preventDefault()
  toggleAutoLaunch()
})

function toggleAutoLaunch () {
  launcher.toggleAutoLaunch()
  if (launcher.isAutoLaunching) {
    autoLaunchElem.innerText = 'stop automatically launching alex things'
    document.location.hash = AUTO_LAUNCH_HASH
  } else {
    autoLaunchElem.innerText = 'start automatically launching alex things'
    document.location.hash = ''
  }
}
