"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const projects = [
  {
    title: "Makers Studio HOI",
    image:
      "https://images.unsplash.com/photo-1701001308648-7b731a52b8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "50th Anniversary",
    image:
      "https://images.unsplash.com/photo-1700975928909-da4a46227a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fHx8",
  },
  {
    title: "NYFW Popup",
    image:
      "https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Air Force 1 2021",
    image:
      "https://images.unsplash.com/photo-1701014159309-4a8b84faadfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8",
  },
  {
    title: "SOHO NYC",
    image:
      "https://images.unsplash.com/photo-1700924546093-f914fd5b8814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SOHO 2023",
    image:
      "https://images.unsplash.com/photo-1700601437860-e66da79cf6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8",
  },
  {
    title: "Play New Kidvision",
    image:
      "https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [fixedImage, setFixedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* LOADER */}
      <div id="loader" className={!loaderVisible ? "loader-hidden" : ""}>
        <h1>ENVIRONMENTS</h1>
        <h1>EXPERIENCES</h1>
        <h1>CONTENT</h1>
      </div>

      {/* FIXED PROJECT IMAGE */}
      <div
        id="fixed-image"
        style={{
          display: fixedImage ? "block" : "none",
          backgroundImage: fixedImage ? `url(${fixedImage})` : undefined,
        }}
      />

      {/* MAIN */}
      <div id="main">
        {/* PAGE 1 */}
        <section id="page1">
          <nav>
            <Image
              src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
              alt="Sundown Studio"
              width={180}
              height={60}
            />

            <div id="nav-part2">
              <h4>
                <a href="#">Work</a>
              </h4>

              <h4>
                <a href="#">Studio</a>
              </h4>

              <h4>
                <a href="#">Contact</a>
              </h4>
            </div>

            <h3 onClick={() => setMenuOpen((prev) => !prev)}>Menu</h3>
          </nav>

          <div id="center">
            <div id="left">
              <h3>
                Sundown is a multi-disciplinary studio focused on creating
                unique, end-to-end experiences and environments.
              </h3>
            </div>

            <div id="right">
              <h1>
                SPACES
                <br />
                THAT
                <br />
                INSPIRE
              </h1>
            </div>
          </div>

          <div id="hero-shape">
            <div id="hero-1"></div>
            <div id="hero-2"></div>
            <div id="hero-3"></div>
          </div>

          <video autoPlay loop muted playsInline src="/video.mp4" />
        </section>

        {/* PAGE 2 */}
        <section id="page2">
          <div id="moving-text">
            <div className="con">
              <h1>EXPERIENCES</h1>
              <div id="gola"></div>
              <h1>CONTENT</h1>
              <div id="gola"></div>
              <h1>ENVIRONMENTS</h1>
              <div id="gola"></div>
            </div>

            <div className="con">
              <h1>EXPERIENCES</h1>
              <div id="gola"></div>
              <h1>CONTENT</h1>
              <div id="gola"></div>
              <h1>ENVIRONMENTS</h1>
              <div id="gola"></div>
            </div>

            <div className="con">
              <h1>EXPERIENCES</h1>
              <div id="gola"></div>
              <h1>CONTENT</h1>
              <div id="gola"></div>
              <h1>ENVIRONMENTS</h1>
              <div id="gola"></div>
            </div>
          </div>

          <div id="page2-bottom">
            <h1>
              We are a group of design-driven, goal-focused creators, producers,
              and designers who believe that the details make all the
              difference.
            </h1>

            <div id="bottom-part2">
              <Image
                src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg"
                alt="Sundown Studio"
                width={500}
                height={500}
              />

              <p>
                We love to create, we love to solve, we love to collaborate, and
                we love to turn amazing ideas into reality. We’re here to
                partner with you through every step of the process and know that
                relationships are the most important things we build.
              </p>
            </div>
          </div>

          <div id="gooey"></div>
        </section>

        {/* PAGE 3 */}
        <section id="page3">
          <div id="elem-container" onMouseLeave={() => setFixedImage(null)}>
            {projects.map((project) => (
              <div
                key={project.title}
                className="elem"
                onMouseEnter={() => setFixedImage(project.image)}
              >
                <div className="overlay"></div>

                <h2>{project.title}</h2>
              </div>
            ))}
          </div>
        </section>

        {/* PAGE 4 */}
        <section id="page4">
          <Swiper
            className="mySwiper"
            slidesPerView="auto"
            centeredSlides
            spaceBetween={100}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
          </Swiper>
        </section>

        {/* PAGE 5 */}
        <section id="page5"></section>

        {/* MOBILE MENU */}
        <div id="full-scr" className={menuOpen ? "menu-open" : ""}>
          <div id="full-div1"></div>
        </div>
      </div>

      {/* FOOTER */}
      <footer id="footer">
        <div id="footer-div"></div>

        <h1>Sundown</h1>

        <div id="footer-bottom"></div>
      </footer>
    </>
  );
}
