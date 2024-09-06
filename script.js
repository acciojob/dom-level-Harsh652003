//your JS code here. If required.
function getDomLevel(elementId) {

    const element = document.getElementById(elementId);
    
  
    if (!element) {
      console.log("Element not found");
      return -1;
    }
  
   
    let level = 0;
    let currentElement = element;
  
  
    while (currentElement) {
      level++;
      currentElement = currentElement.parentElement;
    }
  
    return level; 
  }
  
 
  const domLevel = getDomLevel('level');
  if (domLevel !== -1) {
  alert(`dom level is ${domLevel}`)
  }
  