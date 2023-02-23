import { FC } from 'react';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Address: FC = () => {
  return (
    <address>
      <ul>
        <li>Bankova Street, Kyiv</li>
        <li>
          <a href="mailto:info@example.com" lang="en">
            info@example.com
          </a>
        </li>
        <li>
          <a href="tel+380991111111">+380991111111</a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a
            href="https://uk-ua.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Address;
