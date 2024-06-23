import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.JknIMk6Q.js";const g=JSON.parse('{"title":"网络","description":"","frontmatter":{},"headers":[],"relativePath":"js/网络.md","filePath":"js/网络.md"}'),l={name:"js/网络.md"},h=n(`<h1 id="网络" tabindex="-1">网络 <a class="header-anchor" href="#网络" aria-label="Permalink to &quot;网络&quot;">​</a></h1><ul><li><a href="#ifconfig">查看本机网格情况包括当前当前局域网分配的地址</a></li></ul><h2 id="http" tabindex="-1">http <a class="header-anchor" href="#http" aria-label="Permalink to &quot;http&quot;">​</a></h2><ul><li>100、10、192、172开头的一般是内网（局域网）IP</li><li>像一些http服务配置 <code>host: &#39;localhost&#39;</code> 则表示可能 <code>本机</code> 能访问 <a id="http.host=0.0.0.0"></a><ul><li>通过 <code>127.0.0.1:8888</code> 或者 <code>localhost:8888</code>来访问该服务</li></ul></li><li>像一些http服务配置 <code>host: &#39;0.0.0.0&#39;</code> 则表示 <code>本机</code> 和 <code>局域网</code> 都能访问 <ul><li>局域网内其他设备 可通过<code>局域网给把http服务的分配的ip地址 (ipv4)</code>来访问） <ul><li>或者手动配置IP地址：在网络“配置IPv4”或“配置IPv6”部分，选择“手动”，然后在“IP地址”、“子网掩码”和“路由器”字段中输入你想要的值172.10.100.100</li></ul></li><li>如何访问？ 让http服务设备 【<code>ipconfig | ifconfig</code>】来找到本机在局域网的ip地址 其他设备通过这个ip地址即可访问</li></ul></li></ul><h2 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h2><p><a href="http://javascript.ruanyifeng.com/bom/cors.html" target="_blank" rel="noreferrer">cors（Cross-origin resource sharing 跨域资源共享）</a></p><p><a href="https://www.jianshu.com/p/89a377c52b48" target="_blank" rel="noreferrer">文章 1</a><a href="https://www.cnblogs.com/lxg0/p/http.html" target="_blank" rel="noreferrer">文章 2-header 标头说明</a></p><h3 id="跨域是浏览器的一种安全策略-浏览器只允许请求当前域的资源-而对其他域的资源表示不信任" tabindex="-1">跨域是浏览器的一种安全策略，浏览器只允许请求当前域的资源，而对其他域的资源表示不信任 <a class="header-anchor" href="#跨域是浏览器的一种安全策略-浏览器只允许请求当前域的资源-而对其他域的资源表示不信任" aria-label="Permalink to &quot;跨域是浏览器的一种安全策略，浏览器只允许请求当前域的资源，而对其他域的资源表示不信任&quot;">​</a></h3><ul><li>满足3点 <code>协议 域 端口</code> 都相同 <ul><li>请求协议<code>http,https</code></li><li>域<code>domain</code></li><li>端口<code>port</code></li></ul></li></ul><h3 id="要解决跨域问题-您可以采取以下一些方法" tabindex="-1">要解决跨域问题，您可以采取以下一些方法 <a class="header-anchor" href="#要解决跨域问题-您可以采取以下一些方法" aria-label="Permalink to &quot;要解决跨域问题，您可以采取以下一些方法&quot;">​</a></h3><ol><li><p>代理服务器：前端配置一个代理服务器（@vue/cli-service），将前端请求转发到目标服务器，从而<code>绕过\`\`浏览器同源策略产生的跨域问题</code>只有本地开发使用。</p><ul><li><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> devServer 配置项允许你在 webpack 配置中定义一个开发服务器，以便在开发过程中运行和测试你的应用程序。它提供了许多功能和选项，如：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 1. Hot Module Replacement (HMR)：在不刷新整个页面的情况下，实现模块的热更新，使得修改的代码能够立即生效，提高开发效率。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 2. 自动刷新：在更改代码后自动刷新浏览器页面，以便查看更新后的效果。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 3. 代理：配置代理服务器，用于转发请求，解决跨域问题。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 4. 历史API回退：当使用 HTML5 历史路由时，通过指定 historyApiFallback 可以确保在找不到路由时返回指定的页面，例如单页应用中的路由页面。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 5. 内容基础路径：指定提供静态资源的路径，常用于处理前端路由和资源文件在不同路径下的情况。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 6. 自定义中间件：允许你在请求到达前端应用程序之前自定义处理请求的中间件函数。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> devServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0.0.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // port: process.env.port || process.env.npm_config_port || 80, // 端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1026</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     proxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       &#39;^/proxy/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://grtzh.ysb.qz.gov.cn:8093&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         changeOrigin: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//是否跨域</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         secure: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果是https接口，需要配置这个参数为true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         logLevel: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;debug&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         pathRewrite: {              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//重写路径</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           &#39;^/proxy/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       &#39;^/proxy-8090/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://grtzh.ysb.qz.gov.cn:8090&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//[已经开启https] 在请求http://grtzh.ysb.qz.gov.cn:8090时 重定向到了 https://grtzh.ysb.qz.gov.cn:8090 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         changeOrigin: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//是否跨域</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         secure: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果是https接口，需要配置这个参数为true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         logLevel: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;debug&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         pathRewrite: {              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//重写路径</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           &#39;^/proxy-8090/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/prod-api/&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   },</span></span></code></pre></div></li></ul></li><li><p>JSONP：使用JSONP（JSON with Padding）是一种通过动态创建<code>&lt;script&gt;</code>标签来进行跨域请求的方法。服务器返回的响应会被包裹在一个函数调用中，以便在前端进行处理。</p></li><li><p>CORS（跨域资源共享）：配置目标服务器允许跨域请求，可以通过在服务器的响应头中添加正确的Access-Control-Allow-Origin等跨域配置来实现。</p><ul><li><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">respose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  headers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;Access-Control-Allow-Origin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//如果跨域则服务器不通过，根本没有这个字段，      接着触发 XHR 的 onerror，再接着你就看到浏览器的跨域提示 xxx 的服务器没有响应 Access-Control-Allow-Origin 字段</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 前端拿到 respose.headers 只有默认几个 需后端设置响应头\`Access-Control-Expose-Headers\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 如果后端将信息写在 respose 响应头里  后端可设置响应头respose.headers暴露该字段 示例\`Access-Control-Expose-Headers:&#39; Content-Disposition, content-type, cache, ...&#39;\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul></li></ol><h2 id="请求接口时返回302重定向或请求失败" tabindex="-1">请求接口时返回<code>302重定向</code>或<code>请求失败</code> <a class="header-anchor" href="#请求接口时返回302重定向或请求失败" aria-label="Permalink to &quot;请求接口时返回\`302重定向\`或\`请求失败\`&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当目标网站开启了 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTTPS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，并且您发送的请求使用了 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTTP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 协议，会发生以下情况之一：</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 自动重定向到 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTTPS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   大多数情况下，如果目标网站开启了 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTTPS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，并且您发送的请求使用了 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTTP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，服务器会自动将您的请求重定向到相应的 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTTPS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 地址。这是为了确保数据的安全性和加密传输。浏览器会收到服务器返回的重定向响应，并自动重新发送相同的请求，但使用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTTPS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 协议。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 请求失败：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   在某些情况下，服务器可能不会对 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTTP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 请求进行重定向，而是直接拒绝该请求。这是因为目标网站强制要求使用HTTPS，并禁用了HTTP。在这种情况下，您发送的HTTP请求将无法成功，服务器会返回错误响应或拒绝连接。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">具体的行为取决于目标网站的服务器配置和安全策略。有些网站可能会返回特定的错误代码（如HTTP </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">403</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Forbidden），并在响应中说明需要使用HTTPS。其他网站可能会直接关闭连接或返回其他错误码。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">因此，当目标网站开启了HTTPS，但您发送的请求使用了HTTP时，通常会发生自动重定向到HTTPS或请求失败的情况。为了确保与目标网站的通信安全，建议始终使用正确的协议（HTTP或HTTPS）发送请求。</span></span></code></pre></div><h2 id="local-network" tabindex="-1">local | network <a class="header-anchor" href="#local-network" aria-label="Permalink to &quot;local | network&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`➜  Local:   http://localhost:6678/\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // localhost 和 127.0.0.1\`一样 是供当前电脑访问的地址，仅供你自己访问，</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`➜  Network: &lt;http://172.16.113.163:6678/\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // \`ifconfig | grep &quot;inet&quot; | grep -v 127.0.1\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // network 既当前电脑 | 局域网内的其他成员 都可以访问。( 同一网络 wifi，)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 比如你和你的同事都是连接的公司的网络，处于同一网段，如果你的同事想访问你跑的项目，那么就可以通过 network 地址进行访问，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 或者你需要在手机上浏览效果，你打开手机浏览器输入Network这个地址即可浏览。</span></span></code></pre></div><h2 id="http-server-打包本地调试" tabindex="-1">http-server 打包本地调试 <a class="header-anchor" href="#http-server-打包本地调试" aria-label="Permalink to &quot;http-server 打包本地调试&quot;">​</a></h2><p>本地项目打包后 使用http-server 在本地查看项目 -P 跨域转发目标 <code>http-server -p 8080 -P http://10.0.5.64:8888/</code></p><h2 id="web远程调试-pagespy" tabindex="-1">web远程调试 PageSpy <a class="header-anchor" href="#web远程调试-pagespy" aria-label="Permalink to &quot;web远程调试 PageSpy&quot;">​</a></h2><ul><li><a href="https://mp.weixin.qq.com/s/Vcm4m5HQ7P6lc0q0nIlYfg" target="_blank" rel="noreferrer">由货拉拉大前端开源的一款用于调试H5 或者远程web项目的工具</a></li></ul><h2 id="reqable小黄鸟抓包" tabindex="-1"><a href="https://reqable.com/zh-CN/" target="_blank" rel="noreferrer">Reqable小黄鸟抓包</a> <a class="header-anchor" href="#reqable小黄鸟抓包" aria-label="Permalink to &quot;[Reqable小黄鸟抓包](https://reqable.com/zh-CN/)&quot;">​</a></h2><h2 id="防火墙" tabindex="-1">防火墙 <a class="header-anchor" href="#防火墙" aria-label="Permalink to &quot;防火墙&quot;">​</a></h2><p><a href="https://googles.plus/2021/11/25/qian-xi-zhong-guo-guo-jia-fang-huo-qiang-gfw-ji-qi-zhu-yao-ji-zhu/" target="_blank" rel="noreferrer">数据跨境安全网关 - 中国国家防火墙 - 防火长城 - GFW</a></p><p>被墙 对国外的网站的封锁</p><ol><li><p><strong>DNS污染</strong>：这是一种常见的封锁技术，通过篡改DNS响应，使得当用户尝试访问某个网站时，返回错误的IP地址，导致无法正常访问该网站</p></li><li><p><strong>关键词过滤</strong>：通过监控和分析网络流量中的关键字，识别并封锁那些包含敏感词汇或短语的网页请求</p></li><li><p><strong>IP地址封锁</strong>：直接封锁某些外国网站的IP地址，使得国内的用户无法连接到这些网站3。</p></li><li><p><strong>URL过滤</strong>：通过分析HTTP请求的URL，识别并封锁那些指向被封锁网站的请求3。</p></li><li><p><strong>内容审查</strong>：对于能够访问的网站，有时也会对其内容进行审查，删除或修改某些敏感信息3。</p></li></ol>`,24),t=[h];function e(p,k,r,E,d,o){return a(),i("div",null,t)}const y=s(l,[["render",e]]);export{g as __pageData,y as default};
