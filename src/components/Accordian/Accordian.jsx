import React from "react";
import "./Accordian.css";

const Accordian = (props) => {


  const onClick = () => {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  };

  return (
    <div className="infoContainer">
      <button class="accordion" onClick={onClick}><a className="list-group-item list-group-item-action"> Order: Joyson(47pcs, Bottom Coin Punch) <hr></hr>
      <div>
      <div className='float-child blue'></div>
      <div className='float-child red'></div>
      <div className='float-child orange'></div>
      <div className='float-child'></div>
      <div className='float-child'></div>
      </div>
      <br></br><a>Recieved: 9/26/2021 Shipment: 10/1/2021</a></a></button>
      <div class="panel">
        <p>Pre Washing<br></br>Stripping<br></br>WPC<br></br>Coating<br></br>Packing/Shipping</p>
      </div>
    </div>
  );
};

export default Accordian;

