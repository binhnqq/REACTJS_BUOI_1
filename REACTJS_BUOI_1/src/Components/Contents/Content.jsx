import  React  from "react";
import  "../Contents/Content.css";
export default function Content() {
  return(
    <div className="container px-lg-5 mt-5 mb-5">
    <div className="card-deck">
  <div className="card ">
    <img src="../img/photo.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
    <a className="btn btn-primary btn-small" href="#!">Call to action</a>
    </div>
  </div>
  <div className="card">
  <img src="../img/photo.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
    <a class="btn btn-primary btn-small" href="#!">Call to action</a>
    </div>
  </div>
  <div className="card">
  <img src="../img/photo.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
    <a className="btn btn-primary btn-small" href="#!">Call to action</a>
    </div>
  </div>
</div>
</div>

  )
 
  
}