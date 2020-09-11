import React, { Component } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breakpointColumnsObj: {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
      },
    };
  }

  render() {
    const { plants } = this.props;
    const breakpointColumnsObj = this.state.breakpointColumnsObj;

    const items =
      plants &&
      plants.map((plant, idx) => {
        return (
          <div key={idx} className="container">
            <div className="grid">
              <Link to={`/plant/${plant.id}`} key={idx}>
                <div key={idx}>
                  <img
                    src={plant.fields.image}
                    style={{ width: "100%" }}
                    alt={plant.fields.name}
                    className="dashboard-image"
                  />
                </div>
              </Link>
            </div>
          </div>
        );
      });

    return (
      <div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items}
        </Masonry>
      </div>
    );
  }
}
