let app = new Vue({
    el : '#app',
    data(){
      return{
        isShow: false
      }
    }
  })

  const isShow = document.getElementById('is-show');
  const target = document.getElementById('target');
  
  isShow.addEventListener('click', () => {
    target.classList.toggle('is-hidden');     
  })