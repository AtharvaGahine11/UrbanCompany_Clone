
    
function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    const scrollAmount = 320; 
    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }



  function openBooking(serviceName) {
    document.getElementById("bookingModal").style.display = "flex";
    document.getElementById("serviceName").textContent = serviceName;
  }
  
  function closeBooking() {
    document.getElementById("bookingModal").style.display = "none";
  }
  

  

  