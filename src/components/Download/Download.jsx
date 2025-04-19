import React from "react";
import DataComics from "../../Data/DataComics";
import "./Download.css"; // il CSS sotto va qui

const Download = () => {
  return (
    <div className="download-page">
      <h1 className="download-title text-center">Download Fumetti</h1>
      <div className="download-grid">
        {DataComics.map((comic) => (
          <div className="download-card" key={comic.id}>
            <img
              src={comic.cover}
              alt={`cover-${comic.titolo}`}
              className="download-cover"
            />
            <h3 className="comic-title">{comic.titolo}</h3>
            <a
              href={comic.pdf}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              Scarica PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download;
