import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/contact.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Toaster, toast } from "sonner";
import { FaCheckCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { addToComments } from "../redux/slices/commentSlice";
import BlinkingText from "../Components/BlinkingText";
import Loading from "../Components/Loading";
import { getAllProducts } from "../redux/slices/productSlice";
import moment from "moment";

function Contact() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const clearInputs = () => {
    setName("");
    setMail("");
    setOpinion("");
    setRating(5);
    setSelectedId(null);
  };
  const { products } = useSelector((store) => store.product);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [opinion, setOpinion] = useState("");
  const [rating, setRating] = useState(5);
  const [selectedId, setSelectedId] = useState(null);
  const [errorName, setErrorName] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorOpinion, setErrorOpinion] = useState(false);
  const comments = [
    {
      value: 1,
      label: "⭐",
    },
    {
      value: 2,
      label: "⭐⭐",
    },
    {
      value: 3,
      label: "⭐⭐⭐",
    },
    {
      value: 4,
      label: "⭐⭐⭐⭐",
    },
    {
      value: 5,
      label: "⭐⭐⭐⭐⭐",
    },
  ];

  const handleName = (e) => {
    setName(e.target.value);
    setErrorName(e.target.value.trim() === "");
  };
  const handleMail = (e) => {
    setMail(e.target.value);
    setErrorMail(e.target.value.trim() === "");
  };
  const handleOpinion = (e) => {
    setOpinion(e.target.value);
    setErrorOpinion(e.target.value.trim() === "");
  }
  const handleRating = (e) => setRating(e.target.value);

  const addComments = () => {
    if (name && mail && opinion && selectedId) {
      const date = moment().format("YYYY-MM-DD HH:mm");
      const payload = { name, mail, opinion, rating, selectedId, date };
      dispatch(addToComments(payload));
      toast.success("Your comment has been saved!", {
        duration: 3000,
        icon: <FaCheckCircle style={{ fontSize: "25px", color: "#03e400" }} />,
        style: {
          padding: "20px",
          fontSize: "15px",
        },
      });
      clearInputs();
    } else {
      toast.error("Please fill in all options!", {
        duration: 3000,
        icon: <MdErrorOutline style={{ fontSize: "25px", color: "red" }} />,
        style: {
          padding: "20px",
          fontSize: "15px",
        },
      });
    }
  };

  return (
    <div className="contactContainer">
      <Toaster position="top-right" />
      <div className="contactMain">
        <h1 className="headerContact">
          Write a <span className="contactSpan">Comment</span>
        </h1>
        <p className="shortText">
          Please express your opinions and suggestions clearly and
          transparently.
        </p>
        <TextField
          className="input"
          required
          onChange={handleName}
          id="outlined-basic-name"
          name="name"
          label="Name"
          variant="outlined"
          autoComplete="name"
          value={name}
          error={errorName}
          helperText={errorName ? "This field is required!" : ""}
        />
        <TextField
          className="input"
          required
          onChange={handleMail}
          id="outlined-basic-email"
          name="email"
          label="E-mail"
          variant="outlined"
          autoComplete="email"
          value={mail}
          error={errorMail}
          helperText={errorMail ? "This field is required and must contain '@'!" : ""}
        />
        <TextField
          className="input"
          required
          onChange={handleOpinion}
          id="outlined-basic-opinion"
          name="opinion"
          label="Your Opinion"
          variant="outlined"
          autoComplete="opinion"
          value={opinion}
          error={errorOpinion}
          helperText={errorOpinion ? "This field is required!" : ""}
        />
        <TextField
          className="select"
          id="outlined-select-currency"
          select
          label="Rating"
          defaultValue="5"
          helperText="Please select your comment point!"
          onChange={handleRating}
          name="rating"
          value={rating}
        >
          {comments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <button
          type="submit"
          onClick={addComments}
          className="addBtn contactBtn"
        >
          SEND
        </button>
      </div>
      <div className="productsGeneralContainer">
        <div className="productsContainerHeading">
          <h3 className="contactH3">ALL PRODUCTS</h3>
          <BlinkingText className="contactP">
            Please choose one product!
          </BlinkingText>
        </div>
        <div className="productsContainer">
          {products &&
            products.map((product) => {
              const { id, title, image } = product;
              return (
                <div key={id} className="productContainer">
                  <label>
                    <input
                      type="radio"
                      name="product"
                      value={id}
                      checked={selectedId === id}
                      onChange={() => setSelectedId(id)}
                    />
                    <span className="customRadio"></span>
                  </label>
                  <img src={image} className="productImgContact" alt="" />
                  <p className="productNameContact">{title}</p>
                </div>
              );
            })}
          <Loading />
        </div>
      </div>
    </div>
  );
}

export default Contact;
