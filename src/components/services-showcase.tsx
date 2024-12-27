"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconPlayerPause,
  IconPlayerPauseFilled,
  IconPlayerPlay,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";

interface Project {
  name: string;
  image: string;
}

interface ServiceItem {
  title: string;
  projectsTopRow: Project[];
  projectsBottomRow: Project[];
}

export default function ServicesShowcase() {
  const ourServices: ServiceItem[] = [
    {
      title: "Business Website Development",
      projectsTopRow: [
        {
          name: "Peninsula Homes",
          image: "/showcase/Peninsula Homes Showcase.png",
        },
        {
          name: "SAC Consulting",
          image: "/showcase/SAC Consulting Showcase.png",
        },
        {
          name: "Nikita Morell",
          image: "/showcase/Nikita Morell Showcase.png",
        },
      ],
      projectsBottomRow: [
        {
          name: "Auburn Friends",
          image: "/showcase/Auburn Friends Showcase.png",
        },
        {
          name: "Covenant Security Solutions",
          image: "/showcase/Covenant Security Solutions Showcase.png",
        },
        {
          name: "Coast Remedial Solutions",
          image: "/showcase/Coast Remedial Solutions Showcase.png",
        },
        {
          name: "Insight Medical Careers",
          image: "/showcase/Insight Medical Careers Showcase.png",
        },
        {
          name: "Intercorp",
          image: "/showcase/Intercorp Developments Showcase.png",
        },
        // {
        //   name: "Willis Electrical QLD",
        //   image: "/showcase/WEQ Showcase.png",
        // },
      ],
    },
    {
      title: "Web Platform Development",
      projectsTopRow: [
        { name: "QRmory", image: "/showcase/QRmory Showcase.png" },
        { name: "Pixecute", image: "/showcase/Pixecute Showcase.png" },
        {
          name: "The Watchman Reviews",
          image: "/showcase/The Watchman Reviews Showcase.png",
        },
      ],
      projectsBottomRow: [],
    },
    // {
    //   title: "Mobile App Development",
    //   projectsTopRow: [
    //     { name: "Coming Soon" },
    //     { name: "Coming Soon" },
    //     { name: "Coming Soon" },
    //     { name: "Coming Soon" },
    //   ],
    //   projectsBottomRow: [
    //     { name: "Coming Soon" },
    //     { name: "Coming Soon" },
    //     { name: "Coming Soon" },
    //     { name: "Coming Soon" },
    //   ],
    // },
    {
      title: "eCommerce Development",
      projectsTopRow: [
        { name: "Cadeaurable", image: "/showcase/Cadeaurable Showcase.png" },
        { name: "Vipertac", image: "/showcase/Vipertac Showcase.png" },
      ],
      projectsBottomRow: [],
    },
    {
      title: "Web Maintenance and Hosting",
      projectsTopRow: [
        {
          name: "Peninsula Homes",
          image: "/showcase/Peninsula Homes Showcase.png",
        },
        {
          name: "Nikita Morell",
          image: "/showcase/Nikita Morell 2 Showcase.png",
        },
        {
          name: "SAC Consulting",
          image: "/showcase/SAC Consulting 2 Showcase.png",
        },
      ],
      projectsBottomRow: [
        {
          name: "Intercorp",
          image: "/showcase/Intercorp Developments Showcase.png",
        },
        {
          name: "Coast Remedial Solutions",
          image: "/showcase/Coast Remedial Solutions Showcase.png",
        },
      ],
    },
  ];
  const DURATION = 10000;

  // States
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topTranslate, setTopTranslate] = useState(0);
  const [bottomTranslate, setBottomTranslate] = useState(0);

  const currentService = ourServices[currentIndex];
  const topProjects = [
    ...currentService.projectsTopRow,
    ...currentService.projectsTopRow,
  ];
  const bottomProjects = [
    ...currentService.projectsBottomRow,
    ...currentService.projectsBottomRow,
  ];

  // Refs
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number>(0);
  const scrollStartTimeRef = useRef<number | null>(null);
  const scrollPausedTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number>(0);
  const scrollAnimationFrameRef = useRef<number>(0);
  const timerStartRef = useRef<number | null>(null);

  // Functions
  const animate = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;

    const elapsed = timestamp - startTimeRef.current + pausedTimeRef.current;
    const newProgress = Math.min((elapsed / DURATION) * 100, 100);

    setProgress(newProgress);

    if (elapsed < DURATION && !isPaused) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  const togglePause = () => {
    setIsPaused((prev) => {
      if (!prev) {
        // Pausing
        // Store how much time has elapsed in this cycle
        if (timerStartRef.current) {
          pausedTimeRef.current = performance.now() - timerStartRef.current;
        }

        if (scrollStartTimeRef.current) {
          scrollPausedTimeRef.current =
            performance.now() - scrollStartTimeRef.current;
        }

        // Clear all animations
        if (animationFrameRef.current)
          cancelAnimationFrame(animationFrameRef.current);
        if (scrollAnimationFrameRef.current)
          cancelAnimationFrame(scrollAnimationFrameRef.current);

        // Clear the timer start
        timerStartRef.current = null;
      } else {
        // Resuming
        // Resume from where we paused
        timerStartRef.current = performance.now() - pausedTimeRef.current;
        scrollStartTimeRef.current =
          performance.now() - scrollPausedTimeRef.current;
      }
      return !prev;
    });
  };

  useEffect(() => {
    const animateScroll = (timestamp: number) => {
      if (!scrollStartTimeRef.current) scrollStartTimeRef.current = timestamp;

      const elapsed =
        timestamp - scrollStartTimeRef.current + scrollPausedTimeRef.current;

      const topSpeed = 0.03;
      const bottomSpeed = 0.07;

      if (!isPaused) {
        setTopTranslate(() => {
          return -(elapsed * topSpeed);
        });

        setBottomTranslate(() => {
          return -(elapsed * bottomSpeed);
        });

        scrollAnimationFrameRef.current = requestAnimationFrame(animateScroll);
      }
    };

    if (!isPaused) {
      scrollStartTimeRef.current = null;
      scrollAnimationFrameRef.current = requestAnimationFrame(animateScroll);
    }

    return () => {
      if (scrollAnimationFrameRef.current) {
        cancelAnimationFrame(scrollAnimationFrameRef.current);
      }
    };
  }, [currentIndex, currentService.projectsTopRow.length, isPaused]);

  useEffect(() => {
    if (!isPaused) {
      // Initialize timer start if not set
      if (!timerStartRef.current) {
        timerStartRef.current = performance.now();
      }

      const animateProgress = (timestamp: number) => {
        if (!timerStartRef.current) return;

        const elapsed = timestamp - timerStartRef.current;
        const newProgress = Math.min((elapsed / DURATION) * 100, 100);

        setProgress(newProgress);

        if (elapsed >= DURATION) {
          // Reset timer and move to next index
          timerStartRef.current = performance.now();
          setCurrentIndex((prev) => (prev + 1) % ourServices.length);
          setProgress(0);
        }

        if (!isPaused) {
          animationFrameRef.current = requestAnimationFrame(animateProgress);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animateProgress);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, ourServices.length]);

  return (
    <article
      className={`col-span-12 lg:col-span-4 flex justify-center items-end max-w-[350px]`}
    >
      <div
        className={`py-3 flex flex-col justify-center items-start w-full max-w-md h-full min-h-[510px] bg-white rounded-3xl`}
      >
        <button
          type="button"
          className={`cursor-pointer group relative self-end mr-5 flex items-center justify-end w-fit h-6`}
          onClick={togglePause}
        >
          {isPaused ? (
            <>
              <IconPlayerPlay
                className={`absolute top-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-300 ease-in-out`}
              />
              <IconPlayerPlayFilled
                className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out`}
              />
            </>
          ) : (
            <>
              <IconPlayerPause
                className={`absolute top-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-300 ease-in-out`}
              />
              <IconPlayerPauseFilled
                className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out`}
              />
            </>
          )}
        </button>

        <section
          className={`py-6 flex-grow flex flex-col justify-start gap-3 w-full`}
        >
          <div className={`overflow-hidden`}>
            <div
              className={`flex gap-3 w-fit transition-transform duration-100 ease-linear`}
              style={{ transform: `translateX(${topTranslate}px)` }}
            >
              {topProjects.length &&
                topProjects.map((project, index) => (
                  <article
                    key={`top-projects-${index}`}
                    className={`relative grid place-content-center w-[200px] h-[150px] bg-neutral-200 font-light italic`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className={`absolute top-0 left-0 h-full w-full object-cover`}
                    />
                  </article>
                ))}
            </div>
          </div>

          <div className={`overflow-hidden`}>
            <div
              className={`flex gap-3 w-fit transition-transform duration-100 ease-linear`}
              style={{ transform: `translateX(${bottomTranslate}px)` }}
            >
              {bottomProjects.length &&
                bottomProjects.map((project, index) => (
                  <article
                    key={`bottom-projects-${index}`}
                    className={`relative grid place-content-center w-[200px] h-[150px] bg-neutral-200 font-light italic`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className={`absolute top-0 left-0 h-full w-full object-cover`}
                    />
                  </article>
                ))}
            </div>
          </div>
        </section>

        <section className={`pb-5 px-5 w-full max-w-[250px]`}>
          <h3 className={`text-2xl leading-7`}>
            {ourServices[currentIndex].title}
          </h3>
        </section>

        <section className={`px-5 flex flex-row flex-nowrap gap-1 w-full h-2`}>
          {ourServices.map((_, index) => (
            <article
              key={`indicator-${index}`}
              className={`relative w-full h-full bg-neutral-200 rounded-full overflow-hidden`}
            >
              <div
                className={`absolute top-0 left-0 h-full bg-ravenci-primary transition-all duration-50 ease-linear`}
                style={{
                  width:
                    index < currentIndex
                      ? "100%"
                      : index === currentIndex
                        ? `${progress}%`
                        : "0%",
                }}
              />
            </article>
          ))}
        </section>
      </div>
    </article>
  );
}
