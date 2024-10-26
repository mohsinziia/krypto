function GetApp({ className, ...props }) {
  return (
    <section className={`${className}`} {...props}>
      <div className="flex items-center">
        <div className="w-full flex flex-col">
          <h3 className="sub-heading text-left mb-[0.7rem] text-[#AAD9D9]">
            get our app
          </h3>
          <h2 className="h2 text-left mb-[2.9rem]">
            browse NFTs from your smartphone
          </h2>
          <p className="body-text text-left mb-[2.2rem]">
            Our Krypto app is the easiest way to keep track of your assets when
            you're on the go.
          </p>
          <a
            href="#"
            className="sub-heading py-[1.7rem] px-[7.5rem] bg-[#9292DC] rounded-[107px]
            self-start"
          >
            Download on ios
          </a>
        </div>
        <div className="w-full">
          <img src="/assets/Other2.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default GetApp;
