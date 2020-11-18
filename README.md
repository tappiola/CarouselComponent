# React carousel

[Demo](https://carousel-react.web.app/)

## Features

- Sliding animations
- Works for mobile and desktop devices
- Easy customization
- Supports swipes on touch devices
- Supports infinite option
- Autoplay
- Customizable autoplay intervals
- Adjustable animation duration
- Pause autoplay on mouseover
- Supports scrolling to a selected slide
- Current slide indicator
- Works for any HTML content as children

## Usage example

Wrapping each slide content into `<Carousel.Item/>` is obligatory.

```
import {Carousel} from './Carousel';
import React from "react";

function App() {
  return (
    <div>
      <Carousel width="500px" height="400px" backgroundColor="lightgray" infinite={true} autoplay={true}>
        <Carousel.Item>
          <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
            <article>
              <p><b>First slide</b></p>
              <p>This is generic text about first slide</p>
            </article>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
            <article>
              <p><b>Second slide</b></p>
              <p>This is generic text about second slide</p>
            </article>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
```

## Properties

| property | type | default | description |
|-|-|-|-|
| **autoplay** | `boolean` | `true` | Enable or disable playing slides automatically. |
| **infinite** | `boolean` | `false` | Enable or disable going to the first slide after the last one. |        
| **slideDuration** | `number` (milliseconds) | `500` | Transition duration for changing slides. |             
| **automaticSlideInterval** | `number` (milliseconds) | `5000` | Changing slides interval. |             
| **height** | Any CCS units (px, %, em, etc.) | `50%` | Changing slides interval. |             
| **width** | Any CCS units (px, %, em, etc.) | `50%` | Changing slides interval. |             
| Other | any | - | Any other styling options to be applied to Carousel container, e.g. container width. |             
