//first
 
// var box = document.querySelector('.box');
// var outPut = document.querySelector('.output');

// box.addEventListener('mousemove',mouse);

// function mouse(e){
//     outPut.innerHTML = '<h3>mouseX: '+e.offsetX+'</h3><h3>mouseY: '+e.offs
//     box.style.background = 'rgb( '+e.offsetX+' , '+e.offsetY+',40 )';
// }








// second 



// $('#nav-toggle').click(function(e) {
//     e.stopPropagation();
//     $(".menu").toggleClass('bar')
//   });
//   $('body').click(function(e) {
//     if ($('.menu').hasClass('bar')) {
//       $(".menu").toggleClass('bar')
//     }
//   })








const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');

overlayBtn.addEventListener('click', ()=> {
     container.classList.toggle('right-panel-active');

     overlayBtn.classList.remove('btnScaled');
     window.requestAnimationFrame( ()=> {
        overlayBtn.classList.add('btnScaled');
     });
});
