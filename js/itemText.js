const modal = document.querySelector('.modal');
const grid__titles = document.querySelectorAll('.isolayer isolayer--scroll1 isolayer--shadow span');
const caption = document.querySelector('.caption');


grid__titles.forEach(title => {
    title.addEventListener('click', () => {
        modal.classList.add('open');
        //Dynamic change text&image
        const altText = title.alt;
        caption.textContent = altText;
        console.log("logged");
    });

});


modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');

    }
});

// var grid__title = document.querySelectorAll('.isolayer isolayer--scroll1 isolayer--shadow span');

// document.getElementByClassName("grid__title").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementByClassName("grid__title").alt;
//   console.log("im in grid");

// }

document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Clicked";
  console.log("im in grid");

}

// function myFunction() {
//     document.getElementByClassName("grid__title").alt = "YOU CLICKED ME!";
//     console.log("im in grid");
  
//   }


// <div class="img-container">
//     <img src="01_preview.jpg" alt="PATZLA// pens & markers"
//         data-original="01_full.jpg">
// </div>

//     <img src="" alt="" class="full-img"
//         onclick="window.open(original.src, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=100,width=600,height=600')"
//         style="cursor: zoom-in;">
//             <p class="caption"></p>
        
// <script src="app.js"></script>


// <div class="galleryWide">
//                     <div class="img-container">
//                         <img src="01_preview.jpg" alt="PATZLA// pens & markers"
//                             data-original="01_full.jpg">
//                     </div>