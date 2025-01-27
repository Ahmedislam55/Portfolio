import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="title"
          >
            Front End developer
          </motion.h1>
          <div className="icon-verified"></div>
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.4)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
        </div>
        <p className="sub-title parg">
          Hi, I&apos;m <strong> Ahmed Islam </strong> , a passionate web
          developer with a strong focus on creating engaging and interactive
          websites. I specialize in front-end technologies like
          <strong> HTML </strong> , <strong> CSS </strong>,
          <strong>JavaScript </strong>, and modern frameworks such as
          <strong> Bootstrap </strong> , <strong> React.Js </strong> and
          <strong> Next.Js </strong> . My goal is to build seamless,
          user-friendly web experiences that not only look great but also
          provide excellent performance. <br /> <br /> I have a deep interest in
          learning new technologies and staying up-to-date with the latest web
          development trends. Whether it&apos;s crafting responsive layouts or
          optimizing web applications, I am always looking for challenges that
          allow me to grow and improve my skills. <br /> <br /> In addition to
          web development, I am also passionate about fitness, as it helps me
          maintain a healthy balance between work and life. This philosophy of
          balance drives my approach to both personal and professional projects,
          as I believe in delivering high-quality results while maintaining
          focus and well-being. Feel free to explore my portfolio, and if you
          have any questions or would like to collaborate on a project,
          don&apos;t hesitate to get in touch.
        </p>

        <div className="all-icons flex" style={{ padding: "20px" }}>
          <a href="https://x.com/ahmed30336822" target="blank">
            <div className="icon icon-twitter"></div>
          </a>
          <a href="https://www.instagram.com/ahmedamer3858/" target="blank">
            <div className="icon icon-instagram"></div>
          </a>
          <a href="https://github.com/Ahmedislam55" target="blank">
            <div className="icon icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-islam-59160533b/"
            target="blank"
          >
            <a href="https://github.com/Ahmedislam55/tgrba37.git"></a>
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
