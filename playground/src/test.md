# 1.一级标题
发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求
但现在有了 scroll-behavior（a标签锚点的平滑滚动）属性，还是觉得CSS真香
## 1.1二级标题

发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求

但现在有了 scroll-behavior（a标签锚点的平滑滚动）属性，还是觉得CSS真香
发现其实现在的CSS动画样式正在逐步的趋于完善，有些甚至可以取代相应的JS代码，不得不感叹CSS的牛逼
以前的a标签锚点跳转很生硬，不得不让人放弃，转而用JS实现相应的需求

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

# 3.image

1.base syntax

![200x400](https://picsum.photos/200/400)

2. gallery syntax

::: gallery
![200x400](https://picsum.photos/200/400)
![200x400](https://picsum.photos/200/400)
![200x400](https://picsum.photos/200/400)
![200x400](https://picsum.photos/200/400)
:::

# 4.code highlight

```ts
import MarkdownIt from 'markdown-it'
import type { ContainerOpts } from 'markdown-it-container'
import mdContainer from 'markdown-it-container'
import implicitFigures from 'markdown-it-image-figures'

// 创建markdown-it实例
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

```shell
cd ~
mkdir my-project
cd my-project
npm init -y
npm install -D vite
ps -aux | grep java
kill -9 1111
```

# 5.hint message

::: info
这是一个info提示信息🤣
:::

::: error
这是一个error提示信息
:::

::: warning
这是一个warning提示信息
:::

# 6.quote

> 这是一个quote

# 7.table

| 姓名 | 年龄 | 性别 |
| -------- | -------- | -------- |
| 张三 | 20 | 男 |
| 李四 | 25 | 男 |
| 王五 | 30 | 男 |
