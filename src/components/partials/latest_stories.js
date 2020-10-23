import React, { Component } from "react";
import latest1 from "../../assets/latest_1.webp";
import latest2 from "../../assets/latest_1x.webp";
import latest3 from "../../assets/latest_2.webp";
import latest4 from "../../assets/latest_2x.webp";
import latest5 from "../../assets/latest_3.webp";
import latest6 from "../../assets/latest_3x.webp";

class LatestStories extends Component {
  constructor() {
    super();

    this.state = {
      stories: [
        [
          {
            image: latest1,
            title: "Six of My Online Stories Failed",
          },
          {
            image: latest2,
            title: "This is markdown unity test!",
          },
        ],
        [
          {
            image: latest4,
            title: "Can I use Hooks Today ?",
            tags: ["art", "perfection"],
          },
          {
            image: latest3,
            title: "Installing Multiple Versions of Node.js Using NVM",
            tags: ["art", "perfection"],
          },
        ],
        [
          {
            image: latest5,
            title: "An example can be illustrative",
            tags: ["art", "perfection"],
          },
          {
            image: latest6,
            title: "Perfecting the Art of Perfection",
            tags: ["art", "perfection"],
          },
        ],
      ],
    };
  }
  render() {
    const renderLatestStories = this.state.stories.map((stories, index) => {
      return (
        <div className="story-container" key={index}>
          {stories.map((story, index) => {
            return (
              <div className="story" key={index}>
                <img src={story.image} alt="" />
                <div className="card">
                  <div className="time">
                    <p>May 23, 2019 - 3 min read</p>
                  </div>
                  <h1 className="story-title">{story.title}</h1>
                  <a href="#readmore" className="read-more">
                    Read more <span>&gt;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
    return (
      <div className="latest-stories">
        <div className="title-container">
          <h2 className="title">Latest Stories</h2>
        </div>

        <div className="stories">{renderLatestStories}</div>
      </div>
    );
  }
}

export default LatestStories;
