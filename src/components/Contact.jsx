import EmailIcon from "../icons/email.svg";
import PhoneIcon from "../icons/phone.svg";
import LinkIcon from "../icons/link.svg";
import DeleteIcon from "../icons/delete.svg";
import Icon from "./Icon";
import getColor from "../utility/getColor";

export default function Contact({ contact, removeContact }) {
  const initials = contact.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div className="bg-bray-50 flex w-full flex-col overflow-hidden rounded-md shadow shadow-neutral-300 sm:w-56">
      <div className="flex items-center border-b border-gray-200">
        {initials && (
          <span
            className="p-2 text-white"
            style={{ backgroundColor: getColor(contact.name) }}
          >
            {initials}
          </span>
        )}
        <div className="grow text-center text-gray-600">{contact.name}</div>
      </div>
      <div className="flex justify-evenly bg-indigo-50">
        {contact.email && (
          <Icon
            src={EmailIcon}
            alt="email"
            action={`mailto: ${contact.email}`}
            type="link"
          />
        )}
        {contact.phone && (
          <Icon
            src={PhoneIcon}
            alt="phone"
            action={`tel:${contact.phone}`}
            type="link"
          />
        )}
        {contact.website && (
          <Icon
            src={LinkIcon}
            alt="link"
            action={contact.website}
            type="link"
          />
        )}
        <Icon
          src={DeleteIcon}
          alt="delete"
          action={removeContact}
          type="delete"
        />
      </div>
    </div>
  );
}
