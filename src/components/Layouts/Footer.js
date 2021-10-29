import React from 'react';
import "./Footer.css";
import styled from "styled-components";


const Footer = () => {
    return (        
       <FooterContainer className="main-footer">
       <News />
           <div className="footer-middle">
           <div className="container">
               <div className="row">
                  {/*  column 1 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>Contact Us</h4>
                      <ul className="list-unstyled">
                      <li>Contact</li>
                      <li>Nigeria</li>
                      <li>Main Street</li>
                      <li>Phone +2348060440897</li>
                      </ul>
                  </div>
                  {/* end column 1 */}
                  {/*  column 2 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>Account</h4>
                      <ul className="list-unstyled">
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      </ul>
                  </div>
                  {/* end column 2 */}
                  {/*  column 3 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>Messages</h4>
                      <ul className="list-unstyled">
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      </ul>
                  </div>
                  {/* end column 3 */}
                  {/*  column 4 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>Helper</h4>
                      <ul className="list-unstyled">
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      </ul>
                  </div>
                  {/* end column 4 */}
               </div>
                {/*  Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-center">
                        &copy;{new Date().getFullYear()} walewahab App - All Rights
                    </p>
                </div>
           </div>
           </div>
       </FooterContainer>
    );
}

export default Footer;


const News = () => {
    return (
        <div class="bg-black mt-2">
            <div class="container">
        <div class="row">
        <div class="col mt-2">
          <img src="/images/mars.jpg" alt="" />
          </div>
          <div class="col text-white">
          <p class="h1 mt-5">Be a member of our community</p>
          <p class="mt-4">Amazing Experiences from Our Wonderful Customers Experiences from Our Wonderful Customers Experiences from Our Wonderful Customers</p>
          </div>
        </div>
        </div>
      </div>
    )
}


const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}
.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}
ul li a {
    color: var(--mainGray);
}
ul li a:hover {
    color: var(--mainLightGray);
}
`;