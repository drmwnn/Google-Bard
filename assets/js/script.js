const checkbox = document.querySelector(".category button");
const navList = document.querySelector("nav .nav-menu");
const boList = document.querySelector("nav");

checkbox.addEventListener("click", function () {
    navList.classList.toggle("slide");
    boList.classList.toggle("slide");
    document.querySelector('.nav-container').classList.toggle('slide');
    var imageElement = document.getElementById('myimage');
    
    if(boList.classList.contains('slide')) {
      imageElement.src = './img/cancel.png';
    } else {
      imageElement.src = './img/Category.png'
    }
});

const sponsors = [
  { id: 1, image: 'assets/img/alpha-jwc1.png'},
  { id: 2, image: 'assets/img/alpha-jwc2.png'},
  { id: 3, image: 'assets/img/alpha-jwc3.png'},
  { id: 4, image: 'assets/img/alpha-jwc4.png'},
  { id: 5, image: 'assets/img/alpha-jwc5.png'},
  { id: 6, image: 'assets/img/alpha-jwc6.png'},
  { id: 7, image: 'assets/img/alpha-jwc7.png'},
  { id: 8, image: 'assets/img/alpha-jwc8.png'},
];

const duplicatedSponsors = [...sponsors, ...sponsors];

const sponsorList = document.getElementById('group');

renderSponsor();

function renderSponsor(){
  sponsorList.innerHTML = '';

  duplicatedSponsors.forEach(sponsor => {
      const itemSponsor = document.createElement('div');
      itemSponsor.classList.add('frame-1');
      itemSponsor.innerHTML = `
          <div class="frame-2">
              <div class="frame-3">
                  <img src="${sponsor.image}" alt="Sponsor ${sponsor.id}" class="sponsor-image">
              </div>
          </div>
      `;

      sponsorList.appendChild(itemSponsor);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.item-pict');
  const thumbnails = document.querySelectorAll('.thumb-list .thumbnail');

  thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
          changeActiveItem(index);
      });
  });

  document.getElementById('arrow-left').addEventListener('click', () => {
      const currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
      const newIndex = (currentIndex - 1 + items.length) % items.length;
      changeActiveItem(newIndex);
  });

  document.getElementById('arrow-right').addEventListener('click', () => {
      const currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
      const newIndex = (currentIndex + 1) % items.length;
      changeActiveItem(newIndex);
  });

  function changeActiveItem(index) {
      items.forEach(item => item.classList.remove('active'));
      thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
      
      items[index].classList.add('active');
      thumbnails[index].classList.add('active');
  }
});

const artikel = [
  { id: 1, image: 'https://akcdn.detik.net.id/community/media/visual/2023/11/25/osha-penyandang-autisme-finish-marathon_169.jpeg?w=700&q=90', title: 'Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya', time: 'Sabtu, 25 Nov 2023 20:00 WIB'},
  { id: 2, image: 'https://akcdn.detik.net.id/community/media/visual/2023/11/28/misi-lestari-2023-see-nature_169.jpeg?w=700&q=90', title: 'Edukasi Lingkungan Hidup Bonus Sehat di \'Misi Lestari 2023: See Nature\'', time: 'Selasa, 28 Nov 2023 07:42 WIB'},
  { id: 3, image: 'https://akcdn.detik.net.id/community/media/visual/2023/11/26/pertamina-eco-runfest-2023_169.jpeg?w=700&q=90', title: 'Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023', time: 'Minggu, 26 Nov 2023 13:04 WIB'},
  { id: 4, image: 'https://akcdn.detik.net.id/community/media/visual/2023/11/18/ct-arsa-charity-fun-run-2023-11.jpeg?w=700&q=90', title: 'Kelar Lari di CT Arsa Charity Fun Run, \'Recharge\' Energi Nonton Maliq & D\'essentials', time: 'Sabtu, 18 Nov 2023 17:39 WIB'},
  { id: 5, image: 'https://akcdn.detik.net.id/community/media/visual/2023/11/16/metal-go-ct-arsa-fun-run.jpeg?w=700&q=90', title: 'CT Arsa Charity Fun Run 2023 Bertabur Emas', time: 'Kamis, 16 Nov 2023 16:34 WIB'},
  { id: 6, image: 'https://akcdn.detik.net.id/community/media/visual/2023/11/12/btn-jakarta-run-2023-4.jpeg?w=700&q=90', title: 'BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta', time: 'Minggu, 12 Nov 2023 11:55 WIB'},
];

const artikelList = document.getElementById('frame-1');
const fotoList = document.getElementById('frame-2');
const videoList = document.getElementById('frame-3');

renderArtikel();
renderFoto();
renderVideo();

function renderArtikel() {
  artikelList.innerHTML = '';

  artikel.forEach(article => {
    const itemArtikel = document.createElement('div');
    itemArtikel.classList.add('card');
    itemArtikel.innerHTML = `
      <div class="frame-4">
        <img src="${article.image}" alt="artikel-image">
      </div>
      <div class="frame-5">
        <h3>${article.title}</h3>
        <p>${article.time}</p>
      </div>
    `;
    artikelList.appendChild(itemArtikel);
  });
}

function renderFoto() {
  fotoList.innerHTML = '';

  artikel.forEach(article => {
    const itemArtikel = document.createElement('div');
    itemArtikel.classList.add('card');
    itemArtikel.innerHTML = `
        <div class="frame-4">
          <img src="${article.image}" alt="artikel-image">
          <div class="time-stamp">
            <i class="fa-solid fa-camera"></i>
            <p>5 Foto</p>
          </div>
        </div>
        <div class="frame-5">
          <h3>${article.title}</h3>
          <p>${article.time}</p>
        </div>
    `;
    fotoList.appendChild(itemArtikel);
  });
}

function renderVideo() {
  videoList.innerHTML = '';

  artikel.forEach(article => {
    const itemArtikel = document.createElement('div');
    itemArtikel.classList.add('card'); 
    itemArtikel.innerHTML = `
        <div class="frame-4">
          <img src="${article.image}" alt="artikel-image">
          <div class="time-stamp">
            <i class="fa-solid fa-play"></i>
            <p>01:45</p>
          </div>
        </div>
        <div class="frame-5">
          <h3>${article.title}</h3>
          <p>${article.time}</p>
        </div>
    `;
    videoList.appendChild(itemArtikel);
  });
}

document.addEventListener('DOMContentLoaded', function(){
  const frame = document.querySelectorAll('.content .frame .frame-container');
  const links = document.querySelectorAll('.artikel');

  links.forEach((link, index) => {
      link.addEventListener('click', () => {
          changeActiveItem(index);
      });
  });

  function changeActiveItem(index) {
    console.log('frame')
    frame.forEach(item => item.classList.remove('active'));
    links.forEach(link => link.classList.remove('active'));

    frame[index].classList.add('active');
    links[index].classList.add('active');
  }
});

shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};
    if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);
    else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;
    if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);
    if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");
    var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},
    i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,
    "break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,
    f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);
    for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:
    c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))
    return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},
    this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:
    function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;
    c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href="http://sahretech.com"});