


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


        function change_img(image) {
          var container = document.getElementById("none");
          container.src = image.src;
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


/**
      var countb1 = 1;
          function setColor() {
              var property = document.getElementById("gbutton");
              if (countb1 == 0) {
                  property.style.backgroundColor = "#FFF"
                  countb1 = 1;        
              }
              else {
                  property.style.backgroundColor = "#18A0FB"
                  countb1 = 0;
              }
          }

      var countb2 = 1;
        function setColor2() {
              var property = document.getElementById("gbutton2");
              if (countb2 == 0) {
                property.style.backgroundColor = "#FFF"
                countb2 = 1;        
            }
            else {
                  property.style.backgroundColor = "#18A0FB"
                  countb2 = 0;
              }
          }

      var countb3 = 1;
        function setColor3() {
              var property = document.getElementById("gbutton3");
              if (countb3 == 0) {
                  property.style.backgroundColor = "#FFF"
                  countb3 = 1;        
              }
              else {
                  property.style.backgroundColor = "#18A0FB"
                  countb3 = 0;
              }
          }

      var countb4 = 1;
        function setColor4() {
              var property = document.getElementById("gbutton4");
              if (countb4 == 0) {
                  property.style.backgroundColor = "#FFF"
                  countb2 = 1;        
              }
              else {
                  property.style.backgroundColor = "#18A0FB"
                  countb4 = 0;
              }
          }
 
    
   
      var countb1 = 1;
          function setColor5() {
              var property = document.getElementById("qbutton");
              if (countb1 == 0) {
                  property.style.backgroundColor = "#FFF"
                  countb1 = 1;        
              }
              else {
                  property.style.backgroundColor = "#18A0FB"
                  countb1 = 0;
              }
          }

      var countb2 = 1;
        function setColor6() {
              var property = document.getElementById("qbutton2");
              if (countb2 == 0) {
                property.style.backgroundColor = "#FFF"
                countb2 = 1;        
            }
            else {
                  property.style.backgroundColor = "#18A0FB"
                  countb2 = 0;
              }
          }

      var countb3 = 1;
        function setColor7() {
              var property = document.getElementById("qbutton3");
              if (countb3 == 0) {
                  property.style.backgroundColor = "#FFF"
                  countb3 = 1;        
              }
              else {
                  property.style.backgroundColor = "#18A0FB"
                  countb3 = 0;
              }
          }

      var countb4 = 1;
        function setColor8() {
              var property = document.getElementById("qbutton4");
              if (countb4 == 0) {
                  property.style.backgroundColor = "#FFF"
                  countb2 = 1;        
              }
              else {
                  property.style.backgroundColor = "#18A0FB"
                  countb4 = 0;
              }
          }

      **/ 