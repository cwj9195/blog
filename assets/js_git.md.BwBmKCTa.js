import{_ as i,c as s,o as e,a4 as a}from"./chunks/framework.JknIMk6Q.js";const t="/blog/assets/image.BA2pkV9G.png",l="/blog/assets/image3.BfB2A2II.png",n="/blog/assets/image2.L5CMZQCV.png",o="/blog/assets/image1.B06vpCDT.png",h="/blog/assets/image04091117.CMSCt_Zh.png",E=JSON.parse('{"title":"git","description":"","frontmatter":{},"headers":[],"relativePath":"js/git.md","filePath":"js/git.md"}'),c={name:"js/git.md"},d=a('<h1 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;git&quot;">​</a></h1><p><a href="https://docs.github.com/zh/enterprise-server@3.10" target="_blank" rel="noreferrer">github文档</a></p><p><img src="'+t+'" alt="alt text"><img src="'+l+'" alt="git常用操作"><img src="'+n+'" alt="alt text"><img src="'+o+`" alt="alt text"></p><h2 id="克隆、用户信息、连接远程仓库" tabindex="-1">克隆、用户信息、连接远程仓库 <a class="header-anchor" href="#克隆、用户信息、连接远程仓库" aria-label="Permalink to &quot;克隆、用户信息、连接远程仓库&quot;">​</a></h2><ul><li><code>git init</code> // 初始化</li><li><code>git config --[system || global || local] --list</code></li><li><code>git config --[system || global || local] user.[email || name] &#39;Amoy&#39;</code></li><li><code>git clone -b v2.8.1 https:...</code> // 解释一下这个命令：-b 表示要从分支下载，v2.8.1 就是具体的某个分支的名称</li><li><code>git clone -b v2.8.1 https:... [new name]</code> // 下载分支重命名</li><li><code>git remote add &lt; 仓库别名 origin | Amoy &gt; https://gitee.com/...</code> //链接远程仓库</li><li><code>git remote set-url &lt; 仓库别名 origin | Amoy &gt; https://gitee.com/...</code> //链接远程仓库 <ul><li>可添加多个仓库地址</li></ul></li><li><code>git remote rm &lt; 仓库别名 origin | Amoy &gt;</code> //移除远程仓库</li><li><code>git remote -v</code> 查看连接的所有仓库</li></ul><h2 id="本地分支-branch-checkout" tabindex="-1">本地分支 branch checkout <a class="header-anchor" href="#本地分支-branch-checkout" aria-label="Permalink to &quot;本地分支 branch checkout&quot;">​</a></h2><ul><li><code>git branch</code> //查看本地所有分支</li><li><code>git branch -r</code> //查看远程所有分支</li><li><code>git branch -a</code> //查看本地和远程的所有分支</li><li><code>git branch [branchNmae]</code> //新建分支</li><li><code>git branch -d [branchNmae]</code> //删除本地 branchNmae 分支</li><li><code>git branch -D [branchNmae]</code> //强制删除分支</li><li><code>git branch -m [oldbranch] [newbranch]</code> //重命名本地分支</li><li><code>git checkout [branchNmae]</code> //切换分支</li><li><code>git checkout -b [branchNmae]</code> //创建分支并切换分支</li><li><code>git checkout -b 本地分支名 远程仓库别名/远程分支名</code> //从远程分支上创建本地分支并切换分支</li><li><code>git checkout -f [branchNmae]</code> //-f 强制切换</li><li><code>git branch --set-upstream-to=origin/&lt;remoteBranch&gt; &lt;localBranch&gt;</code> //设置当前分支的上游</li></ul><h2 id="本地忽略后-删除远程上的文件" tabindex="-1">本地忽略后 删除远程上的文件 <a class="header-anchor" href="#本地忽略后-删除远程上的文件" aria-label="Permalink to &quot;本地忽略后  删除远程上的文件&quot;">​</a></h2><ul><li><code>git rm -r --cached 文件名</code></li></ul><h2 id="提交-暂存区-贮藏-还原" tabindex="-1">提交 暂存区 (贮藏，还原) <a class="header-anchor" href="#提交-暂存区-贮藏-还原" aria-label="Permalink to &quot;提交 暂存区 (贮藏，还原)&quot;">​</a></h2><ul><li><code>git add &lt; . | -u | -A &gt;</code> (提交到暂存区[.:修改过，新起的内容] [-A:所有的内容])</li><li><code>git clean</code> //清除 add 的文件</li><li><code>git stash list</code> 查看 stash 隐藏了哪些 （贮藏列表）</li><li>贮藏 <ul><li><code>git stash</code> （其将当前未提交的修改(即工作区和暂存区的修改)先暂时储藏起来。 git checkout 切换分支时用）</li><li><code>git stash save &quot;贮藏的信息&quot;</code> &#39;git stash + 贮藏信息&#39;</li></ul></li><li>还原 <ul><li><code>git stash pop stash@{0}</code> （还原暂存内容 stash@{0}并且删除该暂存 不加 stash@{}的话默认第一个）</li><li><code>git stash apply stash@{0}</code> （还原暂存但是不删除 与 pop 语法一样）</li></ul></li><li>删除 <ul><li><code>git stash drop stash@{0}</code> (丢弃 stash@{0}存储，从列表中删除这个存储 不加 stash@{}的话默认第一个)</li><li><code>git stash clear</code> (// 删除所有缓存的 stash)</li></ul><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">如果 git stash clear || git stash drop 文件不见 回不去了</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> git fsck --lost-found</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 复制 dangling commit 的 id（其他的 dangling blob 不用理会）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> git show [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">刚复制的那串</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> git merge [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">复制的</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   https://blog.csdn.net/qq_34400736/article/details/73732664</span></span></code></pre></div></li></ul><h3 id="commit相关-提交-回退" tabindex="-1">commit相关 （提交，回退） <a class="header-anchor" href="#commit相关-提交-回退" aria-label="Permalink to &quot;commit相关 （提交，回退）&quot;">​</a></h3><ul><li><code>git commit -m &#39; &#39;</code> （提交的版本库里面进去[-m:表示 message,&#39;&#39;里写版本信息]）</li><li><code>git status</code> (查看提交的状态，暂存区还是已经提交好了)</li><li><code>git log</code> (查看以前提交的所有版本 日志[按 Q 退出])</li><li><code>git reflog</code> (可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）</li><li><code>git reflog --date=iso</code> (加上时间)</li><li><code>git reset </code><ul><li><code>git reset --hard</code>：它会重置HEAD指针到一个指定的提交，并且清空暂存区和工作区的改动。 <ul><li><code>git reset --hard HEAD^</code> (直接回到上个版本号[^:表示上一个,^^:上上一个])</li><li><code>git reset --hard 546c347</code> (重设 回到之前的某个版本[hard 后面跟一个版本号])</li><li><code>git reset --hard origin/master</code> 重置本地分支为远程仓库的 master 分支</li></ul></li><li><code>git reset --soft</code>：<strong>它会保留工作区和暂存区的改动，但是会重置HEAD指针到一个指定的提交。</strong></li><li><code>git reset --mixed</code>（默认）：它会重置HEAD指针到一个指定的提交，并且清空暂存区，但是保留工作区的改动。</li></ul></li><li><code>git help</code> (命令不熟，用这个命令来查)</li></ul><h3 id="push-pull-相关-推送到远程分支-下载远程分支到本地" tabindex="-1">push | pull 相关 （推送到远程分支 下载远程分支到本地） <a class="header-anchor" href="#push-pull-相关-推送到远程分支-下载远程分支到本地" aria-label="Permalink to &quot;push | pull 相关 （推送到远程分支 下载远程分支到本地）&quot;">​</a></h3><ul><li><code>git push origin --delete [name]</code> //删除远程分支</li><li><code>git push origin Amoy</code> //推到源点 叫 Amoy 的分支上</li><li><code>git push origin Amoy:master</code> //将本地分支 Amoy 推到另一个分支 master <ul><li><code>Amoy:master 从哪到哪 pull</code> 刚好想反</li></ul></li><li><code>git push origin Amoy:master -f</code> //将本地分支推到另一个分支 -f 强制</li><li><code>git push origin master -f</code> //加了-f 表示强制</li><li><code>git pull origin master</code> //拉取远程主分支 <ul><li>相当于 git pull = - git fetch(取) + - git merge(合并)</li></ul></li><li><code>git pull origin master:Amoy</code> //拉取远程分支 master 到本地 Amoy 这个分支</li><li><code>git fetch origin Amoy:tem</code> (远程 Amoy 分支下载到 tem 分支)</li><li><code>git merge Amoy</code>(合并 Amoy 分支到当前分支)</li></ul><h2 id="静态网页" tabindex="-1">静态网页 <a class="header-anchor" href="#静态网页" aria-label="Permalink to &quot;静态网页&quot;">​</a></h2><ul><li><a href="https://pages.github.com/" target="_blank" rel="noreferrer">github pages</a></li><li><a href="https://vercel.com/" target="_blank" rel="noreferrer">vercel</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vercel是我用过的最好用的网站托管服务。本网站就是基于hexo引擎模板开发，托管在vercel上的。</span></span>
<span class="line"><span>vercel类似于github page，但远比github page强大，速度也快得多得多，而且将Github授权给vercel后，可以达到最优雅的发布体验，只需将代码轻轻一推，项目就自动更新部署了。</span></span>
<span class="line"><span>vercel还支持部署serverless接口。那代表着，其不仅仅可以部署静态网站，甚至可以部署动态网站，而这些功能，统统都是免费的，简直是白嫖党的福利啊！！！！！</span></span>
<span class="line"><span>vercel还支持自动配置https，不用自己去FreeSSL申请证书，更是省去了一大堆证书的配置，简直是懒人的福利啊啊啊有木有！</span></span></code></pre></div><h2 id="gitHook" tabindex="-1">git hook (git 生命周期函数 勾子) <a class="header-anchor" href="#gitHook" aria-label="Permalink to &quot;git hook (git 生命周期函数 勾子) {#gitHook}&quot;">​</a></h2><p><a href="https://blog.csdn.net/cookcyq__/article/details/125457031" target="_blank" rel="noreferrer">代码规范 &amp; 详细解释 husky、prettier、eslint、lint-staged 的作用和使用</a><a href="https://blog.csdn.net/du_aitiantian/article/details/130326158" target="_blank" rel="noreferrer">详细说明使用husky规范前端项目搭建</a></p><p>在介绍之前，首先要理解什么是 hook（钩子），在前端 Vue 框架中提供了 beforCreated、created、beforeMounted、mounted 等函数、这些函数都是钩子，也常被称为‘生命周期钩子函数’，它们会在 Vue 实例化过程中有序地执行。</p><ul><li>在 Git 中也存在一些钩子，其中较常用的有 <code>pre-push</code>、<code>pre-commit</code> （提示：所有钩子默认情况下是禁用的） <ul><li><code>pre-commit</code> 钩子会在 commit 前触发，</li><li><code>commit-msg</code> 在提交消息（commit message）被创建后，但提交操作尚未完成之前触发，用于校验提交消息的格式和内容。</li><li><code>pre-push</code> 会在 push 前触发。</li></ul></li></ul><p>比方我们可以利用pre-commit 钩子在 commit 时对代码先进行 eslint 检查，如果不合格就不给 commit， 不过使用 git 钩子稍微麻烦，于是就有了 husky ，它能让我们使用 git 钩子变得更加容易。</p><h3 id="husky" tabindex="-1"><a href="https://typicode.github.io/husky/" target="_blank" rel="noreferrer">husky</a> <a class="header-anchor" href="#husky" aria-label="Permalink to &quot;[husky](https://typicode.github.io/husky/)&quot;">​</a></h3><ul><li>可以防止使用 Git hooks 的一些不好的 commit 或者 push。</li><li>操作git hook的工具，主要实现代码提交前 eslint 校验和 commit 信息的规范校验,也可以避免多人合作时代码格式化不统一造成的冲突</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .husky/pre-commit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 写入多行 cat &lt;&lt;EOF</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./.husky/pre-commit</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">. &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(dirname -- &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0&quot;)/_/husky.sh&quot; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">start=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(date +%s)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npx lint-staged</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(date +%s)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">time=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">((end - start))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">echo &quot;代码执行时间：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">time 秒&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .husky/commit-msg</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./.husky/pre-commit</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">. &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(dirname -- &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0&quot;)/_/husky.sh&quot; </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npx commitlint -E HUSKY_GIT_PARAMS</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span></code></pre></div><ul><li>忽略 <code>pre-commit</code> 钩子，直接提交上去。 <ul><li><code>git commit -m &#39;msg&#39; --no-verify</code></li><li><code>git commit -m &#39;msg&#39; -n</code></li></ul></li></ul><h3 id="lint-staged" tabindex="-1">lint-staged <a class="header-anchor" href="#lint-staged" aria-label="Permalink to &quot;lint-staged&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;lint-staged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;**/*.{vue,ts,js,jsx,tsx}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint --config eslint.config.js --fix&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>让 <code>eslint</code> 只检查&amp;修复 暂存区的 文件 有没有办法能让这些工具只检查&amp;修复我们修改过的文件就好呢？ lint-staged 就可以做到。 lint-staged 能让这些插件只扫描暂存区的文件而不是全盘扫描</p><h3 id="eslint" tabindex="-1"><a href="https://eslint.org/docs/latest/" target="_blank" rel="noreferrer">eslint</a> <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;[eslint](https://eslint.org/docs/latest/)&quot;">​</a></h3><p><a href="https://zh-hans.eslint.org/docs/latest/use/getting-started" target="_blank" rel="noreferrer">eslint中文</a></p><p><a href="https://eslint.nodejs.cn/docs/latest/" target="_blank" rel="noreferrer">eslint翻译</a></p><h2 id="commitlint-提交规范" tabindex="-1">commitlint 提交规范 <a class="header-anchor" href="#commitlint-提交规范" aria-label="Permalink to &quot;commitlint 提交规范&quot;">​</a></h2><ul><li><p><code>build</code> 编译相关的修改，例如发布版本、对项目构建或者依赖的改动</p></li><li><p><code>chore</code> 其他修改, 比如改变构建流程、或者增加依赖库、工具等</p></li><li><p><code>ci</code> 持续集成修改</p></li><li><p><code>docs</code> 文档修改</p></li><li><p><code>feat</code> 新特性、新功能</p></li><li><p><code>fix</code> 修改 bug</p></li><li><p><code>perf</code> 优化相关，比如提升性能、体验</p></li><li><p><code>refactor</code> 代码重构</p></li><li><p><code>revert</code> 回滚到上一个版本</p></li><li><p><code>style</code> 代码格式修改, 注意不是 css 修改</p></li><li><p><code>test</code> 测试用例修改</p></li><li><p>feat: 新特性，添加功能</p></li><li><p>fix: 修改 bug</p></li><li><p>refactor: 代码重构</p></li><li><p>docs: 文档修改</p></li><li><p>style: 代码格式修改, 注意不是 css 修改</p></li><li><p>test: 测试用例修改</p></li><li><p>chore: 其他修改, 比如构建流程, 依赖管理</p></li></ul><h2 id="vscode-git-中的-u-m-和-d-文件标记含义" tabindex="-1">vscode-git 中的 U,M 和 D 文件标记含义 <a class="header-anchor" href="#vscode-git-中的-u-m-和-d-文件标记含义" aria-label="Permalink to &quot;vscode-git 中的 U,M 和 D 文件标记含义&quot;">​</a></h2><ul><li><code>A</code> 工作区新增的文件.</li><li><code>C</code> 文件的一个新拷贝.</li><li><code>D delete</code> 你删除了这个文件，vscode-git 会记录下这个状态 你本地删除的文件，服务器上还在。</li><li><code>M modified</code> 你已经在 github 中添加过该文件，然后你对这个文件进行了修改，就会文件后标记 M</li><li><code>U untracked</code> 你在本地新建了这个文件，还未提交到 github 上，就会标记 U 文件没有被合并，需要完成合并才能进行提交</li><li><code>6,U</code> 表示有 6 个错误且 untracked</li><li><code>R</code> 文件名被修改了。</li><li><code>T</code> 文件的类型被修改了。</li><li><code>X</code> 未知状态。</li></ul><h2 id="svn" tabindex="-1">svn <a class="header-anchor" href="#svn" aria-label="Permalink to &quot;svn&quot;">​</a></h2><h3 id="install" tabindex="-1">install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;install&quot;">​</a></h3><ul><li>安装 brew <code>/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;</code></li><li>安装 svn <code>brew install subversion</code></li><li>查看 version <code>svnserve --version</code> || <code>svn --version</code></li><li>pull project 拉取项目 <ul><li><code>svn checkout [svn 项目地址] --username=xxx --password=xxx</code></li><li><code>svn 地址:svn://域名:/项目目录</code></li></ul></li></ul><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="git远程分支有更新-但是本地已经commit的时候怎么办" tabindex="-1"><a href="https://blog.csdn.net/luoqiang_sky/article/details/119323797" target="_blank" rel="noreferrer">git远程分支有更新，但是本地已经commit的时候怎么办？</a> <a class="header-anchor" href="#git远程分支有更新-但是本地已经commit的时候怎么办" aria-label="Permalink to &quot;[git远程分支有更新，但是本地已经commit的时候怎么办？](https://blog.csdn.net/luoqiang_sky/article/details/119323797)&quot;">​</a></h3><p><img src="`+h+'" alt="alt text"></p><p>这种是远程分支已经更新了,正常<code>git pull</code>拉下来没冲突会自动合并,但是我本地又有<code>commit</code>提交,所有<code>push无法成功</code>有冲突</p><ul><li>像这种情况本地提交的<code>commit</code> 就一次，就可以直接</li></ul><ol><li><code>git reset --soft HEAD^</code> 撤销上一次提交</li><li><code>git pull</code> 拉取更新</li><li><code>git commit -m &#39;&#39;</code> 重新commit</li><li><code>git push</code></li></ol><h3 id="reset-和-revert" tabindex="-1">reset 和 revert <a class="header-anchor" href="#reset-和-revert" aria-label="Permalink to &quot;reset 和 revert&quot;">​</a></h3>',47),r=[d];function p(k,g,u,m,F,y){return e(),s("div",null,r)}const f=i(c,[["render",p]]);export{E as __pageData,f as default};
