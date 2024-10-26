import { testimonials } from "../utils/constants";

function Testimonial({ className, ...props }) {
  return (
    <section className={`${className}`} {...props}>
      <div>
        <div className="flex flex-col items-center mb-[10.5rem]">
          <h3 className="sub-heading text-center mb-[0.9rem]">Testimonials</h3>
          <h2 className="h2 text-center w-[48.6rem]">
            Read what others have to say
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-[1.5rem]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col items-center bg-[#181A48] rounded-[33px]"
            >
              <img
                className="w-[11.4rem] rounded-full -translate-y-[3.3rem] mb-[2.2rem]
                mix-blend-luminosity"
                src={testimonial.picture}
                alt="picture of a person giving testimonial"
              />
              <h4 className="sub-heading -translate-y-[3.3rem] mb-[2.5rem]">
                {testimonial.name}
              </h4>
              <p className="text-[1.6rem] text-center font-normal font-[Roboto] -translate-y-[3.3rem] w-[31.2rem]">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
