import React, { useRef, useState, useEffect } from "react";

function TimelineContent({ date, title, text }) {
  const fadeRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.5, // 0 to 1: percentage of the target element that must be visible to trigger the callback
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsHovered(true);
        } else {
          setIsHovered(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup when the component unmounts
    return () => observer.disconnect();
  }, [targetRef]);
  return (
    <>
      <div
        className={`timeline_beforeContent ${
          isHovered ? "timeline_beforeContent_hovered" : ""
        }`}
        ref={targetRef}
      ></div>
      <div className="timeline_content">
        <h3 className="date">{date}</h3>
        <div className="timeline_border">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default TimelineContent;
