阿巴阿巴阿巴阿巴阿巴阿巴阿巴

# 1.一级标题
发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求
::: gallery
![200x400](https://picsum.photos/200/400)
![200x400](https://picsum.photos/200/400)
![200x400](https://picsum.photos/200/400)
![200x400](https://picsum.photos/200/400)
:::
但现在有了 scroll-behavior（a标签锚点的平滑滚动）属性，还是觉得CSS真香
## 1.1二级标题

发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求

但现在有了 scroll-behavior（a标签锚点的平滑滚动）属性，还是觉得CSS真香
发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求

![200x400](https://picsum.photos/300/400)

但现在有了 scroll-behavior（a标签锚点的平滑滚动）属性，还是觉得CSS真香
发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求

但现在有了 scroll-behavior（a标签锚点的平滑滚动）属性，还是觉得CSS真香
## 1.1二级标题

# 2.一级标题

发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求
但现在有了 scroll-behavior（a标签锚点的平滑滚动）属性，还是觉得CSS真香
发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求
但现在有了 `scroll-behavior`（a标签锚点的平滑滚动）属性，还是觉得CSS真香
## 2.1二级标题

发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求
但现在有了 scroll-behavior（a标签锚点的平滑滚动）属性，还是觉得CSS真香
发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求
但现在有了 scroll-behavior（a标签锚点的平滑滚动）属性，还是觉得CSS真香
### 2.1.1 三级标题

```ts
import MarkdownIt from 'markdown-it'
import type { ContainerOpts } from 'markdown-it-container'
import mdContainer from 'markdown-it-container'
import implicitFigures from 'markdown-it-image-figures'

const md = MarkdownIt()

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
```

发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求
但现在有了 scroll-behavior（a标签锚点的平滑滚动）属性，还是觉得CSS真香发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求
但现在有了 scroll-behavior（a标签锚点的平滑滚动）属性，还是觉得CSS真香

```shell
cd ~
mkdir my-project
cd my-project
npm init -y
npm install -D vite
ps -aux | grep java
kill -9 1111
```
