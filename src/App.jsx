import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import AddContactForm from "./components/AddContactForm";
import {
  addContactToFirebase,
  getContactsFromFirebase,
  deleteContactFromFirebase,
} from "./utility/firebase";

const sort = (array) => {
  return array.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  );
};

function App() {
  const [contacts, setContacts] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      const retrievedContacts = await getContactsFromFirebase();
      setContacts(sort(retrievedContacts));
    };

    fetchContacts();
  }, []);

  const removeContact = async (id) => {
    await deleteContactFromFirebase(id).then(() => {
      const newContacts = contacts.filter((contact) => contact.id !== id);

      setContacts(newContacts);
    });
  };

  const addContact = async (contact) => {
    const newContactId = await addContactToFirebase(contact);

    if (newContactId) {
      const newContact = { ...contact, id: newContactId };

      const sortedContacts = sort([...contacts, newContact]);

      setContacts(sortedContacts);
    }
  };

  return (
    <div className="text-md flex min-h-screen flex-col items-center bg-orange-50 px-8 pt-8 font-inter text-gray-700 sm:px-0">
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="mb-6 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:mx-auto sm:w-auto"
      >
        New Contact
      </button>
      <div className="flex flex-row flex-wrap justify-center gap-4 lg:w-1/2 lg:justify-start">
        {contacts?.map((contact) => {
          return (
            <Contact
              contact={contact}
              key={contact.id}
              removeContact={() => removeContact(contact.id)}
            />
          );
        })}
      </div>
      <AddContactForm
        addContact={addContact}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
