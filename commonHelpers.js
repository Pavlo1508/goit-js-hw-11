import{S as u,i as l}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="42379891-9b2b3e5f2dd038df1d72b79a3",d={key:h,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function m(){const o=`https://pixabay.com/api/?${new URLSearchParams(d)}`;return fetch(o).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",f=new u(".gallery-link",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".loader"),A=document.querySelector(".gallery");c.style.display="none";function g(o){if(!o.hits.length)l.show({iconUrl:p,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});else{const s=o.hits.map(t=>`<li class="gallery-item">
				<a class="gallery-link" href="${t.largeImageURL}" >
					<img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"/>
				</a>
				<div class="image-description">
					<div class="decsription-item">
						<h3>Likes</h3>
						<p> ${t.likes}</p>
					</div>
					<div class="decsription-item">
						<h3>Views</h3>
						<p> ${t.views}</p>
					</div>
					<div class="decsription-item">
						<h3>Comments</h3>
						<p> ${t.comments}</p>
					</div>
					<div class="decsription-item">
						<h3>Downloads</h3>
						<p> ${t.downloads}</p>
					</div>
				</div>
			</li>`).join(`

`);A.innerHTML=s,f.refresh()}c.style.display="none"}const n=document.querySelector(".search-form");n.addEventListener("submit",o=>{o.preventDefault();const s=n.elements.searchInput.value.trim();s?(c.style.display="block",A.innerHTML="",d.q=s,m().then(t=>g(t)).catch(t=>console.log(t)),n.reset()):l.show({iconUrl:p,message:"Please enter what you want to find!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})});
//# sourceMappingURL=commonHelpers.js.map
