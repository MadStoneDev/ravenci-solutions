type Testimonial = {
  content: string;
  author: string;
  image: null | string;
};

const TestimonialCarousel = ({
  testimonial,
  extraClassNames,
}: {
  testimonial: Testimonial;
  extraClassNames?: string;
}) => {
  return (
    <section
      className={`pt-32 pb-28 px-5 w-full text-white ${extraClassNames}`}
    >
      <article className={`mx-auto max-w-md text-center`}>
        <p
          className={`mb-12 font-poppins font-light leading-8 text-ravenci-light-gray`}
        >
          {testimonial.content}
        </p>
        {/*<h3*/}
        {/*  className={`inline-block py-1 pl-2 border-l-4 border-ravenci-gray/60 font-poppins text-xs font-bold uppercase text-ravenci-gray/60`}*/}
        {/*>*/}
        {/*  {testimonial.author}*/}
        {/*</h3>*/}

        <h3 className={`font-poppins text-2xl font-light text-neutral-100`}>
          <span className={`font-bold`}>
            {testimonial.author.split(" ")[0]}
          </span>{" "}
          {testimonial.author.split(" ")[1]}
        </h3>
      </article>
    </section>
  );
};

export default TestimonialCarousel;
