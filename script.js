
function animateNumber(elementId, startValue, endValue,unit, duration) {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID ${elementId} not found.`);
      return;
    }
  
    let currentVal = startValue;
    const stepTime = duration / (endValue - startValue);
  
    const interval = setInterval(() => {
      currentVal++;
      element.textContent = currentVal > 999 ? (currentVal / 1000).toFixed(1) + unit : currentVal;
  
      if (currentVal >= endValue) clearInterval(interval);
    }, stepTime);
  }

  document.addEventListener('DOMContentLoaded', function() {
    animateNumber('communities', 500, 1200,'k', 5000);
    animateNumber('message', 800, 2700,'m', 5000);
    
  });