import React from "react";
import "./Download.css";
import { PictureAsPdf } from "@mui/icons-material";
export default function Download() {
  return (
    <div className="Download-Container">
      <div className="Download-Banner">
        <div className="Download-Banner-Content">
          <h1>Downloads</h1>
          <p >
            All the forms & download ables you will need for trading and
            investing
          </p>
        </div>
        <div className="Download-Banner-Image">
          <img src="/images/DownloadBannerImage01.png" alt="" />
        </div>
      </div>
      <div className="Download-Block">
        <div className="Download-Block-Header">
          <h2>Heading</h2>
          <h2>Download</h2>
        </div>
        <div className="Download-Block-Content-row">
          <h3>ACCOUNT CLOSURE REQUEST FORM</h3>
          <button className="Download-btn">
            <PictureAsPdf />{" "}
          </button>
        </div>
        <div className="Download-Block-Content-row">
          <h3>ACCOUNT CLOSURE REQUEST FORM</h3>
          <button className="Download-btn">
            <PictureAsPdf />{" "}
          </button>
        </div>
        <div className="Download-Block-Content-row">
          <h3>ACCOUNT CLOSURE REQUEST FORM</h3>
          <button className="Download-btn">
            <PictureAsPdf />{" "}
          </button>
        </div>
        <div className="Download-Block-Content-row">
          <h3>ACCOUNT CLOSURE REQUEST FORM</h3>
          <button className="Download-btn">
            <PictureAsPdf />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
