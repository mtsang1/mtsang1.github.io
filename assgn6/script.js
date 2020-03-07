

        // calculates total cost on product details page
          function checkTotal() {
          var quantity = document.querySelector('input[name="quantity"]:checked').value;
          total=0;

          if (quantity == 0) {
            total=4.00;
          }

          if (quantity == 1) {
            total = 10.69;
          }

          if (quantity == 2) {
            total = 16.58;
          }

          if (quantity == 3) {
            total = 21.70;
          }
          document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);      
        }
        // changes the glazing pictures based on option
        function changeGlazingPicture(){ 
            var current = document.getElementsByClassName('active');
            current[0].classList.remove("active");
            var img = document.querySelector('input[name="glazing"]:checked').value;
            var newElement= document.getElementById(img);
            newElement.className = 'active';
        }
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
      // changes views of the product by clicking side image
      function change_img(image) {
        var container = document.getElementById("sugarMilk");
        container.src = image.src;
      }

