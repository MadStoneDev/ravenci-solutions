export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role?: string;
  company?: string;
  image?: string | null;
  pages: string[];
  industry?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "geoff-beisler",
    content:
      "I could not recommend Richard more highly. His knowledge is remarkable, his professionalism exceptional, and the way he completely sorted my issues, quickly, effortlessly was simply brilliant. Champion bloke, brilliant at what he does.",
    author: "Geoff Beisler",
    image: null,
    pages: ["homepage", "retainer-packages"],
  },
  {
    id: "adam-bisset",
    content:
      "Richard is the absolute best at what he does. Our brand new startup is launching with the best possible website I could have imagined. He took the time from the very beginning to understand us and our business, and he has made our branding and website reflect that and represent us perfectly.",
    author: "Adam Bisset",
    image: null,
    pages: ["web-development"],
  },
  {
    id: "viv-luhrs",
    content:
      "Richard is amazing! He really cares about his work, his customers and people in general. The work that he has done for me goes above and beyond. Definitely recommend Richard to anyone!",
    author: "Viv Luhrs",
    image: null,
    pages: ["website-maintenance"],
  },
  {
    id: "danni-green-1",
    content:
      "Eleven out of ten for an amazing service! Richard goes above and beyond to ensure all the i's are dotted and t's are crossed.",
    author: "Danni Green",
    image: null,
    pages: ["web-hosting", "homepage"],
  },
  {
    id: "danni-green-2",
    content:
      "I highly recommend Richard to any business looking for a website or a designer looking to partner with a highly-skilled and experienced developer. You will be in good hands!",
    author: "Danni Green",
    image: null,
    pages: ["web-hosting"],
  },
  {
    id: "timothy-odonnell",
    content:
      "Richard went ABOVE and beyond for my request. Quality was amazing and his efforts to satisfy my extra needs (he fitted it to a damn guitar!) Pure talent. Thankyou sir",
    author: "Timothy O'Donnell",
    image: null,
    pages: ["business-design"],
  },
];

export function getTestimonialsForPage(page: string): Testimonial[] {
  return testimonials.filter((t) => t.pages.includes(page));
}

export function getTestimonialsForIndustry(industry: string): Testimonial[] {
  return testimonials.filter((t) => t.industry === industry);
}

export function getTestimonialByID(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id);
}
