import{_ as h,c as l,m as s,a as i,J as t,a4 as a,E as k,o as p}from"./chunks/framework.JknIMk6Q.js";const e="/blog/assets/240602.7tAbsmTS.png",m=JSON.parse('{"title":"TypeScript教程.阮一峰.网道","description":"","frontmatter":{},"headers":[],"relativePath":"js/TypeScript.md","filePath":"js/TypeScript.md"}'),r={name:"js/TypeScript.md"},d=a("",3),E=a("",14),g=a("",4),y=s("ul",null,[s("li",null,[s("p",null,[s("code",null,"compileOnSave"),i(" 行为开关")])]),s("li",null,[s("p",null,[s("code",null,"typeAcquisition"),i(" 本项目中的自动类型检查，2.1 以上支持")])]),s("li",null,[s("p",null,[s("code",null,"extends"),i(" 继承一份配置")])]),s("li",null,[s("p",null,[s("code",null,"exclude"),i(" 排除一些文件")])]),s("li",null,[s("p",null,[s("code",null,"references"),i(" 项目引用，配置可以切成多块来分别设置")])]),s("li",null,[s("p",null,[s("code",null,"files"),i(" 文件列表")])]),s("li",null,[s("p",null,[s("code",null,"include"),i(" 指定一个或多个路径模式，告诉 TypeScript 编译器要包含哪些文件或文件夹进行编译和类型检查。")]),s("ul",null,[s("li",null,[s("b",{"text-red-500":""},[i("一定得加上 "),s("strong",null,[s("code",null,".vue")]),i("，不加得话ts编译器不会去编译.vue的文件，在导入.vue文件时就会没有类型提示")])]),s("li",null,[i("如果没有 include 字段，TypeScript 默认会从包含 tsconfig.json 文件的目录开始递归地包含所有的 "),s("code",null,".ts、.tsx 和 .d.ts"),i(" 文件。")])]),s("div",{class:"language-json vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// - 通配符：")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//   - `**` ：匹配零个或多个目录。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//   - `*` ：匹配零个或多个字符，但不匹配路径分隔符（/）。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//   - `?` ：匹配一个字符，但不匹配路径分隔符。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//    示例表示包括 src 文件夹下的所有 TypeScript 文件，文件夹下的所有 TypeScript 文件。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "include"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'      "src/**/*"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",    "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 包括 src 文件夹及其所有子文件夹中的所有文件")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'      "tests/**/*.ts"'),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 包括 tests 文件夹及其所有子文件夹中的所有 .ts 文件")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")])])])])]),s("li",null,[s("p",null,[s("code",null,"compilerOptions"),i(),s("a",{href:"https://www.tslang.cn/docs/handbook/compiler-options.html",target:"_blank",rel:"noreferrer"},"编译选项")])])],-1),F=a("",79);function o(c,u,C,A,B,D){const n=k("reference");return p(),l("div",null,[d,s("ul",null,[E,s("li",null,[i("/// "),t(n),i(" 三斜线指令")])]),g,y,F])}const b=h(r,[["render",o]]);export{m as __pageData,b as default};
