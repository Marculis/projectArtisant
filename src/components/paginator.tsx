import { useDispatch, useSelector } from "react-redux";
import style from "./paginator.module.scss";

const Paginator = (props: any) => {
  const dispatch = useDispatch();

  const { pagesCount } = useSelector((state: any) => state.catalogue);

  return (
    <div className={style.paginator}>
      <button
        disabled={props.thisPage > 1 ? false : true}
        onClick={() => {
          dispatch(props.setThisPage(props.thisPage - 1));
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
          dispatch(props.setThisPage(props.thisPage + 1));
        }}
      >
        next
      </button>
    </div>
  );
};

export default Paginator;
