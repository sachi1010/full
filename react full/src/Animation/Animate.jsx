// import React, { useState, useRef, useEffect } from "react";
//  import { useSpring, animated as SpringDiv } from "react-spring";
// import { motion } from "framer-motion";
// import { Transition } from "react-transition-group";
// import { gsap } from "gsap";
// import '../Animation/Animate.css';

// export default function App() {
//   const [show, setShow] = useState(true);
//   const gsapBoxRef = useRef(null);

//   // 🌀 React Spring Animation
//   const springStyles = useSpring({
//     to: { opacity: show ? 1 : 0, transform: show ? "scale(1)" : "scale(0.5)" },
//     from: { opacity: 0, transform: "scale(0.5)" },
//   });

//   // 🧃 GSAP Animation
//   useEffect(() => {
//     if (show) {
//       gsap.to(gsapBoxRef.current, { x: 100, duration: 1, opacity: 1 });
//     } else {
//       gsap.to(gsapBoxRef.current, { x: 0, duration: 1, opacity: 0 });
//     }
//   }, [show]);

//   return (
//     <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//       <h2>🔁 React Animations Showcase</h2>
//       <button onClick={() => setShow(!show)}>Toggle All</button>

//       {/* 🧢 CSS Transition */}
//       <div className={`box ${show ? "box-show" : "box-hide"}`}>CSS</div>

//       {/* 🌀 React Spring */}
//        <SpringDiv className="box spring" style={springStyles}>
//         Spring
//       </SpringDiv> 

//       {/* 💥 Framer Motion */}
//       <motion.div
//         className="box framer"
//         animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.5 }}
//         transition={{ duration: 0.5 }}
//       >
//         Motion
//       </motion.div>

//       {/* ⏳ React Transition Group */}
//       <Transition in={show} timeout={300}>
//         {(state) => (
//           <div className={`box transition transition-${state}`}>RTG</div>
//         )}
//       </Transition>

//       {/* ⚡ GSAP */}
//       <div className="box gsap" ref={gsapBoxRef}>
//         GSAP
//       </div>
//     </div>
//   );
// }

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

import React, { useState, useRef, useEffect } from "react";
//import { useSpring, animated as SpringDiv } from "react-spring";
import { motion } from "framer-motion";
import { Transition } from "react-transition-group";
import { gsap } from "gsap";
import "../Animation/Animate.css";

export default function App() {
  const [show, setShow] = useState(true);
  const gsapBoxRef = useRef(null);

  // 🌀 React Spring Animation
//   const springStyles = useSpring({
//     to: { opacity: show ? 1 : 0, transform: show ? "scale(1)" : "scale(0.5)" },
//     from: { opacity: 0, transform: "scale(0.5)" },
//     config: { tension: 200, friction: 20 },
//   });

  // ⚡ GSAP Animation
  useEffect(() => {
    if (gsapBoxRef.current) {
      gsap.to(gsapBoxRef.current, {
        x: show ? 100 : 0,
        opacity: show ? 1 : 0,
        duration: 1,
      });
    }
  }, [show]);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>🔁 React Animations Showcase</h2>
      <button onClick={() => setShow(!show)}>Toggle All</button>

      {/* 🧢 CSS Transition */}
      <div className={`box css-box ${show ? "box-show" : "box-hide"}`}>CSS</div>

      {/* 🌀 React Spring */}
      {/* <SpringDiv className="box spring-box" style={springStyles}>
        Spring
      </SpringDiv> */}

      {/* 💥 Framer Motion */}
      <motion.div
        className="box framer-box"
        animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Motion
      </motion.div>

      {/* ⏳ React Transition Group */}
      <Transition in={show} timeout={300} unmountOnExit mountOnEnter>
        {(state) => (
          <div className={`box transition-box transition-${state}`}>RTG</div>
        )}
      </Transition>

      {/* ⚡ GSAP */}
      <div className="box gsap-box" ref={gsapBoxRef}>
        GSAP
      </div>
    </div>
  );
}
