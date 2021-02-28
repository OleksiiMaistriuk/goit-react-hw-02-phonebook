import style from './ContactList.module.css';
export default function contactsMarkup({ contacts, onDeleteContact }) {
  return (
    <ul className={style.list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={style.item} key={id}>
            {name}: {number}
            <button
              className={style.button}
              onClick={() => onDeleteContact(id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
