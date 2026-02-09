export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role?: string;
  company?: string;
  image?: string | null;
  pages: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: "geoff-beisler",
    content:
      "I could not recommend Richard more highly. His knowledge is remarkable, his professionalism exceptional, and the way he completely sorted my issues, quickly, effortlessly was simply brilliant. Champion bloke, brilliant at what he does.",
    author: "Geoff Beisler",
    image: null,
    pages: ["homepage"],
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
    id: "lisa-parker",
    content:
      "RAVENCI's SEO and content work has been transformational. We went from page 3 to ranking #1 for our main keywords. Our organic traffic has increased 300% and leads have tripled.",
    author: "Lisa Parker",
    role: "Marketing Manager",
    image: null,
    pages: ["seo-and-content"],
  },
  {
    id: "v-consulting",
    content:
      "What used to take days to complete manually, holding back projects and documentation now takes minutes with the app Richard built for us. Best of all, it's user-friendly. Anyone can use it.",
    author: "V Consulting",
    image: null,
    pages: ["web-apps"],
  },
  {
    id: "ethan-miles",
    content:
      "RAVENCI turned our concept into a polished, store-ready app. Clear communication and on-time delivery.",
    author: "Ethan Miles",
    image: null,
    pages: ["mobile-apps"],
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
