import React, { Component } from "react";
import featured1 from "../../assets/featured_1.webp";
import featured2 from "../../assets/featured_2.webp";
import featured3 from "../../assets/featured_3.webp";

class FeaturedStories extends Component {
  constructor() {
    super();

    this.state = {
      stories: [
        {
          image: featured1,
          title: "A Full and Comprehensive Style Test",
          tags: ["hello", "markdown"],
        },
        {
          image: featured2,
          title: "How to Use the Deep Link Generator",
          tags: ["hello", "markdown"],
        },
        {
          image: featured3,
          title: "Perfecting the Art of Perfection",
          tags: ["art", "perfection"],
        },
      ],
    };
  }
  render() {
    const renderFeaturedLists = this.state.stories.map((story, index) => {
      return (
        <div className="story" key={index}>
          <img src={story.image} alt="" />
          <div className="card">
            <div className="tags">
              {story.tags.map((tag, index) => {
                return (
                  <span className="tag" key={index}>
                    #{tag}
                  </span>
                );
              })}
            </div>
            <h1 className="story-title">{story.title}</h1>
            <a href="#readmore" className="read-more">
              Read more
            </a>
          </div>
        </div>
      );
    });
    return (
      <div className="featured-stories">
        <div className="title-container">
          <h2 className="title">Featured Stories</h2>
        </div>

        <div className="stories">{renderFeaturedLists}</div>
      </div>
    );
  }
}

export default FeaturedStories;
