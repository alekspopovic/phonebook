import { useRef, useState } from "react";

const defaultState = {
  name: "",
  email: "",
  phone: "",
  website: "",
};

export default function AddContactForm({ addContact, isOpen, close }) {
  const [formData, setFormData] = useState(defaultState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(formData);
    closeAndResetData();
  };

  const closeAndResetData = () => {
    close();
    setFormData(defaultState);
  };

  return (
    <div
      className={`${isOpen ? "z-10 opacity-100" : "pointer-events-none opacity-0"} transition-opacity duration-300 ease-in-out`}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="sm-my-8 w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm-items-start sm:flex">
                <form
                  className="mt-3 w-full text-left sm:ml-4 sm:mt-0"
                  onSubmit={handleSubmit}
                >
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">
                    Add Contact
                  </h3>
                  <div className="mb-2">
                    <label
                      htmlFor="name"
                      className="block font-bold text-gray-700"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded border px-3 py-2 text-gray-700 shadow"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="block font-bold text-gray-700"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded border px-3 py-2 text-gray-700 shadow"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="phone"
                      className="block font-bold text-gray-700"
                    >
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded border px-3 py-2 text-gray-700 shadow"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="website"
                      className="block font-bold text-gray-700"
                    >
                      Website URL:
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full rounded border px-3 py-2 text-gray-700 shadow"
                    />
                  </div>
                  <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    >
                      Add Contact
                    </button>
                    <button
                      type="button"
                      onClick={closeAndResetData}
                      className="mt-3 w-full justify-center rounded-md border bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
