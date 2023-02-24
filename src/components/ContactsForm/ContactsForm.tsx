import { ChangeEvent, FC, FormEvent, useState } from 'react';

interface IForm {
  name: string;
  email: string;
  phone: string;
  file?: string;
  description: string;
}
const initialState: IForm = {
  name: '',
  email: '',
  phone: '',
  description: '',
};
const ContactsForm: FC = () => {
  const [form, setForm] = useState<IForm | null>(initialState);
  //   const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  //   const filesPicker = useRef<HTMLInputElement | null>(null);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevState: null | any) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
  //   const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
  //     setSelectedFiles(e.target.files);
  //   };

  //   const handleUpload = () => {
  //     if (!selectedFiles) {
  //       return alert('please select a file');
  //     }

  //     const formData = new FormData();
  //     formData.append('photo', selectedFiles);
  //   };

  //   const handlePick = () => {
  //     console.log(filesPicker.current);
  //   };

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prevState: any) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Are you have a questions?</h2>
      <label>
        <input
          name="name"
          type="text"
          onChange={handleInput}
          value={form?.name}
          placeholder="Your name"
        />
      </label>
      <label>
        <input
          name="email"
          type="email"
          onChange={handleInput}
          value={form?.email}
          placeholder="Your email"
        />
      </label>
      <label>
        <input
          name="phone"
          type="text"
          onChange={handleInput}
          value={form?.phone}
          placeholder="Your phone"
        />
      </label>
      {/* <button type="button" onClick={handlePick}>
        Pick files
      </button>
      <label>
        If possible please attach photos
        <input
          ref={filesPicker}
          name="file"
          type="file"
          onChange={handleFileInput}
          accept="image/*,.png,.jpg,.web"
          multiple
        />
      </label> */}
      <textarea
        name="description"
        onChange={handleTextArea}
        value={form?.description}
        placeholder="To describe a problem fully."
      />
      <button>Submit form</button>
    </form>
  );
};

export default ContactsForm;
