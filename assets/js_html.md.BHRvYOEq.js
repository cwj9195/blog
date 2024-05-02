import{_ as t,c as e,o as a,a4 as c}from"./chunks/framework.JknIMk6Q.js";const f=JSON.parse('{"title":"html","description":"","frontmatter":{},"headers":[],"relativePath":"js/html.md","filePath":"js/html.md"}'),o={name:"js/html.md"},r=c('<h1 id="html" tabindex="-1">html <a class="header-anchor" href="#html" aria-label="Permalink to &quot;html&quot;">​</a></h1><h2 id="script" tabindex="-1"><a href="https://juejin.cn/post/6908315682404843528" target="_blank" rel="noreferrer"><code>&lt;script /&gt;</code></a> <a class="header-anchor" href="#script" aria-label="Permalink to &quot;[`&lt;script /&gt;`](https://juejin.cn/post/6908315682404843528)&quot;">​</a></h2><p>在Web开发中，为了避免脚本加载导致的页面渲染阻塞，通常会采用一些策略来确保脚本的异步加载或者延迟加载。以下是一些常用的方法</p><ul><li><code>async</code> 通过在<code>&lt;script&gt;</code>标签中添加async属性，可以使得脚本在下载完成后异步执行，这样就不会阻塞页面的渲染。这种方式适合于那些不依赖于其他脚本即可运行的脚本1。</li><li><code>defer</code> 与async不同，defer属性确保脚本会在整个文档解析完成后再执行。这对于那些需要在DOM完全构建后才能运行的脚本非常有用。使用defer属性的脚本会按照它们在HTML文档中出现的顺序执行1。</li><li>将<code>&lt;script&gt;</code>标签放置在HTML文档的底部，即在<code>&lt;/body&gt;</code>标签之前，可以确保在执行脚本之前，页面的大部分内容已经被加载和渲染，从而减少了脚本加载对用户体验的影响3。</li><li>动态加载-通过JavaScript动态创建<code>&lt;script&gt;</code>元素，并设置其<code>src</code>属性，可以在页面加载的过程中按需加载脚本。这种方式可以更精细地控制脚本的加载时机，避免不必要的阻塞2。</li></ul>',4),l=[r];function s(d,i,n,h,_,p){return a(),e("div",null,l)}const u=t(o,[["render",s]]);export{f as __pageData,u as default};
