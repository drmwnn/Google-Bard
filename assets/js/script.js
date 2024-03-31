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