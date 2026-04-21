function cambiarImg(){
  let imagen = document.getElementById('dia');
  let src =  "/public/day_25_full.svg";
  if (imagen.getAttribute('src') == src){
    src = "/public/day_25.svg";
    imagen.src = src;
  } else {
    imagen.src = src
  }
}

document.getElementById('dia').addEventListener('click', () => {
  cambiarImg()
})