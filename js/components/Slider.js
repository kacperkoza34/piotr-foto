

class Slider {
  constructor(foto){
    const thisSlider = this;
    thisSlider.getDom(foto);

  }

  getDom(foto){
    const sliderDom = document.querySelector('.main-foto');

    const topDistance = Math.floor(foto.getBoundingClientRect().top);

    const leftDistance = Math.floor(foto.getBoundingClientRect().right);

    const width = Math.floor(foto.clientWidth);

    const height = Math.floor(foto.clientHeight);

    const src = foto.querySelector('img').getAttribute('src');
    console.log(src);
    const domElement = `<img class="active-slider" style="
                                    position: relative;
                                    width:${width}px;
                                    height:${height}px;
                                    top:${topDistance}px;
                                    left:${leftDistance}px;
                                    transform: translate(-100%);
                                    "
                                    src="${src}"  >`;

    sliderDom.innerHTML = domElement;
    
  }
}

export default Slider;
