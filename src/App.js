import logo from "./logo.svg";
import "./App.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

function App() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    {
      image: "01",
      bigImage: "/img/brandLogo-1.png",
      category: "Web Design",
      title: "Design is a creative part",
    },
    {
      image: "02",
      bigImage: "/img/brandLogo-2.png",
      category: "Mobile App",
      title: "The service provide for designer",
    },
    {
      image: "03",
      bigImage: "/img/brandLogo-3.png",
      category: "Web Design",
      title: "Mobile App landing Design",
    },
    {
      image: "04",
      bigImage: "/img/brandLogo-4.png",
      category: "Mobile App",
      title: "Logo Design creativity",
    },
    {
      image: "05",
      bigImage: "/img/brandLogo-5.png",
      category: "Web Design",
      title: "T-shirt design is the part of design",
    },
    {
      image: "06",
      bigImage: "/img/brandLogo-6.png",
      category: "Logo Design",
      title: "Getting tickets to the big show",
    },
  ];

  return (
    <div className="App">
      <div className="position">
        {images.map((e, index) => (
          <div className="imgFile">
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex].bigImage}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => {
                  setIsOpen(false);
                }}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + images.length - 1) % images.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % images.length)
                }
              />
            )}

            <img
              onClick={() => {
                setIsOpen(true);
              }}
              src={e.bigImage}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
