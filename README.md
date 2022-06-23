# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Link

`Demo` : <https://melodic-tulumba-b650d4.netlify.app/>

## Available Scripts

In the project directory, you can Use:

### `npm i react-image-lightbox` or `yarn add react-image-lightbox`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

<br/>
<br/>

<img src="https://i.ibb.co/tBVNqQL/React-App.png" alt="React-App" border="0">
<br/>
<br/>

<img src="https://i.ibb.co/4wyLr6C/React-App-1.png" alt="React-App-1" border="0">

<br/>
<br/>

## Code for use Function Component

```
import React from 'react';
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

```

<br/>
<br/>

## Code for use Class Component

```
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

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

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].bigImage}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

```
