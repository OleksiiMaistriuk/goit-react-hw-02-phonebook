import style from './Filter.module.css';
export default function Filter({ filter, onChange }) {
  return (
    <div className={style.section}>
      <p className={style.title}> Find contacts by name </p>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
}
