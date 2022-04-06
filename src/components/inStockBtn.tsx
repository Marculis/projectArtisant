import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCatalogue, setItemsInStock } from "../redux/catalogueReducer";
import style from "./inStockBtn.module.scss";

const InStockBtns = (props: any) => {
  const [stockItems, setStockItems] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={style.stockBtn}>
      {stockItems ? (
        <button
          onClick={() => {
            dispatch(getCatalogue());
            setStockItems(false);
            props.setThisPage(1);
          }}
        >
          <span> All </span> items
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(setItemsInStock());
            setStockItems(true);
            props.setThisPage(1);
          }}
        >
          Items<span> in stock</span>
        </button>
      )}
    </div>
  );
};
export default InStockBtns;
