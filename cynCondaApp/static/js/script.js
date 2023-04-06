// Loader
window.addEventListener("load", function() {
  setTimeout(function() {
    document.getElementById("loaderId").style.display = "none";
    document.body.style.backgroundColor = "#fff";
    // document.body.style.display = "block";
    document.body.style.visibility = "visible";
  }, 3000); // Duration of the loader after the page is ready
});
// Finaliza Loader

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}
// Finish scroll effect

// Automatic Slideshow
var slideIndex = 0;
var slideTimeout;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].addEventListener("mousedown", stopSlide);
    x[i].addEventListener("mouseup", startSlide);
    x[i].addEventListener("touchstart", stopSlide);
    x[i].addEventListener("touchend", startSlide);
    // x[i].addEventListener("touchmove", preventDefault, { passive: false });
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  x[slideIndex - 1].style.display = "block";
  slideTimeout = setTimeout(carousel, 10000); // Change image every 10 seconds
}

function stopSlide() {
  clearTimeout(slideTimeout);
}

function startSlide() {
  slideTimeout = setTimeout(carousel, 10000);
}
// Finaliza Automatic Slideshow

// <!-- Modal for Payment -->
// Show the Payment Modal when the "Contratar" button is clicked
let contractButtons = document.querySelectorAll(".w3-button.base-plan, .w3-button.middle-plan, .w3-button.full-plan");
for (let i = 0; i < contractButtons.length; i++) {
  contractButtons[i].addEventListener("click", function() {

    // Get the plan name and Mercado Pago link from the button's data attributes
    // let planName = this.getAttribute("data-plan");
    let mercadoPagoLink = this.getAttribute("data-mercadopago-link");

    // Use the plan-specific Mercado Pago link in the modal
    let mercadoPagoButton = document.getElementById("mercadoPagoButton");
    mercadoPagoButton.setAttribute("href", mercadoPagoLink);

    // Show the Payment Modal
    document.getElementById("paymentModal").style.display = "block";
  });
};

// Hide the Payment Modal when the "x" or outside of the modal is clicked
document.getElementById("paymentModal").addEventListener("click", function(event) {
  if (event.target === this || event.target.className === "w3-button w3-display-topright") {
    this.style.display = "none";
  }
});
// <!-- Modal for Payment Finished -->

// INICIA MERCADO PAGO
// // Start the payment process when the "Proceder con el Pago" button is clicked
// document.getElementById("processPayment").addEventListener("click", function() {
//   // Add your payment code here
//   // Mercado Pago Checkout Pro 'PUBLIC_KEY'
//   const mp = new MercadoPago('TEST-b907d3d3-cf6b-4974-b72d-0a0a520f25d3', {
//     locale: 'es-AR'
//   });

//   mp.checkout({
//     preference: {
//       id: 'YOUR_PREFERENCE_ID'
//     },
//     render: {
//       container: '.cho-container',
//       label: 'Pagar',
//     }
//   });
// });
// FINALIZA MERCADO PAGO

// Botones copiar al portapapeles
var botonCVU = document.getElementById("copiarCVU");
var botonAlias = document.getElementById("copiarAlias");
botonCVU.addEventListener("click", function() { copiarAlPortapapeles("CVU"); }, false);
botonAlias.addEventListener("click", function() { copiarAlPortapapeles("alias"); }, false);

function copiarAlPortapapeles(valor) {
  var enlace;
  if (valor === "CVU") {
    enlace = document.getElementById("enlaceCVU");
  } else if (valor === "alias") {
    enlace = document.getElementById("enlaceAlias");
  }
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", enlace.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
  alert("¡Listo! Ya copiaste el " + valor + ".");
}
// Finaliza botón de copiado

// <!-- Modal for Recipes -->
// Hide the Recipes Modal when the "x" or outside of the modal is clicked
document.getElementById("id02").addEventListener("click", function(event) {
  if (event.target === this || event.target.className === "w3-button w3-teal w3-display-topright") {
    this.style.display = "none";
  }
});
document.getElementById("id03").addEventListener("click", function(event) {
  if (event.target === this || event.target.className === "w3-button w3-teal w3-display-topright") {
    this.style.display = "none";
  }
});
document.getElementById("id04").addEventListener("click", function(event) {
  if (event.target === this || event.target.className === "w3-button w3-teal w3-display-topright") {
    this.style.display = "none";
  }
});

// Automatizacion para enviar el mensaje y los datos del formulario por correo a cyntia_concetti_@hotmail.com
// En el tag del form debe ir: onsubmit="enviarCorreo()"
function enviarCorreo() {
  var nombre = document.getElementsByName("Name")[0].value;
  var correo = document.getElementsByName("email")[0].value;
  var mensaje = document.getElementsByName("Message")[0].value;
  var cuerpoCorreo = "Hola mi nombre es " + nombre + "%0D%0A" + "Correo electrónico: " + correo + "%0D%0A" + "Mensaje: " + mensaje;
  window.location.href = "mailto:cyntia_concetti_@hotmail.com?subject=Mensaje de la Página de Nutrición&body=" + cuerpoCorreo;
}

