import{_ as e,c as a,o as l,a2 as t}from"./chunks/framework.BvpWiaHw.js";const m=JSON.parse('{"title":"控制台","description":"","frontmatter":{},"headers":[],"relativePath":"js/调试.md","filePath":"js/调试.md"}'),i={name:"js/调试.md"},o=t('<h1 id="控制台" tabindex="-1">控制台 <a class="header-anchor" href="#控制台" aria-label="Permalink to &quot;控制台&quot;">​</a></h1><h2 id="element-元素" tabindex="-1">Element 元素 <a class="header-anchor" href="#element-元素" aria-label="Permalink to &quot;Element 元素&quot;">​</a></h2><h3 id="style-样式表" tabindex="-1">style 样式表 <a class="header-anchor" href="#style-样式表" aria-label="Permalink to &quot;style 样式表&quot;">​</a></h3><ul><li>所有输入样式</li><li>:hov 强制设置元素状态</li><li>.cls 给元素添加新的类名</li></ul><h3 id="computed-计算样式" tabindex="-1">computed 计算样式 <a class="header-anchor" href="#computed-计算样式" aria-label="Permalink to &quot;computed 计算样式&quot;">​</a></h3><ul><li>最终元素的样式</li><li>过滤 | 全部 | 组合</li></ul><h3 id="layout-布局" tabindex="-1">layout 布局 <a class="header-anchor" href="#layout-布局" aria-label="Permalink to &quot;layout 布局&quot;">​</a></h3><ul><li>该页面用到了哪些布局(网格布局 &amp; flexBox弹性盒)</li></ul><h3 id="event-listeners-事件监听器" tabindex="-1">Event Listeners 事件监听器 <a class="header-anchor" href="#event-listeners-事件监听器" aria-label="Permalink to &quot;Event Listeners 事件监听器&quot;">​</a></h3><ul><li>查看该元素绑定的事件 以及定位到该事件的源码位置</li><li>父级往上绑定的事件</li></ul><h2 id="network-网络" tabindex="-1">network 网络 <a class="header-anchor" href="#network-网络" aria-label="Permalink to &quot;network 网络&quot;">​</a></h2><ul><li>可通过点击某一request请求的启动器来查看调用栈 定位哪个文件哪个函数调用的</li></ul><h2 id="sources-源代码-来源" tabindex="-1">sources 源代码/来源 <a class="header-anchor" href="#sources-源代码-来源" aria-label="Permalink to &quot;sources 源代码/来源&quot;">​</a></h2><ul><li><p>debugger 打断点</p></li><li><p>播放按钮 继续往后执行 直到遇到下一个断点才停止</p></li><li><p>setp over 快速跳过这行代码</p><ul><li>不管这行代码有没有调用函数，哪怕函数里有100行代码都一下执行完</li></ul></li><li><p>setp into 进行这行函数的执行</p></li><li><p>setp out 快速执行完当前函数，回到上一个函数调用的地方</p></li><li><p>作用域</p><ul><li>目前js执行到的地方所能使用到的 局部变量 &amp; 全局变量 &amp; 闭包变量</li></ul></li></ul><p>按ESC可以弹出控制台抽屉，这里可以打印当前上下文的变量</p><ul><li>监视</li></ul>',16),r=[o];function s(n,u,h,c,d,p){return l(),a("div",null,r)}const b=e(i,[["render",s]]);export{m as __pageData,b as default};
