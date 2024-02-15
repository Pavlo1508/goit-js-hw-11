import{S as p,i as A}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="42379891-9b2b3e5f2dd038df1d72b79a3",a={key:u,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function m(){const o=`https://pixabay.com/api/?${new URLSearchParams(a)}`;return fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",f=new p(".gallery-link",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".loader"),d=document.querySelector(".gallery");c.style.display="none";function g(o){if(!o.hits.length)A.show({iconUrl:h,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});else{const t=o.hits.map(s=>`<li class="gallery-item">
				<a class="gallery-link" href="${s.largeImageURL}" >
					<img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}"/>
				</a>
				<div class="image-description">
					<div class="decsription-item">
						<h3>Likes</h3>
						<p> ${s.likes}</p>
					</div>
					<div class="decsription-item">
						<h3>Views</h3>
						<p> ${s.views}</p>
					</div>
					<div class="decsription-item">
						<h3>Comments</h3>
						<p> ${s.comments}</p>
					</div>
					<div class="decsription-item">
						<h3>Downloads</h3>
						<p> ${s.downloads}</p>
					</div>
				</div>
			</li>`).join(`

`);d.innerHTML=t,f.refresh()}c.style.display="none"}const n=document.querySelector(".search-form");n.addEventListener("submit",o=>{o.preventDefault(),a.q=n.elements.searchInput.value.trim(),c.style.display="block",d.innenHTML="",m().then(t=>g(t)).catch(t=>console.log(t)),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
