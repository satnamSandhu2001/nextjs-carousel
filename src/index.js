/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import './style.css';
import React, { useEffect, useRef, useState } from 'react';

const IconNavigatePrev = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 6l-6 6l6 6" />
  </svg>
);
const IconNavigateNext = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 6l6 6l-6 6" />
  </svg>
);

export default function Carousel({ children, previewCardId = 0 }) {
  const [activeId, setactiveId] = useState(previewCardId);
  const [slideWidth, setslideWidth] = useState(0);
  let contRef = useRef(null);
  let scrollRef = useRef(null);

  const scrollTrack = (id, instant) => {
    scrollRef?.current?.scrollTo({
      left: slideWidth * (id - 1),
      behavior: instant ? 'instant' : 'smooth',
    });
  };

  function handlePrev() {
    if (activeId === 0) {
      setactiveId(children.length - 1);
    } else {
      setactiveId((prevActiveId) => prevActiveId - 1);
    }
  }
  function handleNext() {
    if (activeId < children.length) {
      setactiveId((prevActiveId) => prevActiveId + 1);
    } else {
      setactiveId(0);
    }
  }

  useEffect(() => {
    setslideWidth(contRef.current ? contRef.current.offsetWidth : 0);
  }, [contRef.current]);

  // to handle track scroll without transitition after getting slideWidth
  useEffect(() => {
    scrollTrack(activeId, true);
  }, [slideWidth]);

  useEffect(() => {
    scrollTrack(activeId);
  }, [activeId]);

  useEffect(() => {
    const autoPlay = setTimeout(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(autoPlay);
  }, [activeId]);

  if (!children) return null;

  return (
    <div ref={contRef} className="nextjs_carousel_wrapper">
      <div ref={scrollRef} className={`nextjs_carousel_container`}>
        {children?.map((child, index) => {
          return (
            <div
              key={index}
              style={{ width: `${slideWidth}px` }}
              className="nextjs_carousel_slide"
            >
              {child}
            </div>
          );
        })}
      </div>

      <div className="nextjs_carousel_arrows_container">
        {/* prev arrow */}
        <button onClick={handlePrev}>
          <IconNavigatePrev />
        </button>

        {/* dots */}
        <div className="nextjs_carousel_dots">
          {children.map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  setactiveId(i);
                }}
              />
            );
          })}
        </div>

        {/* next arrow */}
        <button onClick={handleNext}>
          <IconNavigateNext />
        </button>
      </div>
    </div>
  );
}
