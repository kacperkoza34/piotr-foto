import Slider from './components/Slider.js';

const app ={

initPages: function(){
  const thisApp = this;
  thisApp.pages = document.querySelector('#pages').children;
  //console.log('pages: ', thisApp.pages );
  thisApp.navLinks = document.querySelectorAll('#click-nav');
  //console.log('navLinks: ', thisApp.navLinks );
  thisApp.linksArray = Array.from(thisApp.navLinks);
  const idFromHash = window.location.hash.replace('#/','');
  let pageMatchingHash = 'home';
  //console.log(thisApp.pages[1].id);
  for(let page of thisApp.pages){
    //console.log(page.getAttribute('id'));
    if(page.getAttribute('id') == idFromHash){
      pageMatchingHash = page.getAttribute('id');
      break;
    }
  }

  thisApp.activatePage(pageMatchingHash);

  for(let link of thisApp.linksArray){
    
    link.addEventListener('click', function(event){
      const clickedElement = this;
      event.preventDefault();

      const id = clickedElement.getAttribute('href').replace('#','');

      if(clickedElement.getAttribute('href') == '#slider'){
        new Slider(clickedElement);
      }

      thisApp.activatePage(id, event);

      window.location.hash = '#/' + id;

      });
    }
  },


  activatePage: function(pageId, event){
    const thisApp = this;

    for(let page of thisApp.pages){

      if(page.id == 'slider'){
        page.classList.toggle('active', page.id == pageId);

        let foto = document.querySelector('.main-foto');
        /* TO DO WHEN ANIMATION WILL BE READY */
        }
      else page.classList.toggle('active', page.id == pageId);

    }
    //console.log(event);

    for(let link of thisApp.linksArray){

      if(link.getAttribute('href') != '#slider'){
        link.classList.toggle(
          'active-nav',
          link.getAttribute('href') == '#' + pageId
        );
      }
    }

  },

}

app.initPages();
