import get from 'lodash/get'
import { history as browserHistory } from 'app/router'

// @TODO add command exit!

const navigate = {
  exec: ({ structure, cwd, history }, { args }) => {
    const location = get(args, '0')
    switch (location) {
      case 'home':
        browserHistory.push('/')
        break
      case 'about':
        browserHistory.push('/about')
        break
      case 'portfolio':
        browserHistory.push('/portfolio')
        break
      case 'contact':
        browserHistory.push('/contact')
        break
      case '.github':
        window.location.replace('https://github.com/krustyc')
        break
      default:
        return {
          structure,
          cwd,
          history: [
            ...history,
            { value: `the page "${location}" does not exist, try another one...` }
          ]
        }
    }
    return { structure, cwd, history }
  }
}

const helpme = {
  exec: ({ structure, cwd, history }) => {
    const help = [
      { value: 'Here\'s a list of the commands available!' },
      { value: 'navigate [PAGE] - navigate to PAGE' },
      { value: 'helps - show this menu' },
      { value: 'help - show default help' },
      { value: 'clear - clear the history' },
      { value: 'ls <-a>- list available pages (-a for hidden file)' },
      { value: 'cat - concatenate files and print on the standard output' },
      { value: 'mkdir - create directory' },
      { value: 'cd - change directory' },
      { value: 'pwd - print name of current/working directory' },
      { value: 'printenv - print all or part of environment' },
      { value: 'whoami - print user' },
      { value: 'rm - remove files or directories' }
    ]
    return { structure, cwd, history: [...history, ...help] }
  }
}

const history = [
  { value: 'Welcome to the terminal!' },
  { value: 'Type `helps` to see all available commands!' },
  { value: 'Uh! Of course you can drag me around :)' }
]

const structure = {
  home: { content: 'Just my home' },
  about: { content: 'Read a bit more about me' },
  potfolio: { content: 'Checkout my portofolio to see what I\'ve been working on!' },
  contact: { content: 'Come here if you wann get in touch' },
  '.github': { content: 'Link to my github: https://github.com/krustyc' }
}

const extensions = { navigate, helpme }

export { structure, extensions, history }
