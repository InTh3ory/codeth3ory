(()=>{const e={boxel:25,mouse:{x:0,y:0,down:{is:0,x:0,y:0,ogCameraX:0,ogCameraY:0}},camera:{x:0,y:0,zoom:2},canvas:{w:0,h:0},acre:{isCollision:(e,a,o,t)=>{let s=!1;const c=state.landscapeShop.acre;return state.landscapeShop.acre.instances.forEach(m=>{const n=a,r=e,l=o,h=t,i=m.c,d=m.r,u=c.w,w=c.h;n<i+u&&n+l>i&&r<d+w&&r+h>d&&(s=!0)}),s}}},a={};class o{constructor(e,a,o,t){this.x=e,this.y=a,this.img=o,this.size=t}update(){if(Math.random()<.02){const a=2*Math.random()-1,o=2*Math.random()-1,t=this.x+a*e.boxel,s=this.y+o*e.boxel,c=Math.floor(s/e.boxel),m=Math.floor(t/e.boxel);let n=!1;const r=state.landscapeShop.acre;r.instances.forEach(e=>{c>=e.r&&c<e.r+r.w&&m>=e.c&&m<e.c+r.h&&(n=!0)}),n&&(this.x=t,this.y=s)}}draw(a){const o=(this.x-e.camera.x+e.canvas.w/(2*e.camera.zoom))*e.camera.zoom,t=(this.y-e.camera.y+e.canvas.h/(2*e.camera.zoom))*e.camera.zoom;a.drawImage(this.img,o,t,this.size*e.boxel*e.camera.zoom,this.size*e.boxel*e.camera.zoom)}}const t=()=>{(e=>{Object.keys(state.shop).forEach(e=>{state.shop[e].instances.forEach(e=>e.update())})})();const o=document.getElementById("canvas");e.canvas.w=800,e.canvas.h=800,o.width=800,o.height=800;const s=o.getContext("2d"),c=(Math.floor(e.camera.y/e.boxel),Math.floor(e.camera.x/e.boxel),e.camera.x-o.width/(2*e.camera.zoom));let m=0;c<0?c%e.boxel&&(m=Math.abs(e.boxel+c%e.boxel)*e.camera.zoom):m=Math.abs(c%e.boxel)*e.camera.zoom;const n=e.camera.y-o.height/(2*e.camera.zoom);let r=0;c<0?n%e.boxel&&(r=Math.abs(e.boxel+n%e.boxel)*e.camera.zoom):r=Math.abs(n%e.boxel)*e.camera.zoom;const l=e.camera.x-e.canvas.w/(2*e.camera.zoom)+e.mouse.x/e.camera.zoom,h=e.camera.y-e.canvas.h/(2*e.camera.zoom)+e.mouse.y/e.camera.zoom,i=(Math.floor(h/e.boxel),Math.floor(l/e.boxel),e.boxel*e.camera.zoom);if(state.cart.length&&((e,a,o,t,s)=>{e.lineWidth=.25;const c=Math.ceil(a.height/o),m=Math.ceil(a.width/o);for(let a=0;a<=c;a++){e.beginPath();const s=a*o-t;e.moveTo(0,s),e.lineTo(c*o,s),e.stroke()}for(let a=0;a<=m;a++){e.beginPath();const t=a*o-s;e.moveTo(t,0),e.lineTo(t,c*o),e.stroke()}})(s,o,i,r,m),((o,t,s,c,m)=>{const n=Math.ceil(t.width/s),r=Math.ceil(t.width/s);for(let t=0;t<r;t++)for(let r=0;r<n;r++){const n=e.camera.x-e.canvas.w/(2*e.camera.zoom)+r*s/e.camera.zoom,l=e.camera.y-e.canvas.h/(2*e.camera.zoom)+t*s/e.camera.zoom,h=Math.floor(l/e.boxel),i=Math.floor(n/e.boxel);state.landscapeShop.acre.instances.forEach(e=>{if(e.r===h&&e.c===i){const e=r*s-m,n=t*s-c;o.drawImage(a.acre,e,n,state.landscapeShop.acre.w*s,state.landscapeShop.acre.h*s)}})}Object.keys(state.shop).forEach(e=>{state.shop[e].instances.forEach(e=>e.draw(o))})})(s,o,i,r,m),state.cart.length){const o=Object.keys(state.shop),t=state.cart[0];if("acre"===t){const o=Math.floor((e.mouse.x+m)/i)*i-m,t=Math.floor((e.mouse.y+r)/i)*i-r,c=state.landscapeShop.acre;s.drawImage(a.acre,o,t,c.w*i,c.h*i),e.acre.isCollision(e.mouse.row,e.mouse.col,c.w,c.h)&&(s.beginPath(),s.rect(o,t,c.w*i,c.h*i),s.fillStyle="rgba(255,0,0,0.5)",s.fill())}else if(o.includes(t)){const o=state.shop[t];s.drawImage(a[t],e.mouse.x,e.mouse.y,o.size*e.boxel*e.camera.zoom,o.size*e.boxel*e.camera.zoom)}}s.beginPath(),s.arc(o.width/2,o.height/2,2,0,2*Math.PI*2,!1),s.fillStyle="red",s.fill(),window.requestAnimationFrame(t)};(()=>{const s=Object.keys(state.shop).length+2;let c=0;const m=()=>{++c===s&&window.requestAnimationFrame(t)};Object.keys(state.shop).forEach(e=>{const o=document.createElement("img");o.src=`assets/${e}.png`,o.onload=(()=>{a[e]=o,m()}),o.onerror=(()=>{m()})});const n=document.createElement("img");n.src="assets/farm.png",n.onload=(()=>{a.farm=n,m()});const r=document.createElement("img");r.src=state.landscapeShop.acre.img,r.onload=(()=>{a.acre=r,m()}),document.getElementById("canvas").addEventListener("mousemove",a=>{var o=canvas.getBoundingClientRect();e.mouse.x=(a.clientX-o.left)/(o.right-o.left)*canvas.width,e.mouse.y=(a.clientY-o.top)/(o.bottom-o.top)*canvas.height;const t=e.camera.x-e.canvas.w/(2*e.camera.zoom)+e.mouse.x/e.camera.zoom,s=e.camera.y-e.canvas.h/(2*e.camera.zoom)+e.mouse.y/e.camera.zoom;if(e.mouse.row=Math.floor(s/e.boxel),e.mouse.col=Math.floor(t/e.boxel),e.mouse.down.is){const a=e.mouse.x-e.mouse.down.x,o=e.mouse.y-e.mouse.down.y;e.camera.x=e.mouse.down.ogCameraX-a/e.camera.zoom,e.camera.y=e.mouse.down.ogCameraY-o/e.camera.zoom}}),document.getElementById("canvas").addEventListener("mousedown",t=>{var s=canvas.getBoundingClientRect();e.mouse.down.x=(t.clientX-s.left)/(s.right-s.left)*canvas.width,e.mouse.down.y=(t.clientY-s.top)/(s.bottom-s.top)*canvas.height,e.mouse.down.ogCameraX=e.camera.x,e.mouse.down.ogCameraY=e.camera.y,++e.mouse.down.is;const c=state.cart[0];if(state.cart.length&&("acre"!==c||e.acre.isCollision(e.mouse.row,e.mouse.col,state.landscapeShop.acre.w,state.landscapeShop.acre.h)||(state.landscapeShop.acre.instances.push({r:e.mouse.row,c:e.mouse.col}),state.cart.pop(),rs.shop(),rs.landscapeShop()),Object.keys(state.shop).includes(c)&&e.acre.isCollision(e.mouse.row,e.mouse.col,1,1))){const t=e.mouse.col*e.boxel,s=e.mouse.row*e.boxel,m=new o(t,s,a[c],state.shop[c].size);state.shop[c].instances.push(m),state.cart.shift(),rs.shop()}}),document.getElementById("canvas").addEventListener("mouseup",a=>{--e.mouse.down.is}),document.getElementById("canvas").addEventListener("wheel",a=>{a.preventDefault();const o=e.camera.zoom+-.01*a.deltaY;o<5&&o>.4&&(e.camera.zoom+=-.005*a.deltaY)})})()})();