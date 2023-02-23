import Address from 'components/Address/Address';
import GoogleMapIframe from 'components/GoogleMapIframe/GoogleMapIframe';
import { FC } from 'react';

const ContactsPage: FC = () => {
  return (
    <>
      <h2>Contacts</h2>
      <GoogleMapIframe />
      <Address />
    </>
  );
};

export default ContactsPage;
