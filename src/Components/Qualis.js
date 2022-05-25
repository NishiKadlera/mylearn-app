import React from "react";
import { Link } from "react-router-dom";

function Qualis() {
  return (
    <div>
      <div class="btn-group dropend">
  <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Qualis
  </button>
  <ul class="dropdown-menu">
  <li><Link  class="dropdown-item" to="modal"><button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Satellite
</button></Link></li>
    <li><a class="dropdown-item" href="#">Admin</a></li>
    {/* <li><a class="dropdown-item" href="#">Action three</a></li> */}
  </ul>
</div>
    </div>
  );
}
export default Qualis;
