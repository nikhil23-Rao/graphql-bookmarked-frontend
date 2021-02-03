// Modules & Libraries Imported For Use
import React from "react";
import { useQuery } from "@apollo/client";
import "./App.css";
import { GET_BOOKS_BY_TITLE } from "./Queries";
import { Switch } from "@material-ui/core";
import LinearProgressWithLabel from "@material-ui/core/LinearProgress";

interface BookInt {
  title: string;
  authors: string;
  small_image_url: string;
  average_rating: string;
  _id: string;
  books_count: number;
  ratings_count: number;
  original_publication_year: number;
}

// Main App Function
function App() {
  // useState To Toggle From Dark Mode And Light Mode
  const [mode, setMode] = React.useState(false);

  // useState To Keep Track Of Text In Search Box
  const [searchValue, setSearchValue] = React.useState("");

  // useQuery To Get The Data That The User Types In Search Box & Render Data
  const { data, loading, error } = useQuery(GET_BOOKS_BY_TITLE, {
    variables: {
      title: searchValue,
    },
  });

  // Catch Error
  if (error) {
    console.log(error);
  }

  return (
    <React.Fragment>
      {mode === false ? (
        <div>
          <h1 style={{ textAlign: "center", marginRight: "2%" }}>
            Bookmarked: Info On Books
          </h1>
          <div className="form-group">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
              className="form-control mx-auto"
              placeholder="Search For A Book..."
              style={{ maxWidth: "50%", marginTop: "5%" }}
            />
          </div>
          <br />
          <br />
          {loading ? (
            <LinearProgressWithLabel
              style={{ maxWidth: "50%", marginLeft: "25%", height: 10 }}
            />
          ) : (
            data.getBookByTitle.map((b: BookInt) => (
              <div
                key={b._id}
                className="card grid-container flip-card"
                style={{
                  width: "250px",
                  height: "300px",
                  margin: "3%",
                  display: "inline-grid",
                  marginLeft: "10%",
                }}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front card-body">
                    <img
                      className="card-img-top"
                      src={b.small_image_url}
                      style={{
                        width: 100,
                        height: 150,
                        marginLeft: "5%",
                      }}
                      alt=""
                    />
                    <br />
                    <br />
                    <h5 className="card-title" style={{ textAlign: "center" }}>
                      {b.title}
                    </h5>
                  </div>

                  <div className="flip-card-back">
                    <h5
                      className="card-title"
                      style={{ textAlign: "center", color: "black" }}
                    >
                      More Info:
                    </h5>
                    <b style={{ textAlign: "center", color: "black" }}>
                      Author(s): {b.authors}
                    </b>
                    <br />
                    <br />
                    <b
                      style={{
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      Average Rating: {b.average_rating}/5
                    </b>
                    <br />
                    <br />
                    <b
                      style={{
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      Books In Stock: {b.books_count}
                    </b>
                    <br />
                    <br />
                    <b
                      style={{
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      Number Of Reviews: {b.ratings_count}
                    </b>
                    <br />
                    <br />
                    <b
                      style={{
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      Year Of Publication: {b.original_publication_year}
                    </b>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="darkmode">
          <h1 style={{ textAlign: "center", marginRight: "2%" }}>
            Bookmarked: Info On Books
          </h1>
          <div className="form-group">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.currentTarget.value);
              }}
              className="form-control mx-auto"
              placeholder="Search For A Book..."
              style={{
                maxWidth: "50%",
                marginTop: "5%",
              }}
            />
          </div>
          <br />
          <br />

          {loading ? (
            <div className="darkmode">
              <LinearProgressWithLabel
                style={{ maxWidth: "50%", marginLeft: "25%", height: 10 }}
              />
            </div>
          ) : (
            data.getBookByTitle.map((b: BookInt) => (
              <div
                key={b._id}
                onClick={() => {
                  console.log(b);
                }}
                className="card grid-container flip-card"
                style={{
                  backgroundColor: "#CCCCCC",
                  width: "250px",
                  height: "300px",
                  margin: "3%",
                  display: "inline-grid",
                  marginLeft: "10%",
                }}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front card-body">
                    <img
                      className="card-img-top"
                      src={b.small_image_url}
                      style={{
                        width: 100,
                        height: 150,
                        marginLeft: "5%",
                      }}
                      alt=""
                    />
                    <br />
                    <br />
                    <h5
                      className="card-title"
                      style={{ textAlign: "center", color: "black" }}
                    >
                      {b.title}
                    </h5>
                  </div>
                  <div className="flip-card-back">
                    <h5
                      className="card-title"
                      style={{ textAlign: "center", color: "black" }}
                    >
                      More Info:
                    </h5>
                    <b style={{ textAlign: "center", color: "black" }}>
                      Author(s): {b.authors}
                    </b>
                    <br />
                    <br />
                    <b
                      style={{
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      Average Rating: {b.average_rating}/5
                    </b>
                    <br />
                    <br />
                    <b
                      style={{
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      Books In Stock: {b.books_count}
                    </b>
                    <br />
                    <br />
                    <b
                      style={{
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      Number Of Reviews: {b.ratings_count}
                    </b>
                    <br />
                    <br />
                    <b
                      style={{
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      Year Of Publication: {b.original_publication_year}
                    </b>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      <div className="topright">
        <Switch checked={mode} onChange={() => setMode(!mode)} />
      </div>
    </React.Fragment>
  );
}

export default App;
