"use client";

import { useEffect, useRef, useState } from "react";
import { IconPlayerPause, IconPlayerPauseFilled } from "@tabler/icons-react";

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
  const ourServices = [
    {
      title: "Business Website Development",
      projectsTopRow: [
        { name: "Top 1" },
        { name: "Top 2" },
        { name: "Top 3" },
        { name: "Top 4" },
      ],
      projectsBottomRow: [
        { name: "Bottom 1" },
        { name: "Bottom 2" },
        { name: "Bottom 3" },
        { name: "Bottom 4" },
      ],
    },
    {
      title: "Web Platform Development",
      projectsTopRow: [
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
      ],
      projectsBottomRow: [
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
      ],
    },
    {
      title: "Mobile App Development",
      projectsTopRow: [
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
      ],
      projectsBottomRow: [
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
      ],
    },
    {
      title: "Web Platform Development",
      projectsTopRow: [
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
      ],
      projectsBottomRow: [
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
      ],
    },
    {
      title: "Web Maintenance and Hosting",
      projectsTopRow: [
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
      ],
      projectsBottomRow: [
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
        { name: "Coming Soon" },
      ],
    },
  ];
  const DURATION = 10000;

  // States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
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
  const animationFrameRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Functions
  const animate = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;

    const elapsed = timestamp - startTimeRef.current;
    const newProgress = Math.min((elapsed / DURATION) * 100, 100);

    setProgress(newProgress);

    if (elapsed < DURATION) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  const startAnimation = () => {
    startTimeRef.current = null;
    setProgress(0);

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Scroll Animation Effect
  useEffect(() => {
    let startTime = performance.now();
    const projectWidth = 200; // width of each project
    const gapWidth = 12; // gap-3 = 12px in Tailwind
    const numberOfProjects = currentService.projectsTopRow.length;
    const totalDistance =
      projectWidth * numberOfProjects + gapWidth * (numberOfProjects - 1);

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const topSpeed = 0.03;
      const bottomSpeed = 0.07;

      setTopTranslate(() => {
        return -(elapsed * topSpeed) % totalDistance;
      });

      setBottomTranslate(() => {
        return -(elapsed * bottomSpeed) % totalDistance;
      });

      requestAnimationFrame(animateScroll);
    };

    const animationFrame = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [currentIndex]);

  // Progress Timer Effect
  useEffect(() => {
    startAnimation();

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % ourServices.length;
        startAnimation();
        return nextIndex;
      });
    }, DURATION);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [ourServices.length]);

  return (
    <article className="col-span-12 lg:col-span-4 flex justify-center">
      <div className="py-3 flex flex-col justify-center w-full max-w-md h-full min-h-[510px] bg-white rounded-3xl">
        <div className="cursor-pointer group relative px-5 flex items-center justify-end h-6">
          <IconPlayerPause className="absolute top-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-300 ease-in-out" />
          <IconPlayerPauseFilled className="absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </div>

        <section className="py-3 flex-grow flex flex-col justify-center gap-3 w-full">
          <div className="overflow-hidden">
            <div
              className="flex gap-3 w-fit transition-transform duration-100 ease-linear"
              style={{ transform: `translateX(${topTranslate}px)` }}
            >
              {topProjects.map((project, index) => (
                <article
                  key={`top-projects-${index}`}
                  className={`grid place-content-center w-[200px] h-[150px] bg-neutral-200 font-light italic`}
                >
                  {project.name}
                </article>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-3 w-fit transition-transform duration-100 ease-linear"
              style={{ transform: `translateX(${bottomTranslate}px)` }}
            >
              {bottomProjects.map((project, index) => (
                <article
                  key={`bottom-projects-${index}`}
                  className={`grid place-content-center w-[200px] h-[150px] bg-neutral-200 font-light italic`}
                >
                  {project.name}
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

        <section className="px-5 flex flex-row flex-nowrap gap-1 w-full h-2">
          {ourServices.map((_, index) => (
            <article
              key={`indicator-${index}`}
              className="relative w-full h-full bg-neutral-200 rounded-full overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 h-full bg-ravenci-primary transition-all duration-50 ease-linear"
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
