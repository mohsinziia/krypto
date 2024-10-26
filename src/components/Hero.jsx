function Hero({ className, ...props }) {
  return (
    <div className={`${className}`} {...props}>
      <nav
        id="navbar"
        className="flex justify-between mt-[7.4rem] mb-[14.8rem]"
      >
        <ul className="flex">
          <li className="sub-heading [letter-spacing: 0%] font-bold">Krypto</li>
        </ul>
        <ul className="flex gap-[7.5rem]">
          <li className="sub-heading [letter-spacing: 0%] normal-case font-normal">
            about
          </li>
          <li className="sub-heading [letter-spacing: 0%] normal-case font-normal">
            pricing
          </li>
          <li className="sub-heading [letter-spacing: 0%] normal-case font-normal">
            contact
          </li>
          <li className="sub-heading [letter-spacing: 0%] normal-case font-normal">
            buy nfts
          </li>
        </ul>
      </nav>
      <section id="hero">
        <div className="flex">
          <div className="w-full">
            <h1 className="main-heading w-[46.4rem] text-left mb-[3.2rem]">
              Discover and collect rare NFTs
            </h1>
            <p className="body-text text-left mb-[3.2rem]">
              The most secure marketplace for buying and selling unique crypto
              assets.
            </p>

            <div className="flex gap-[1.5rem]">
              <a
                href="#"
                className="sub-heading py-[1.7rem] px-[7.5rem] bg-[#9292DC] rounded-[107px]"
              >
                Buy NFTs
              </a>
              <a
                href="#"
                className="sub-heading py-[1.7rem] px-[7.5rem] border border-[#96D4D5] rounded-[107px]"
              >
                Sell NFTs
              </a>
            </div>
          </div>
          <div className="w-full relative">
            <img
              className="absolute -bottom-10"
              src="/assets/Other1.png"
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
