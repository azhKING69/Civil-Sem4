// document.addEventListener("DOMContentLoaded", function () {
//     // Select the checkbox element
//     const checkbox = document.querySelector(".form-check-input");
  
//     // Add an event listener for clicks on the checkbox
//     checkbox.addEventListener("click", function () {
//       // Toggle the "checked" class on the parent label based on the checkbox state
//       const parentLabel = this.parentElement;
  
//       if (this.checked) {
//         parentLabel.classList.add("blue-tick");
//       } else {
//         parentLabel.classList.remove("blue-tick");
//       }
//     });
//   });
  
//   // CSS styles for the blue tick effect
//   const style = document.createElement("style");
// style.textContent = `
//     .blue-tick {
//         position: relative;
//         color: #0000ff;
//     }

//     .blue-tick::after {
//         content: "\u2611"; /* Unicode for checkbox */
//         color: blue;
//         font-size: 1.2rem;
//         position: absolute;
//         right: -25px; /* Adjust as needed */
//     }
// `;
//   document.head.appendChild(style);
  