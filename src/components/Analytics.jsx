function Analytics({ className, ...props }) {
  return (
    <section className={`${className}`} {...props}>
      <div className="flex items-center">
        <div className="w-full">
          <img src="/assets/Other2.png" alt="" />
        </div>
        <div className="w-full flex flex-col">
          <h3 className="sub-heading text-left mb-[0.7rem] text-[#AAD9D9]">
            Analytics
          </h3>
          <h2 className="h2 text-left mb-[2.9rem]">
            built-in analytics to track your NFTs
          </h2>
          <p className="body-text text-left mb-[2.2rem]">
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your Krypto portfolio over time.
          </p>
          <a
            href="#"
            className="sub-heading py-[1.7rem] px-[7.5rem] bg-[#9292DC] rounded-[107px]
            self-start"
          >
            View our pricing
          </a>
        </div>
      </div>
    </section>
  );
}

export default Analytics;
