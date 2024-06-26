import React from "react";
import "./contact.css"


function Contact() {
  return (
    <>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col poster">
            <div class="card h-100">
              <svg style={{ margin: "10px auto" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="blue" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              <div class="card-body">
                <h4 class="card-title" style={{ textAlign: "center" }}>Call us on (9 am to 9pm IST)</h4>
                <p class="card-text num" style={{ textAlign: "center" }}><h4>+91 9701379797</h4></p>
              </div>
            </div>
          </div>
          <div class="col poster">
            <div class="card h-100">
              <svg style={{ margin: "0px auto" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="blue" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
              </svg>
              <div class="card-body">
                <h4 class="card-title" style={{ textAlign: "center" }}>E-mail us to</h4>
                <p class="card-text num" style={{ textAlign: "center" }}><h4>python.trainer.helper@gmail.com</h4></p>
              </div>
            </div>
          </div>
          <div class="col poster"> 
            <div class="card h-100">
              <svg style={{ margin: "10px auto" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              <div class="card-body">
                <h4 class="card-title" style={{ textAlign: "center" }}>Chat us on whatsapp</h4>
                <p class="card-text num" style={{ textAlign: "center" }}><h4>+91 9701379797</h4></p>
              </div>
            </div>
          </div>
          <div class="col poster">
            <div class="card h-100">
              <svg style={{ margin: "10px auto" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="blue" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
              <div class="card-body">
                <h4 class="card-title" style={{ textAlign: "center" }}>Follow us on Youtube</h4>
                <p class="card-text num" style={{ textAlign: "center" }}><h4>python.trainer.helper (for more Detail)</h4></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card bottom box3" >
          <div class="card-body" >
            <h1 class="card-title" style={{ textAlign: "center", fontSize: "5rem" }}>Contact Us</h1>
            <div class="mb-3" style={{ margin: "10px 50px" }}>
              <label for="exampleFormControlInput1" class="form-label login ">Email address</label>
              <input type="email" class="form-control w-40" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3" style={{ margin: "10px 50px" }}>
              <label for="exampleFormControlInput1" class="form-label ">Password</label>
              <input type="email" class="form-control w-40" id="exampleFormControlInput1" placeholder="Enter your password here" />
            </div>
            <div id="passwordHelpBlock" class="form-text">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </div>

            <div class="mb-3" style={{ margin: "10px 50px" }}>
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;