import React, { useEffect, useRef, useState } from "react"
import {hex2rgb} from '@csstools/convert-colors'
import { v4 as uuidv4 } from 'uuid';

const getIconTags = (tags = []) =>  tags.map(tag => ({
    id: uuidv4(),
    icon: tag?.icon,
    href: tag?.url,
    imgUrl: tag?.imgUrl || null
  }));

const addHash = (color) => color[0] === '#' ? color : `#${color}`

const getSvgIconUrl = (icon) => {

  if(!icon) {
    return null;
  }
  const originalHex =  addHash(icon.hex)
  const rgb = hex2rgb(originalHex);
  const [r,g,b] = rgb.map((percent) => Math.round((percent / 100) * 255));

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(${r}, ${g}, ${b});" viewBox="0 0 24 24" height="${32}px" width="${32}px"> <title>${icon.title}</title> <path d="${icon.path}"></path> </svg>`

} 

const getTag = (
  {
    id,
    imgWidth = 32,
    imgHeight = 32,
    href,
    icon,
    imgUrl
}
) => {
  return (
    <a 
      key={id} 
      href={href ? href : 'www.google.com'} 
      title={icon?.title}
      target="_blank"
      rel="noopener"
      style={{ cursor: 'pointer'}}
    >
      
        <img 
          height={imgHeight}
          width={imgWidth}
          alt={icon?.title} 
          src={imgUrl ? imgUrl : getSvgIconUrl(icon)} 
        />
     <p>{icon?.title}</p> 
    </a>
  )


}


function IconCloud({ tags, height = 1000, width = 500 }) {
  const containerRef = useRef(null);


  useEffect(() => {

    try {
      TagCanvas.Start("myCanvas", null, {
        maxSpeed: 0.08,
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
      });
    } catch (e) {
      if(containerRef?.current) {
        containerRef?.current?.style?.display = "none";
      }
    }
  }, [tags]);

 

  return (
    
    <div  ref={containerRef}  id="myCanvasContainer">
      <canvas
          id="myCanvas"
          width={width}
          height={height}
        >
        {getIconTags(tags).map(getTag)}
      </canvas>
    </div>
  )
}

export default IconCloud
