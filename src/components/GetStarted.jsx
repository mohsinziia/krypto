function GetStarted({ className, ...props }) {
  return (
    <section className={`${className}`} {...props}>
      <div className="w-full flex flex-col py-[6.3rem] mb-[5.2rem] items-center bg-gradient-to-br from-[#181A48] to-[#8EB5BE] rounded-[36px]">
        <h3 className="sub-heading text-black mb-[3.1rem]">are you ready?</h3>
        <h2 className="h2 w-[48.8rem] text-center mb-[5.5rem]">
          be a part of the next big thing
        </h2>
        <a
          href="#"
          className="sub-heading py-[1.7rem] px-[7.5rem] bg-black rounded-[107px]"
        >
          Get started
        </a>
      </div>
    </section>
  );
}

export default GetStarted;
