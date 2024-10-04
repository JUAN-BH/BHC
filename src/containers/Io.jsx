import React, { useEffect, useRef, useState } from "react";

export const Io = ({ children, animation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting && setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: "0.3",
      }
    );
    observer.observe(ref.current);

    // Cleanup observer on component unmount
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref}>
      {React.Children.map(children, (child) => {
        if (!child) {
          return null;
        }

        // Obtener las clases originales
        const originalClasses = child.props.className || "";
        // Agregar las nuevas clases y crear un nuevo elemento con ambas clases
        const newClasses = originalClasses + " " + animation;
        return React.cloneElement(child, {
          style: {
            opacity: isVisible ? 1 : 0,
          },
          className: isVisible ? newClasses : "",
        });
      })}
    </div>
  );
};