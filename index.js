/* global hexo */

'use strict';

const renderer = require('./lib/renderer');

hexo.config.marked = Object.assign({
  // GitHub Flavored Markdown（GFM）特性，允许在 Markdown 中使用表格等扩展语法。
  gfm: true,
  // 启用严格的 Markdown 解析，处理更严格的语法规则。
  pedantic: false,
  // 启用换行符转换为 <br> 标签。
  breaks: true,
  // 智能的列表符号处理。
  smartLists: true,
  // 启用智能排版（比如将 " 转为 “）。
  smartypants: true,
  // 修改生成的锚点链接。
  modifyAnchors: 0,
  // 自动将 URL 转为链接。
  autolink: true,
  // HTML 标签中的 id 和 class 自动进行字符转义。
  mangle: true,
  // 不对 URL 进行清理。
  sanitizeUrl: false,
  // 是否启用 dompurify 进行 HTML 清理（此处为 false，即不启用）。
  dompurify: false,
  // 启用或禁用标题的自动 ID 生成。
  headerIds: true,
  // 禁用锚点别名功能。
  anchorAlias: false,
  // 是否启用图片的延迟加载。
  lazyload: false,
  // 是否预处理根路径。（为链接或图片加上root路径）
  prependRoot: true,
  // 是否启用后期资产处理。（将文章中的资源文件复制到hexo的静态目录中
  postAsset: false,
  // 配置外部链接的处理，包括是否启用、排除某些链接、不添加 nofollow 等。（和seo排名相关，即是否传递seo权重给外部链接）
  external_link: {
    enable: false,
    exclude: [],
    nofollow: false
  },
  descriptionLists: true
}, hexo.config.marked);

// 启用或禁用 Nunjucks 模板引擎。
renderer.disableNunjucks = Boolean(hexo.config.marked.disableNunjucks);

/**
 * 注册多个使用同一个渲染器生成html的文件拓展名
 * 第四个参数true代表启用异步（处理I/O或http请求）
 */
hexo.extend.renderer.register('md', 'html', renderer, true);
hexo.extend.renderer.register('markdown', 'html', renderer, true);
hexo.extend.renderer.register('mkd', 'html', renderer, true);
hexo.extend.renderer.register('mkdn', 'html', renderer, true);
hexo.extend.renderer.register('mdwn', 'html', renderer, true);
hexo.extend.renderer.register('mdtxt', 'html', renderer, true);
hexo.extend.renderer.register('mdtext', 'html', renderer, true);
