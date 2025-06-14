
    
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
  

  

  const profileToggle = document.getElementById("profileToggle");
const profileDropdown = document.getElementById("profileDropdown");

profileToggle.addEventListener("click", () => {
  profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
});

// Optional: Hide dropdown when clicked outside
document.addEventListener("click", function (e) {
  if (!profileToggle.contains(e.target) && !profileDropdown.contains(e.target)) {
    profileDropdown.style.display = "none";
  }
});




const cartToggle = document.getElementById("cartToggle");
const cartDropdown = document.getElementById("cartDropdown");

cartToggle.addEventListener("click", () => {
  cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
});

// Optional: Hide dropdown when clicked outside
document.addEventListener("click", function (e) {
  if (!cartToggle.contains(e.target) && !cartDropdown.contains(e.target)) {
    cartDropdown.style.display = "none";
  }
});
