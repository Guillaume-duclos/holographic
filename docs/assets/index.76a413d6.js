(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const e=document.querySelector(".card");let c=document.documentElement;e.addEventListener("mousemove",f=>{e.style.transition="transform 0s ease-in-out";const o=f;let r,s,t=o.offsetX/e.clientWidth*100,i=o.offsetY/e.clientHeight*100;c.style.setProperty("--positionX",`${t}%`),c.style.setProperty("--positionY",`${i}%`);let n,l;o.offsetY>e.clientHeight/2?(r=10-(e.clientHeight-o.offsetY)/(e.clientHeight/2)*10,l=1-(e.clientHeight-o.offsetY)/(e.clientHeight/2)):(r=-10-(1-e.clientHeight/(e.clientHeight-o.offsetY))*10,l=1+(1-e.clientHeight/(e.clientHeight-o.offsetY))),o.offsetX>e.clientWidth/2?(s=-10+(e.clientWidth-o.offsetX)/(e.clientWidth/2)*10,n=1-(e.clientWidth-o.offsetX)/(e.clientWidth/2)):(s=Math.abs(10-(e.clientWidth-o.offsetX)/(e.clientWidth/2)*10),n=Math.abs(1-(e.clientWidth-o.offsetX)/(e.clientWidth/2))),c.style.setProperty("--hyp",`${n>l?n:l}`),e.style.transform=`rotateX(${r}deg) rotateY(${s}deg)`});e.addEventListener("mouseout",()=>{e.style.transition="transform .2s ease-in-out",e.style.transform="rotateX(0) rotateY(0)"});
