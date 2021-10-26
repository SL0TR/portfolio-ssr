import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import useParallax from '../libs/hooks/useParallax';

function ParallaxHome() {
  const offsetY = useParallax()

  return (
    <section className="Parallax">
      {/* <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      /> */}
      {/* <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      /> */}
      {/* <img style={{ transform: `translateY(-${offsetY * 0.2}px)`, position: 'absolute' }} src="/guy-laptop.svg" alt="test" />
      <img style={{ transform: `translateY(${offsetY * 0.8}px)`, position: 'absolute' }} src="/laptop-mobile.svg" alt="test" /> */}
      
    </section>
  );
}
export default ParallaxHome
