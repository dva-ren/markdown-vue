import MarkdownIt from 'markdown-it'
import type { ContainerOpts } from 'markdown-it-container'
import mdContainer from 'markdown-it-container'
import Shiki from '@shikijs/markdown-it'

const md = MarkdownIt()
md.use(await Shiki({
  themes: {
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  },
}))
md.use(mdContainer, 'hint', {
  validate(params) {
    return ['warning', 'info', 'error'].includes(params.trim())
  },

  render(tokens, idx) {
    const m = tokens[idx].info.trim()

    if (tokens[idx].nesting === 1) {
      // opening tag
      return `<hint class="${m}">\n`
    }
    else {
      // closing tag
      return '</hint>\n'
    }
  },
} as ContainerOpts)

md.use(mdContainer, 'gallery', {
  validate(params) {
    return params.trim() === 'gallery'
  },

  render(tokens, idx) {
    const m = tokens[idx].info.trim()

    if (tokens[idx].nesting === 1) {
      // opening tag
      return `<gallery class="${m}">\n`
    }
    else {
      // closing tag
      return '</gallery>\n'
    }
  },
} as ContainerOpts)
export {
  md as markdown,
  md,
}
