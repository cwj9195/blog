import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.JknIMk6Q.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"mac/乱七八糟的技巧.md","filePath":"mac/乱七八糟的技巧.md"}'),t={name:"mac/乱七八糟的技巧.md"},h=n(`<h2 id="给主机预设wifi账号密码" tabindex="-1">给主机预设wifi账号密码 <a class="header-anchor" href="#给主机预设wifi账号密码" aria-label="Permalink to &quot;给主机预设wifi账号密码&quot;">​</a></h2><ol><li>在桌面创建以下内容的文件以wifi_config.xml命名 将&quot;Wi-Fi名称&quot;替换为您家里Wi-Fi的名称（SSID），将&quot;Wi-Fi密码&quot;替换为您家里Wi-Fi的密码<div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">WLANProfile</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xmlns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.microsoft.com/networking/WLAN/profile/v1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Wi-Fi名称&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SSIDConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SSID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Wi-Fi名称&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SSID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SSIDConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">connectionType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;ESS&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">connectionType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">connectionMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;auto&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">connectionMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MSM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">security</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">authEncryption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">authentication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;WPA2PSK&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">authentication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">encryption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;AES&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">encryption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">useOneX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;false&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">useOneX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">authEncryption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sharedKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">keyType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;passPhrase&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">keyType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">protected</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;false&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">protected</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">keyMaterial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Wi-Fi密码&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">keyMaterial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sharedKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">security</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MSM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">WLANProfile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li><li><code>netsh wlan add profile filename=&quot;C:\\Users\\cwj91\\Desktop\\wifi_config.txt.txt&quot;</code></li></ol>`,2),l=[h];function k(E,p,e,r,g,d){return a(),i("div",null,l)}const o=s(t,[["render",k]]);export{c as __pageData,o as default};
