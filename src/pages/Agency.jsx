import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agency = () => {
  const imgArray = [
    "/img/img1.jpg",
    "/img/img2.jpg",
    "/img/img3.jpg",
    "/img/img4.jpg",
    "/img/img5.jpg",
    "/img/img6.jpg",
    "/img/img7.jpg",
    "/img/img8.jpg",
  ];

  const imgRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  const imgDivRef = useRef(null);
  let imgIndex;
  useGSAP(function () {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        
        start: "top 24.7%",
        end: "top -110%",
        scrub: 1,
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        pinType:"transform",
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate: (elem) => {
          imgIndex = Math.floor(elem.progress * imgArray.length);
          if (elem.progress < 1) {
            imgRef.current.src = imgArray[imgIndex];
          } else {
            imgRef.current.src = "/img/img2.jpg";
          }
        },
      },
    });
  });

  return (
    <div className="absolute top-0 left-0 w-full min-h-[200vh] ">

    
        <div
          ref={imgDivRef}
          className="h-[21vw] w-[15.5vw] overflow-hidden absolute top-[25vh] left-[30vw]"
        >
          <img
            ref={imgRef}
            className="h-full w-full object-cover rounded-3xl"
            src="/img/img1.jpg"
            alt=""
          />
        </div>
      <div className="section2 ">
        <div className="relative">
          <div className="text-center mt-[28vw] text-[20vw] uppercase font-[font2] leading-[0.8]">
            <h1>
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="text-5xl font-[font2] pl-[38vw] ">
            <p>
              &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default Agency;
