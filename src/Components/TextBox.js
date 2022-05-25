import React from "react";
import { Link } from "react-router-dom";

function Textbox(){
    return(
        <div>
            {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  view
</button> */}

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Check versions here!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>  <input type="text" name="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="satellite/v5"/> </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"><a href="https://en.wikipedia.org/wiki/Satellite" style={{textDecoration:'none',color:'white'}}>OK </a> </button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default Textbox;