import{_ as e,c as t,o as n,a4 as a,m as s,a as i}from"./chunks/framework.JknIMk6Q.js";const l="/blog/assets/05231433.DRWBk8oT.png",o="/blog/assets/05231435.C93F0Pr1.png",q=JSON.parse('{"title":"vscode","description":"","frontmatter":{},"headers":[],"relativePath":"js/vscode.md","filePath":"js/vscode.md"}'),p={name:"js/vscode.md"},h=a("",27),c=s("ol",null,[s("li",null,[s("b",{"text-red-5":""},[i(" 如果导入的组件是 "),s("code",null,".vue"),i("的 那需要 在 "),s("code",null,"tsconfig.json.include"),i("加上 "),s("code",null,"**/*.vue"),i(",因为ts默认只编译"),s("code",null,".ts、.tsx 和 .d.ts"),i(" 文件。")])]),s("li",null,[i("某些文件路径有问题，像"),s("code",null,"references"),i("指向的文件，当前项目并没有导致"),s("code",null,"tsconfig.json"),i("文件报错，导致类型提示不成功 或者尝试 "),s("code",null,"setting.json"),i("里 注释/打开 "),s("code",null,'"typescript.tsserver.pluginPaths": [ "typescript-plugin-css-modules" ],'),s("img",{src:l,alt:"alt text"})])],-1),r=s("p",null,[s("b",{"text-red-5":"","font-bold":""},"修改好，恢复！（如果在注释这些有问题的代码尝试修复时，还是不提示，可看一下【控制台-问题】tsconfig.json文件的报错提示有没有消失，或者可多次尝试重启编辑器，甚至是电脑）")],-1),d=a("",10),k=[h,c,r,d];function u(g,E,v,m,y,f){return n(),t("div",null,k)}const _=e(p,[["render",u]]);export{q as __pageData,_ as default};
