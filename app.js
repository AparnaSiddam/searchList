const inPut = document.querySelector('#search-input');
const product = document.querySelectorAll('.product');
const titles = document.querySelectorAll('.product h2');


inPut.addEventListener('keyup', function(e){
  let searchValue = e.target.value.toLowerCase();

  for(let i = 0; i < product.length; i++){
      let checkValue = titles[i].firstChild.textContent.toLowerCase();

      if(checkValue.indexOf(searchValue) !== -1){
          product[i].style.display = '';
      }else{
          product[i].style.display = 'none';
      }
  }
});