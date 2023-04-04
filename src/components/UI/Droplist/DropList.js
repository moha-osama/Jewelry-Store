import classes from "./DropList.module.css";

const DropList = ({ data, onFilter }) => {
  let id = data.address;

  const getFilterValue = (event) => {
    onFilter(event.target.value);
  };

  return (
    <>
      <div className={classes.header}>
        <h3>{data.address}</h3>
        <label htmlFor={id}>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
          </svg>
        </label>
      </div>
      <div className={classes.items}>
        <input type="checkbox" id={id} className={classes["icon-check"]} />
        <ul>
          {data.items.map((item) => (
            <li key={item.id}>
              <input
                name="option"
                type="radio"
                id={item.id}
                value={item.label}
                onChange={getFilterValue}
              />
              <label htmlFor={item.id}>{item.label}</label>
            </li>
          ))}
        </ul>
      </div>
      <hr className={classes.border} />
    </>
  );
};

export default DropList;
