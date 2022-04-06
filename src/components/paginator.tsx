import { useSelector } from "react-redux";
import style from "./paginator.module.scss";

const Paginator = (props: any) => {
  const { pagesCount } = useSelector((state: any) => state.catalogue);

  const scrollOnTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.paginator}>
      <button
        disabled={props.thisPage > 1 ? false : true}
        onClick={() => {
          props.setThisPage(props.thisPage - 1);
          scrollOnTop();
        }}
      >
        prev
      </button>

      <div className={style.thisPage}>
        <b>{props.thisPage}</b>
      </div>

      <button
        disabled={props.thisPage < pagesCount ? false : true}
        onClick={() => {
          props.setThisPage(props.thisPage + 1);
          scrollOnTop();
        }}
      >
        next
      </button>
    </div>
  );
};

export default Paginator;
