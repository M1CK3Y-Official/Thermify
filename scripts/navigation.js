let navTmpl = `
<div class="navigationHandle "><i class='fa-solid fa-bars-staggered'></i></div>
<div class="navigation">
    <div class="menus">
    <div class="navigation-links"></div>
</div>
</div>`

const navContainer = document.querySelector('#nav-container');
navContainer.insertAdjacentHTML('beforeend', navTmpl);

let linksArr = [
    {
        link : 'index.html',
        title : 'Thermify'
    },
    {
        link : '#section-2',
        title : 'Thermify XL'
    },
    {
        link : '#section-3',
        title : 'Hiking'
    },
    {
        link : '#section-5',
        title : 'Anmeldelse'
    },
]


const linksContainer = document.querySelector('.navigation-links');

linksArr.forEach((linkObj) => {

    linksContainer.insertAdjacentHTML('beforeend', `<a href="${linkObj.link}">${linkObj.title}</a>`);

    linksContainer.addEventListener('click', () => {
        const nav2 = document.querySelector('.navigation');
        nav2.classList.remove('active');
    })
})

const navHandle = document.querySelector('.navigationHandle');
navHandle.addEventListener('click', () => {

    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
})