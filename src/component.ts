import { defineComponent, h } from 'vue'
import { md } from './core'

export const VMarkdown = defineComponent({
  name: 'v-markdown',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  render() {
    return h(
      'div',
      {
        className: 'markdown-body',
        innerHTML: md.render(this.text),
      },
    )
  },
})
