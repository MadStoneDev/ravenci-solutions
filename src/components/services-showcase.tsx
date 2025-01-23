"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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

  // Constants
  const TIMER_DURATION = 10000;

  // States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);
  const [timerProgress, setTimerProgress] = useState(0);
  const [topTranslate, setTopTranslate] = useState(0);
  const [bottomTranslate, setBottomTranslate] = useState(0);

  // Variables
  const currentService = ourServices[currentIndex];

  const topProjects = [
    ...currentService.projectsTopRow,
    ...currentService.projectsTopRow,
    ...currentService.projectsTopRow,
  ];

  const bottomProjects = [
    ...currentService.projectsBottomRow,
    ...currentService.projectsBottomRow,
    ...currentService.projectsBottomRow,
  ];

  // Refs
  const blockTimer = useRef<NodeJS.Timeout | null>(null);
  const startTime = useRef<number | null>(null);
  const pausedTime = useRef<number | null>(null);
  const scrollStartTime = useRef<number | null>(null);
  const scrollPausedTime = useRef<number>(0);

  // Functions
  const resetTimer = useCallback(
    (shouldReset = true) => {
      if (blockTimer.current) {
        clearInterval(blockTimer.current);
      }

      if (shouldReset) {
        setTimerProgress(0);
        startTime.current = Date.now();
        pausedTime.current = null;
      } else if (pausedTime.current !== null) {
        startTime.current = Date.now() - pausedTime.current;
        pausedTime.current = null;
      }

      blockTimer.current = setInterval(() => {
        if (startTime.current === null) return;

        const elapsed = Date.now() - startTime.current;
        const progress = Math.min((elapsed / TIMER_DURATION) * 100, 100);
        setTimerProgress(progress);

        if (progress >= 100) {
          setCurrentIndex((prev) => (prev + 1) % ourServices.length);
          resetTimer();
        }
      }, 50);
    },
    [ourServices.length],
  );

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    resetTimer(true);
  };

  const togglePause = () => {
    if (timerRunning) {
      if (blockTimer.current) {
        clearInterval(blockTimer.current);
      }

      if (startTime.current !== null) {
        pausedTime.current = Date.now() - startTime.current;
      }

      scrollPausedTime.current = scrollStartTime.current
        ? performance.now() - (scrollStartTime.current || 0)
        : 0;

      scrollStartTime.current = null;
    } else {
      resetTimer(false);
      scrollStartTime.current = performance.now() - scrollPausedTime.current;
    }

    setTimerRunning(!timerRunning);
  };

  // Effects
  useEffect(() => {
    if (timerRunning) {
      if (startTime.current !== null) {
        resetTimer(false);
      } else {
        resetTimer(true);
      }
    }

    return () => {
      if (blockTimer.current) {
        clearInterval(blockTimer.current);
      }
    };
  }, [timerRunning, resetTimer]);

  useEffect(() => {
    setTopTranslate(0);
    setBottomTranslate(0);
    scrollStartTime.current = performance.now();
    scrollPausedTime.current = 0;
  }, [currentIndex]);

  useEffect(() => {
    if (!timerRunning) return undefined;

    let animationFrameId: number;

    const animateScroll = (timestamp: number) => {
      if (!scrollStartTime.current) {
        scrollStartTime.current = timestamp;
      }

      const elapsed = timestamp - scrollStartTime.current;
      setTopTranslate(-(elapsed * 0.03));
      setBottomTranslate(-(elapsed * 0.07));

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [timerRunning]);

  return (
    <article
      className={`col-span-12 lg:col-span-4 flex justify-center lg:justify-end items-end`}
    >
      <div
        className={`py-3 flex flex-col justify-center items-start w-full max-w-[350px] h-full min-h-[510px] bg-white rounded-3xl`}
      >
        <button
          type="button"
          className={`cursor-pointer group relative self-end mr-5 flex items-center justify-end w-fit h-6`}
          onClick={togglePause}
        >
          {timerRunning ? (
            <>
              <IconPlayerPause
                className={`absolute top-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-300 ease-in-out`}
              />
              <IconPlayerPauseFilled
                className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out`}
              />
            </>
          ) : (
            <>
              <IconPlayerPlay
                className={`absolute top-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-300 ease-in-out`}
              />
              <IconPlayerPlayFilled
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
              {topProjects.length > 0 &&
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
              {bottomProjects.length > 0 &&
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
              className={`cursor-pointer relative w-full h-full bg-neutral-200 hover:bg-ravenci-primary/30 rounded-full hover:scale-105 overflow-hidden transition-all duration-300 ease-in-out`}
              onClick={() => handleIndicatorClick(index)}
            >
              <div
                className={`absolute top-0 left-0 h-full bg-ravenci-primary transition-all duration-75 ease-in-out`}
                style={{
                  width:
                    index < currentIndex
                      ? "100%"
                      : index === currentIndex
                        ? `${timerProgress}%`
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
