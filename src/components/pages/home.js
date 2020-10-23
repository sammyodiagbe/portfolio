import React, { Component } from "react";
import "../../sass/pages/home.css";
import FeaturedStories from "../partials/featuredStories";
import LatestStories from "../partials/latest_stories";
import author from "../../assets/author.webp";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="intro-story">
          <div className="left">
            <img src={author} alt="" className="author" />
          </div>
          <div className="right">
            <h1 className="stay-on-story">
              Hey! I'm <b className="stand-out">David</b>
            </h1>
            <p>
              Breakfast procuring no end happiness allowance assurance frank.
              Met simplicity nor difficulty unreserved who. Entreaties mr
              conviction dissimilar me astonished estimating cultivated.
            </p>
            <div className="socials">
              <i className="fa fa-facebook" />
              <i className="fa fa-instagram" />
              <i className="fa fa-twitter" />
              <i className="fa fa-github" />
            </div>
          </div>
        </div>
        <FeaturedStories />
        <LatestStories />
        <div style={{ padding: "20px" }}>
          <div className="contact-us">
            <div className="contact-container">
              <div className="left">
                <h1 className="title">
                  Get The Best Of All Hands Delivered To Your Inbox
                </h1>
                <p>Subscribe to our newsletter and stay updated</p>
              </div>
              <div className="right">
                <form>
                  <div>
                    <input type="email" placeholder="Write your email here" />
                  </div>
                  <div>
                    <button>Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>&copy; 2020 somename.com</p>
        </footer>
      </div>
    );
  }
}

export default Home;
