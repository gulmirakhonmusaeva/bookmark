window.addEventListener('DOMContentLoaded' , () => {
    const tabContent = document.querySelectorAll('.tabcontent'),
        //   tabContainer = document.querySelector('.tabcontainer'),
          tabs = document.querySelectorAll('.tabheader-item'),
          tabsParent = document.querySelector('.tabheader-items');
    
   function hideContent() {
          tabContent.forEach(item =>{
           item.classList.add('hidden')
           item.classList.remove('show', 'fade')

       }) 

      tabs.forEach(item => {
          item.classList.remove('tabheader-item-active')
      })

    }

      function showContent(i = 0) {
          tabContent[i].classList.remove('hidden')
          tabContent[i].classList.add('show', 'fade')
          tabs[i].classList.add('tabheader-item-active')
      } 

      hideContent()
      showContent()

      tabsParent.addEventListener('click', (event) => {
          if(event.target && event.target.classList.contains('tabheader-item')){
             
            tabs.forEach((item, i) =>{
                if (event.target == item) {
                    hideContent()
                    showContent(i)
                }
            })
          }
    
    

})

})