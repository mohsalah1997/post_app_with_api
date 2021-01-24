import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

class getPost extends Component {
  state = {
    posts: "",
  };

  componentDidMount = () => this.getdata();

  getdata() {
    axios
      .get("https://w7-mariam-salah.herokuapp.com/posts")
      .then(({ data }) => {
        console.log(data);
        this.setState({ posts: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    this.props.refresh === true && this.getdata();
    const { posts } = this.state;
    return (
      <div>
        <ul>
          {posts &&
            posts.map(
              (post) =>
                post.img && (
                  <li className="body-li">
                    <div key={post.id} className="getPost">
                      <div className="getPost__head">
                        <img className="getPost__head__img" src={post.img} />
                        <div className="getPost__head__right">
                          <h4 className="getPost__head__title">{post.title}</h4>
                          <h6 className="getPost__head__time">{post.p_date}</h6>
                        </div>
                      </div>
                      <div>
                        <hr className="getPost__hr" />
                        <p className="getPost__detail">{post.detail}</p>
                      </div>
                      <img className="getPost__body__img" src={post.img} />
                      <hr className="getPost__hr" />
                      <div className="getPost__icon">
                        <div>
                          <FontAwesomeIcon
                            className="drawer__icon"
                            icon={faThumbsUp}
                            color="gray"
                            size="1x"
                          />
                          <h6>Like</h6>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            className="drawer__icon"
                            icon={faComment}
                            size="1x"
                            color="gray"
                          />
                          <h6>Comment</h6>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            className="drawer__icon"
                            icon={faShare}
                            size="1x"
                            color="gray"
                          />
                          <h6>Share</h6>
                        </div>
                      </div>
                      <hr className="getPost__hr" />
                      <div className="getPost__comment">
                        <img className="getPost__head__img" src={post.img} />
                        <input
                          type="text"
                          className="getPost__comment__input"
                          placeholder="Write a comment"
                        />
                      </div>
                    </div>
                  </li>
                )
            )}
        </ul>
      </div>
    );
  }
}

export default getPost;
