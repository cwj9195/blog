import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.JknIMk6Q.js";const c=JSON.parse('{"title":"Vue","description":"","frontmatter":{},"headers":[],"relativePath":"js/vue.md","filePath":"js/vue.md"}'),l={name:"js/vue.md"},e=t(`<h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h1><ul><li>单向数据流 [数据向下，事件向上] <ul><li>父组件可以向子组件传递数据,并且改变子组件的值,而子组件不能改变父组件传递给它的 prop 属性，官方推荐的做法是它抛出事件，通知父组件自行改变绑定的值。</li><li>在Vue中，我们可以使用v-bind实现单项的数据绑定，也就是通过父组件向子组件传入数据 ，但是反过来，子组件不可以修改父组件传递过来的数据 ，这也就是所谓的单向数据绑定。</li></ul></li></ul><h2 id="vue-1" tabindex="-1">vue <a class="header-anchor" href="#vue-1" aria-label="Permalink to &quot;vue&quot;">​</a></h2><h3 id="v-model" tabindex="-1">v-model <a class="header-anchor" href="#v-model" aria-label="Permalink to &quot;v-model&quot;">​</a></h3><ul><li>[v-model] 绑定的是input事件</li><li>[v-model.lazy] 绑定的是change事件</li><li>[v-model.trim] 自动过滤用户的空白字符</li><li>[v-model.number] 转换为数字</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">message</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- 上面等价于下面 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">message</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$event.target.value </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 父组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">child</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">message</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">userName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">userName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 等价于 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">modelValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">message</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">modelValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$event</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">userName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">userName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">userName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">userName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$event</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 子组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vue3.4之后更推荐 defineModel()来定义上面的 defineProps defineEmits</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> userName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;userName&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 上面的宏会编译解构成这下面这样</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;modelValue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;userName&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> emit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineEmits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;update:modelValue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;update:userName&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props.modelValue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;update:modelValue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $event.target.value)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- 或者 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;update:modelValue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;更新&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>vue3.4之后 可以直接使用便利宏<code>defineModel()</code></p><h2 id="vuerouter" tabindex="-1">vueRouter <a class="header-anchor" href="#vuerouter" aria-label="Permalink to &quot;vueRouter&quot;">​</a></h2><p><a href="https://mp.weixin.qq.com/s?__biz=MzI3NTM5NDgzOA%3D%3D&amp;chksm=eb043e8cdc73b79a16f3982662041aed684b63198d772d3b6a47b5a89816e524e09dd8d92781&amp;idx=1&amp;lang=zh_CN&amp;mid=2247485173&amp;scene=21&amp;sn=0eb7739aaf8e456d1b7a58dd353107ef&amp;token=1581050816#wechat_redirect" target="_blank" rel="noreferrer">深入揭秘前端路由本质，手写 mini-router</a></p><h3 id="页面保活" tabindex="-1">页面保活 <a class="header-anchor" href="#页面保活" aria-label="Permalink to &quot;页面保活&quot;">​</a></h3><h2 id="provide-依赖提供-inject-依赖注入" tabindex="-1"><code>provide</code> (依赖提供) <code>inject</code> (依赖注入) <a class="header-anchor" href="#provide-依赖提供-inject-依赖注入" aria-label="Permalink to &quot;\`provide\` (依赖提供) \`inject\` (依赖注入)&quot;">​</a></h2><p>当提供 / 注入响应式的数据时，建议尽可能将任何对响应式状态的变更都保持在供给方组件中。这样可以确保所提供状态的声明和变更操作都内聚在同一个组件内，使其更容易维护。</p><p>有的时候，我们可能需要在注入方组件中更改数据。在这种情况下，我们推荐在供给方组件内声明并提供一个更改数据的方法函数：</p><p>如果你想确保提供的数据不能被注入方的组件更改，你可以使用 readonly() 来包装提供的值。</p><ul><li><a href="https://cn.vuejs.org/guide/components/provide-inject.html#provide" target="_blank" rel="noreferrer">provide</a></li><li><a href="https://cn.vuejs.org/guide/components/provide-inject.html#inject" target="_blank" rel="noreferrer">inject</a></li></ul><h2 id="devtools-谷歌浏览器插件" tabindex="-1">devTools 谷歌浏览器插件 <a class="header-anchor" href="#devtools-谷歌浏览器插件" aria-label="Permalink to &quot;devTools  谷歌浏览器插件&quot;">​</a></h2><p>如果使用了vite插件<code>vite-plugin-vue-devtools</code> 会替换掉浏览器控制台的<code>vue选项卡</code> ，选项卡会消失 取而代之的是嵌在页面里的插件</p><h2 id="ant-design-vue" tabindex="-1">ant-design-vue <a class="header-anchor" href="#ant-design-vue" aria-label="Permalink to &quot;ant-design-vue&quot;">​</a></h2><h3 id="form-row-rol-formitem" tabindex="-1"><code>form</code>-&gt;<code>row</code>-&gt;<code>rol</code>-&gt;<code>formItem</code> <a class="header-anchor" href="#form-row-rol-formitem" aria-label="Permalink to &quot;\`form\`-&gt;\`row\`-&gt;\`rol\`-&gt;\`formItem\`&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Row</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> gutter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;24&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">FormItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">label-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">item.labelCol </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> props.labelCol </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { span: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wrapper-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">item.wrapperCol </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> props.wrapperCol </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { flex: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       label:标题， 如果Row=24份(每行分24份),col=12份(每列占12份)。formItem.labelCol.span=24则意味着占居的是col的24份，占row的一半</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       wrapper:输入控件， 如果Row=24份(每行分24份),col=12份(每列占12份)。formItem.wrapperCol.span=24则意味着占居的是col的24份，占row的一半</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt; /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">FormItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="vue3-ts" tabindex="-1">vue3+ts <a class="header-anchor" href="#vue3-ts" aria-label="Permalink to &quot;vue3+ts&quot;">​</a></h2><p>这种项目涉及到的几个概念 项目的依赖包 <code>typescript依赖包</code> | <code>vue-tsc</code> &amp; 跟 <code>vscode内置的ts编译器</code> | <code>vscode的vue-official插件</code> 都会用到<code>tsconfig.json</code>配置文件</p><ul><li>vscode<code>内置的ts编译器</code><ul><li>对应项目的<code>typescript依赖包</code></li><li><code>pnpm exec tsc -p tsconfig.json</code></li><li><code>TypeScript: Restart TS Server</code> 重启ts语言服务</li></ul></li><li>vscode<code>vue-official插件</code><ul><li>对应项目的<code>vue-tsc依赖包</code></li><li><code>pnpm exec vue-tsc -p tsconfig.json</code></li><li><code>Vue: Restart Vue and TS servers</code> 重启vue-official <ul><li>命令 &quot;Vue: Restart Vue and TS servers&quot; 导致错误 (需要编辑器打开一个<code>.vue</code> 的文件) <code>vue-official</code>的智能提示会覆盖原有<code>内置ts</code>的智能提示，</li></ul></li></ul></li><li>所有在启用<code>vue-official</code>插件时应对应的是<code>vue-tsc依赖包</code></li></ul><h2 id="tips" tabindex="-1">tips <a class="header-anchor" href="#tips" aria-label="Permalink to &quot;tips&quot;">​</a></h2><h3 id="记录-click和-click-native有什么区别-如何阻止第三方组件内部的冒泡" tabindex="-1"><a href="https://blog.csdn.net/qq_40716795/article/details/133025633" target="_blank" rel="noreferrer">记录--@click和@click.native有什么区别，如何阻止第三方组件内部的冒泡</a> <a class="header-anchor" href="#记录-click和-click-native有什么区别-如何阻止第三方组件内部的冒泡" aria-label="Permalink to &quot;[记录--@click和@click.native有什么区别，如何阻止第三方组件内部的冒泡](https://blog.csdn.net/qq_40716795/article/details/133025633)&quot;">​</a></h3><h3 id="withdefaults的第二个默认值参数里的属性如果是引用类型得用函数返回" tabindex="-1">withDefaults的第二个默认值参数里的属性如果是引用类型得用函数返回？ <a class="header-anchor" href="#withdefaults的第二个默认值参数里的属性如果是引用类型得用函数返回" aria-label="Permalink to &quot;withDefaults的第二个默认值参数里的属性如果是引用类型得用函数返回？&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> withDefaults</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  defineProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_FormProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    buttons</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//得以函数返回</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="volarjs" tabindex="-1"><a href="https://volarjs.dev/" target="_blank" rel="noreferrer">volarjs</a> <a class="header-anchor" href="#volarjs" aria-label="Permalink to &quot;[volarjs](https://volarjs.dev/)&quot;">​</a></h3><p>这是一个基于 Volar Framework 构建嵌入式语言工具的模板.</p><p>如果您正在从事类似的工作, 您可能会从 VSCode 的嵌入式编程语言章节开始. 如果没有, 我强烈建议您先仔细阅读.</p><p>文章提到了两种实现嵌入式语言支持的方法. 该模板属于&quot;带有语言服务的嵌入式语言的语言服务器&quot;方法的扩展, 但是我们抽象了所有您不需要关心的地方, 例如虚拟代码映射, 格式化编辑合并等.</p><p>与文章相同, 本模板以.html1 为例, 实现内嵌 HTML 和 CSS 的支持.</p><h3 id="vetur-插件在-vue3-中报错" tabindex="-1"><a href="https://www.jianshu.com/p/7348de8190f1" target="_blank" rel="noreferrer">vetur 插件在 vue3 中报错</a> <a id="2303291024"></a> <a class="header-anchor" href="#vetur-插件在-vue3-中报错" aria-label="Permalink to &quot;[vetur 插件在 vue3 中报错](https://www.jianshu.com/p/7348de8190f1) &lt;a id=&quot;2303291024&quot; /&gt;&quot;">​</a></h3><p>vue2 支持的插件 <code>vetur</code> vue3 支持的插件 ~~ <code>volar(vue language features) 作者已不维护</code> ~~ <code>Vue-Official</code></p><h3 id="如果不想禁用-vetur-又想启用-volar-可以在当前项目中的-vscode-文件夹的-settings-json-文件中配置禁用如下" tabindex="-1">如果不想禁用 vetur, 又想启用 volar, 可以在当前项目中的.vscode 文件夹的 settings.json 文件中配置禁用如下 <a class="header-anchor" href="#如果不想禁用-vetur-又想启用-volar-可以在当前项目中的-vscode-文件夹的-settings-json-文件中配置禁用如下" aria-label="Permalink to &quot;如果不想禁用 vetur, 又想启用 volar, 可以在当前项目中的.vscode 文件夹的 settings.json 文件中配置禁用如下&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// setting.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vetur.validation.template&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vetur.validation.script&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vetur.validation.style&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="有个场景-两个-vue-项目里使用了-eslint" tabindex="-1">有个场景 两个 vue 项目里使用了 eslint <a class="header-anchor" href="#有个场景-两个-vue-项目里使用了-eslint" aria-label="Permalink to &quot;有个场景 两个 vue 项目里使用了 eslint&quot;">​</a></h3><p><code>一个 eslin@^6 (使用老的配置方案 eslintrc.js) </code><code>一个 eslint@^8 (开启了新特性-faltConifg-在 v9.0.0.0 是默认开启的) </code></p><ul><li><p>这里有个问题 eslint@8 里开启新特性需要在 vscode 里设置环境变量 <code>&quot;eslint.experimental.useFlatConfig&quot;: true, </code> (需安装 vscode.eslint 插件) 才能开启该特性,</p><ul><li>但是我 <em>开启</em> 该设置之后: 在使用了 eslint@6 老配置方案的项目就无法使用 eslint 提示,</li><li>但是我 <em>关闭</em> 该设置之后: 在使用了 eslint@8 新配置方案的项目就无法使用 eslint 提示,</li></ul></li><li><p>那这个时候就可以引入 <code>.vscode/settings.json</code> 了,</p><ul><li><p>可以将全局用户配置 <code>user.settings</code> 里 <em>关闭</em> <code>&quot;eslint.experimental.useFlatConfig&quot;: false, </code> 该特性</p></li><li><p>在使用 <code>@eslint@^8</code> 且开启 <code>flatConfig</code> 功能的项目根目录里创建 <code>.vscode/settings.json</code> 来开启 eslint 插件的这个特性</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;eslint.experimental.useFlatConfig&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div></li></ul></li></ul>`,40),n=[e];function h(k,p,E,r,d,o){return a(),i("div",null,n)}const y=s(l,[["render",h]]);export{c as __pageData,y as default};
