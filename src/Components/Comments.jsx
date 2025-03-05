import React from "react";
import { GoPerson } from "react-icons/go";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import "../css/comments.css";

function Comments() {
  const { id } = useParams();
  const { comments } = useSelector((store) => store.comment);
  const selectedComments =
    comments && comments.filter((product) => String(product.selectedId) === id);
  return (
    <div className="commentsContainer">
      {selectedComments.length > 0 ? (
        selectedComments.map(
          ({ selectedId, name, mail, opinion, rating, date }, index) => (
            <div className="comment" key={index}>
              <div className="personInfo">
                <div className="personContainer">
                  <GoPerson className="personIcon" />
                  <div className="personText">
                    <p className="personName">{name}</p>
                    <p className="personMail">{mail}</p>
                  </div>
                </div>
                <div className="starContainer">
                  {[...Array(rating)].map((_, index) => (
                    <TiStarFullOutline key={index} className="commentStar" />
                  ))}
                  {[...Array(5 - rating)].map((_, index) => (
                    <TiStarOutline key={index} className="commentStar" />
                  ))}
                </div>
              </div>
              <p className="productOpinion">{opinion}</p>
              <p className="commentDate">{date}</p>
            </div>
          )
        )
      ) : (
        <div className="notComment">
          <h1 className="notCommentText" >There is no comment yet.</h1>
        </div>
      )}
    </div>
  );
}

export default Comments;
