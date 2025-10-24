import React, { useState } from "react";
import "./Photos.css";

export default function Photos(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (props.photos && props.photos.length > 0) {
    const visiblePhotos = props.photos.slice(0, 4);
    function handlePhotoChange() {
      let newIndex = currentIndex + 1;
      if (newIndex >= visiblePhotos.length) {
        newIndex = 0;
      }
      setCurrentIndex(newIndex);
    }
    const currentPhotoObject = visiblePhotos[currentIndex];
    return (
      <div className="Photos">
        <div className="Polaroid" onClick={handlePhotoChange}>
          <img
            src={currentPhotoObject.src.landscape}
            alt={currentPhotoObject.alt}
            className="img-fluid"
          />
          <div className="caption">
            <div>{props.word}</div>
            <div className="caption-hint">(Click to see next image)</div>
          </div>
        </div>
      </div>
    );
  }
}
