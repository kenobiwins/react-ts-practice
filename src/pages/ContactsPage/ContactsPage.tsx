import Address from 'components/Address/Address';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import Iframe from 'components/GoogleMapIframe/Iframe';
import { FC } from 'react';

const ContactsPage: FC = () => {
  return (
    <>
      <h2>Contacts</h2>
      <Iframe />
      <ContactsForm />
      <Address />
    </>
  );
};

export default ContactsPage;
