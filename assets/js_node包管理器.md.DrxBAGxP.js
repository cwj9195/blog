import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BvpWiaHw.js";const g=JSON.parse('{"title":"node包管理器","description":"","frontmatter":{},"headers":[],"relativePath":"js/node包管理器.md","filePath":"js/node包管理器.md"}'),e={name:"js/node包管理器.md"},p=n(`<h1 id="node包管理器" tabindex="-1">node包管理器 <a class="header-anchor" href="#node包管理器" aria-label="Permalink to &quot;node包管理器&quot;">​</a></h1><ul><li><a href="https://zhuanlan.zhihu.com/p/659824566" target="_blank" rel="noreferrer">pnpm&gt;yarn&gt;npm 优劣对比</a></li><li><a href="https://www.jianshu.com/p/c427ed4c45e1" target="_blank" rel="noreferrer">npm pnpm yarn</a></li></ul><h2 id="npmrc文件" tabindex="-1"><code>.npmrc</code>文件 <a class="header-anchor" href="#npmrc文件" aria-label="Permalink to &quot;\`.npmrc\`文件&quot;">​</a></h2><p><a href="https://www.jianshu.com/p/0cda4343d704" target="_blank" rel="noreferrer">关于项目中 .npmrc文件</a></p><ul><li>开发中用于配置npm（Node Package Manager）行为的重要文件。它允许开发者自定义npm的各种设置，包括镜像源、代理、认证信息、依赖管理等等</li><li>从<code>npm | yarn</code>项目迁移到<code>pnpm</code>时 可能会存在 <strong>对等依赖缺失（peer dep）</strong> 可以在根目录创建<a href="https://pnpm.io/zh/npmrc" target="_blank" rel="noreferrer">.npmrc文件</a></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#.npmrc文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shamefully</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hoist</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #会将所有peer dependencies安装到顶层的node_modules文件夹中。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">auto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">peers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #自动安装任何缺少的非可选同级依赖关系。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">strict</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">peer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dependencies</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #如果启用了此选项，那么在依赖树中存在缺失或无效的 peer 依赖关系时，命令将执行失败</span></span></code></pre></div><h2 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;packageManager&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pnpm@8.10.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//包管理器</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;axios&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3.21.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//指定版本</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;axios&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;~3.21.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//表示安装3.21.X的最新版本</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;axios&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^3.21.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//表示安装3.X.X的最新版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 引擎</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;engines&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;= 6.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;npm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;= 3.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;pnpm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=3&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="nvm、npm、nrm、yarn、npx、pnpm-相关解释" tabindex="-1"><a href="https://baijiahao.baidu.com/s?id=1726423980119026076&amp;wfr=spider&amp;for=pc" target="_blank" rel="noreferrer">nvm、npm、nrm、yarn、npx、pnpm 相关解释</a> <a class="header-anchor" href="#nvm、npm、nrm、yarn、npx、pnpm-相关解释" aria-label="Permalink to &quot;[nvm、npm、nrm、yarn、npx、pnpm 相关解释](https://baijiahao.baidu.com/s?id=1726423980119026076&amp;wfr=spider&amp;for=pc)&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm：node.js 版本管理工具；不同项目可能需要不同版本的 node；可以使用 nvm 来管理 node.js 版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npx：一个 npm 包执行器。我们可以使用 npx 来执行各种命令。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nrm：npm 源的管理工具，可以用来方便的切换 npm 源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm：node.js 包管理工具；用来管理 node.js 中的第三方插件；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cnpm：使用的是淘宝的源。用法跟 npm 完全一致。cnpm 经常会有问题，所以在很多地方不推荐使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn：运行速度显著提升，整个安装时间比 npm 少。一般推荐使用 yarn 代替 npm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm：</span></span></code></pre></div><h2 id="npx" tabindex="-1">npx <a class="header-anchor" href="#npx" aria-label="Permalink to &quot;npx&quot;">​</a></h2><p>一个npm包执行器，指在提高从npm注册表使用软件包时的体验</p><p>使用NPX，您可以运行和执行软件包，而无需在本地或全局安装它们。</p><p><code>npx http-server dist</code> <s>npm i -g http-server &amp; http-server dist</s></p><p><code>npx @vue/cli create helloWord</code> <s>npm i -g @vue/cli &amp; vue create helloWord</s></p><h3 id="使用npx代替nvm-切换node版本" tabindex="-1">使用npx代替nvm 切换node版本 <a class="header-anchor" href="#使用npx代替nvm-切换node版本" aria-label="Permalink to &quot;使用npx代替nvm 切换node版本&quot;">​</a></h3><p><code>npx -p node@10.0.0 npm install</code> //指定node版本来安装项目依赖</p><p><code>npx -p node@7 -- node -v </code></p><h2 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/m0_51340928/article/details/131878565" target="_blank" rel="noreferrer">Mac安装nvm管理node和npm依赖（M1芯片）</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>在实际的前端开发过程中，可能会经常遇见 node.js 的版本问题，不同的项目需要使用不同的 node.js 版本。</span></span>
<span class="line"><span>直接安装的话，只能安装和使用 node.js 的一个版本。可以使用 nvm 来安装和管理不同版本的 node.js。</span></span>
<span class="line"><span>nvm 是  node.js 管理工具。可以通过 nvm 安装和切换不同版本的 node.js。</span></span>
<span class="line"><span>如果有安装过node，最好进行卸载，因为自己安装的，nvm控制不了，会出现一些意想不到的报错，先安装nvm，再使用nvm命令安装需要的版本即可！</span></span></code></pre></div><ul><li><p>安装 <code>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.38.0/install.sh | bash</code></p></li><li><p>安装 <code>wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.38.0/install.sh | bash</code></p></li><li><p>常用命令</p><ul><li><code>nvm ls</code> ：列出所有已安装的 node 版本</li><li><code>nvm list</code> ：列出所有已安装的 node 版本</li><li><code>nvm install &lt; 16 | 18 | 20 &gt;</code> ：安装对应版本</li><li><code>nvm list available</code> ：显示所有可下载的版本</li><li><code>nvm install latest</code>：安装最新版 node</li><li><code>nvm install [node 版本号]</code> ：安装指定版本 node</li><li><code>nvm uninstall [node 版本号]</code> ：删除已安装的指定版本</li><li><code>nvm use [node 版本号]</code> ：切换到指定版本 node</li><li><code>nvm current</code> ：当前 node 版本</li><li><code>nvm unalias [别名]</code> ：删除已定义的别名</li></ul></li></ul><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h2><p><code>npm config set registry &lt;https://registry.npm.taobao.org&gt;</code></p><p>更改 npm 的下载镜像为淘宝镜像</p><p><code>npm config set registry &lt;https://registry.npmjs.org&gt;</code></p><p>安装 cnpm 淘宝镜像</p><p><code>npm install -g cnpm --registry=&lt;https://registry.npm.taobao.org&gt;</code></p><ul><li><p><code>npm install &lt; -g || -S || -D || 空&gt;</code></p><ul><li><code>-g</code> 全局安装</li><li><code>-S</code> 就是--save 的简写 注入到 package.json 的 dependencies(依赖)对象 生产环境</li><li><code>-D</code> 就是--save-dev 注入到 package.json 的 devDependencies(开发依赖)对象 开发环境</li><li>\`\` 啥也不写 npm i module 包名不会注入到 package.json（别人会不知道依赖啥） <ul><li>好像最新规则是不写也默认 -S 注入依赖</li></ul></li></ul></li><li><p><code>npm uni packageName</code></p></li><li><p><code>npm list -g --depth 0</code></p><ul><li><code>npm list --depth= &lt; 0 || 1 || 2 || ... &gt; &lt; --global &gt;</code></li><li>显示 出我们的项目中安装了哪些模块，</li><li>其实就是 package.json 文件中 的 dependencies 和 devDependencies 的和</li></ul></li><li><p>npm cache clean --force 清除缓存</p></li></ul><h2 id="pnpm" tabindex="-1"><a href="https://pnpm.io/zh/" target="_blank" rel="noreferrer">pnpm</a> <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;[pnpm](https://pnpm.io/zh/)&quot;">​</a></h2><ul><li><a href="https://pnpm.io/zh/cli/env" target="_blank" rel="noreferrer">pnpm env <code>&lt;cmd&gt;</code></a> 管理Node.js环境 跟<code>nvm</code>功能一样</li></ul><h2 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h2><ul><li><code>sudo npm i -g yarn</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (npm i)         </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        yarn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install xxx             </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        yarn add xxx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm uninstall xxx           </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        yarn remove xxx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install xxx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dev       </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        yarn add xxx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dev</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install xxx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global    </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        yarn global add xxx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm update                  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        yarn upgrade</span></span></code></pre></div><h2 id="好用的npm包" tabindex="-1">好用的npm包 <a class="header-anchor" href="#好用的npm包" aria-label="Permalink to &quot;好用的npm包&quot;">​</a></h2><ul><li>浏览器里可以直接调试各种包 安装浏览器插件<code>Console Import</code> 可以在控制台直接<code>$i([packageName])</code>导入包 就可以直接在控制台调试<code>$i(&#39;dayjs&#39;)</code></li></ul>`,36),l=[p];function t(h,d,k,r,o,c){return a(),i("div",null,l)}const m=s(e,[["render",t]]);export{g as __pageData,m as default};
