import Address from 'components/Address/Address';
import Iframe from 'components/GoogleMapIframe/Iframe';
import { FC } from 'react';

const ContactsPage: FC = () => {
  return (
    <>
      <h2>Contacts</h2>
      <Iframe />
      <Address />
    </>
  );
};

export default ContactsPage;
