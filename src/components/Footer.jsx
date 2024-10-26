import { kryptoList, marketList, contactList } from "../utils/constants";
import { Input } from "../components";

function Footer() {
  return (
    <footer>
      <div className="flex justify-between">
        <div className="w-full">
          <h3 className="sub-heading text-[2.2rem] leading-none tracking-normal">
            Krypto
          </h3>
        </div>
        <div className="w-full">
          <h4 className="sub-heading text-[1.6rem] leading-none tracking-none normal-case mb-[1.9rem]">
            krypto
          </h4>
          <ul>
            {kryptoList.map((kryptoItem) => (
              <li
                className="body-text text-[1.6rem] leading-[3.1rem]"
                key={kryptoItem}
              >
                {kryptoItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h4 className="sub-heading text-[1.6rem] leading-none tracking-none normal-case mb-[1.9rem]">
            market
          </h4>
          <ul>
            {marketList.map((marketItem) => (
              <li
                className="body-text text-[1.6rem] leading-[3.1rem]"
                key={marketItem}
              >
                {marketItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h4 className="sub-heading text-[1.6rem] leading-none tracking-none normal-case mb-[1.9rem]">
            contact
          </h4>
          <ul>
            {contactList.map((contactList) => (
              <li
                className="body-text text-[1.6rem] leading-[3.1rem]"
                key={contactList}
              >
                {contactList}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h3 className="sub-heading text-[2.2rem] leading-none tracking-none normal-case mb-[4.2rem]">
            Join our newsletter
          </h3>
          <Input type="email" placeholder="Email Address" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
