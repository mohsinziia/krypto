function Access({ className, ...props }) {
  return (
    <section className={`${className}`} {...props}>
      <div className="flex items-center">
        <div className="w-full">
          <img src="/assets/Other2.png" alt="" />
        </div>
        <div className="w-full flex flex-col">
          <h3 className="sub-heading text-left mb-[0.7rem] text-[#AAD9D9]">
            24/7 access
          </h3>
          <h2 className="h2 text-left mb-[2.9rem]">
            sell your NFTs from anywhere at any time
          </h2>
          <p className="body-text text-left mb-[2.2rem]">
            With our easy-to-use platform, you can buy or sell assets from
            anywhere in the world, at any time.
          </p>
          <a
            href="#"
            className="sub-heading py-[1.7rem] px-[7.5rem] bg-[#9292DC] rounded-[107px]
            self-start"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Access;
