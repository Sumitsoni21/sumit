import './Scrollup.css';

function Scrollup() {
    window.addEventListener("scroll", function(){
        const Scroll = this.document.querySelector(".scrollup");
        if(this.scrollY >= 500 ){
            Scroll.classList.add("show_scroll");
        }
        else {
            Scroll.classList.remove("show_scroll");
        }
    })
  return (
   
        <a href='#home' className='scrollup' >
        <i className="fa-solid fa-arrow-up scrollup_icon"></i>
        </a>

  )
}

export default Scrollup