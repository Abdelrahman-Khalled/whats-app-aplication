// calling
const header = document.getElementsByTagName("header")[0];
const hdicon = document.getElementById("hdicon");
const main = document.getElementById("main");
const container = document.getElementsByClassName("container")[0];
// finish calling
// general =======================

addEventListener("load", () => {
  scroll({
    top: 0,
    left:0,
  });
});

//finish general =======================

// header ====================================================

// on click خصائص
hdicon.addEventListener("click", () => {
  container.classList.toggle("appearheaderpage");
  main.classList.toggle("disapperMain");
});
// finish on click خصائص
// onScroll

addEventListener("scroll", () => {
  if (scrollY >= 40) {
    header.classList.add("scrollHeader");
  } else {
    header.classList.remove("scrollHeader");
  }
});

//finish onScroll

// finish header===============================================

// first section===============================================
const goodmorningImg = document.getElementById("goodmorningImg");
const cupimg = document.getElementById("cupimg");
const recordimd = document.getElementById("recordimd");
const dirls2img = document.getElementById("dirls2img");
const emojyimg = document.getElementById("emojyimg");
const txtimgmasege = document.getElementById("txtimgmasege");

addEventListener(
  "load",

  () => {
    setTimeout(() => {
      goodmorningImg.classList.remove("ss");
    }, 1000);

    setTimeout(
      () => {
        cupimg.classList.remove("ss");
      },

      2000
    );

    setTimeout(
      () => {
        recordimd.classList.remove("ss");
      },

      3000
    );
    setTimeout(() => {
      dirls2img.classList.remove("ss");
    }, 4000);

    setTimeout(() => {
      emojyimg.classList.remove("ss");
    }, 5000);

    setTimeout(
      () => {
        txtimgmasege.classList.remove("ss");
      },

      6000
    );
  }
);
// finish first section========================================

// second section ==============================================
const sec2 = document.getElementById("sec2");

addEventListener("scroll", () => {
  if (scrollY >= 600) {
    sec2.classList.add("AnimationScc2");
  }
});

//finish second section ==========================================

// second section=================================================

//finish second section=============================================

// third section====================================================

let sec3 = document.getElementById("sec3");

addEventListener("scroll" , () => {
  if (scrollY >= 1600) {
    sec3.classList.add("AnimationToSec3");
  }
});

//finish third section=======================================




// section 4 =================================================
let sec4 = document.getElementById("sec4");

addEventListener( 'scroll'  , () => {
      if(scrollY >= 2144){
        sec4.classList.add("AnimationInSec4")
      }
  

})







//finish section 4 ===========================================
