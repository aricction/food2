import React,{ Component } from 'react';
import {Nav} from 'reactstrap';
import { Link } from 'react-router-dom';
class Footer extends Component {
render(){
  return(
    <footer class="footer">
      <div class="container">
      <div class="row">
          <div class="col-4 offset-1 col-sm-2">

          </div>
          <div class="col-7 col-sm">


          </div>
          <div className="container">
          <div className="row justify-content-center">
              <div class="text-center">
                  <a href="http://google.com/+"  style={{ color: '#e74c3c' }}><i class="fa fa-google-plus"></i></a>
                  <a href="http://www.facebook.com/profile.php?id="><i class="bi bi-facebook" style={{marginLeft: '5px'}}></i></a>
                  <a href="http://www.linkedin.com/in/" style={{ color: '#2980b9' }}><i class="bi bi-linkedin" style={{marginLeft: '5px'}}></i></a>
                  <a href="http://twitter.com/"  style={{ color: '#74b9ff' }}><i class="bi bi-twitter" style={{marginLeft: '5px'}}></i></a>
                  <a href="http://youtube.com/"  style={{ color: '#d63031' }}><i class="bi bi-youtube" style={{marginLeft: '5px'}}></i></a>
                  <a href="mailto:"><i class="bi bi-envelope-open" style={{marginLeft: '5px'}}></i></a>
              </div>
          </div>
      </div>
            <div className="container">
  <div class="row justify-content-center">
      <div class="col-auto">
          <p>© Copyright 2021 Gourmet Food & more</p>
      </div>
      </div>
  </div>
  </div>
  </div>
    </footer>

  );
}
}
export default Footer;
