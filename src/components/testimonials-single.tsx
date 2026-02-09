type Testimonial = {
  content: string;
  author: string;
  role?: string;
  company?: string;
  image: null | string;
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const TestimonialCarousel = ({
  testimonial,
  extraClassNames,
}: {
  testimonial: Testimonial;
  extraClassNames?: string;
}) => {
  const nameParts = testimonial.author.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section
      className={`pt-32 pb-28 px-5 w-full text-white ${extraClassNames}`}
    >
      <article className={`mx-auto max-w-md text-center`}>
        {/* Initials avatar */}
        <div className="mx-auto mb-8 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-xl font-bold text-white">
            {getInitials(testimonial.author)}
          </span>
        </div>

        <p
          className={`mb-12 font-poppins font-light leading-8 text-ravenci-light-gray`}
        >
          &ldquo;{testimonial.content}&rdquo;
        </p>

        <h3 className={`font-poppins text-2xl font-light text-neutral-100`}>
          <span className={`font-bold`}>{firstName}</span>{" "}
          {lastName}
        </h3>

        {(testimonial.role || testimonial.company) && (
          <p className="mt-1 text-sm text-white/60">
            {testimonial.role}
            {testimonial.role && testimonial.company && ", "}
            {testimonial.company}
          </p>
        )}
      </article>
    </section>
  );
};

export default TestimonialCarousel;
