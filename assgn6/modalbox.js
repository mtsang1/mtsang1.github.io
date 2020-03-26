                                  // modal popup box
        window.onload=function(){
        var modal = document.querySelector(".modal");
        var addToCartButton = document.querySelector(".addtocartbutton");
        var closeButton = document.querySelector(".childbutton");

        function toggleModal() {
          modal.classList.toggle("visiblemodal");
        }

        function windowOnClick(event) {
          if (event.target === modal) {
            toggleModal();
          }
        }
        addToCartButton.addEventListener("click", toggleModal);
        closeButton.addEventListener("click", toggleModal);
        window.addEventListener("click", windowOnClick);
      }