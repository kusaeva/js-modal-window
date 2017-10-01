document.addEventListener('DOMContentLoaded', function(){
  let modal = document.getElementById('modal');

  let btn = document.getElementById('btn');
  btn.addEventListener('click', function(){
    show(modal);
  });

  let closeHandler = function(){
    hide(modal);
  };
  let close = document.getElementById('close');
  close.addEventListener('click', closeHandler);
  let modalBg = document.getElementById('modal-bg');
  modalBg.addEventListener('click', closeHandler);
});

var lockedScrollY = 0;

const scrollHandler = function(e){
  e.preventDefault ();
};

const windowScrollHandler = function(e){
  window.scrollTo (0, lockedScrollY)
};

function show(modal) {
  modal.style.display = 'block';
  lockedScrollY = window.scrollY;

  document.addEventListener('mousewheel', scrollHandler);
  document.addEventListener('DOMMouseScroll', scrollHandler);
  document.addEventListener('touchmove', scrollHandler);
  document.addEventListener('keydown', scrollHandler);
  document.addEventListener('scroll', windowScrollHandler);
}

function hide(modal) {
  modal.style.display = 'none';

  document.removeEventListener('mousewheel', scrollHandler);
  document.removeEventListener('DOMMouseScroll', scrollHandler);
  document.removeEventListener('touchmove', scrollHandler);
  document.removeEventListener('keydown', scrollHandler);
  document.removeEventListener('scroll', windowScrollHandler);
}
