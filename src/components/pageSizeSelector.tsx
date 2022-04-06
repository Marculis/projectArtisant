import style from "./pageSizeSelector.module.scss";

const PageSizeSelector = (props: any) => {
  return (
    <div className={style.select}>
      <span> Items per page</span>
      <select
        name="pageSize"
        defaultValue="20"
        onChange={(e) => {
          props.changePageSize(e.target.value);
        }}
      >
        <option value="12">12</option>
        <option value="20">20</option>
        <option value="28">28</option>
        <option value="40">40</option>
      </select>
    </div>
  );
};

export default PageSizeSelector;
