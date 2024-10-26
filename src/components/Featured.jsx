import { companies } from "../utils/constants";

function Featured({ className, ...props }) {
  return (
    <section className={`${className}`} {...props}>
      <h3 className="sub-heading text-left">featured on</h3>
      <div className="flex items-center justify-center gap-[7.6rem] bg-[#4E439F] bg-opacity-30">
        {companies.map((company) => (
          <img
            className="bg-opacity-30"
            src={company}
            alt="company logo"
            key={company}
          />
        ))}
      </div>
    </section>
  );
}

export default Featured;
