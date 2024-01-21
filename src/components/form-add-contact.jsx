import axios from "axios";
import { useState } from "react";

export default function FormAddContact() {
  const [contacts, setConacts] = useState([]);

  async function addContact(event) {
    event.preventDefault(); // mencegah form submit / reload page

    const name = event.target.name.value;
    const phone = event.target.phone.value;

    const data = { name, phone };

    const response = await axios.post(
      "https://dummyjson.vercel.app/contacts",
      data
    );

    setConacts(response.data.data);
  }

  return (
    <>
      <form onSubmit={addContact} className="p-4 flex flex-col gap-4">
        <input type="text" name="name" placeholder="Name" className="border" />
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          className="border"
        />
        <div className="flex justify-end">
          <button type="submit" className="border px-4 py-2">
            Tambahkan
          </button>
        </div>
      </form>

      {contacts.map((contact) => (
        <div key={contact.id}>
          {contact.name} - {contact.phone}
        </div>
      ))}
    </>
  );
}
