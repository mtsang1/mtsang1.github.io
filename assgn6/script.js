
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
      // changes views of the product by clicking side image
      function change_img(image) {
        var container = document.getElementById("sugarMilk");
        container.src = image.src;
      }
      // carousel 
      window.onload=function(){
        carousel = (function(){
          var carouselbox = document.querySelector('.carouselbox');
          var next = carouselbox.querySelector('.right');
          var prev = carouselbox.querySelector('.left');
          var items = carouselbox.querySelectorAll('.content li');
          var counter = 0;
          var amount = items.length;
          var current = items[0];
          carouselbox.classList.add('active');
          function navigate(slide) {
            current.classList.remove('current');
            counter = counter + slide;
            if (slide === -1 && 
              counter < 0) { 
              counter = amount - 1; 
          }
          if (slide === 1 && 
            !items[counter]) { 
            counter = 0;
        }
        current = items[counter];
        current.classList.add('current');
      }
      next.addEventListener('click', function(y) {
        navigate(1);
      });
      prev.addEventListener('click', function(y) {
        navigate(-1);
      });
      navigate(0);
    })();
  }


