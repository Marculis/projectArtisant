import { useSelector } from "react-redux";
import catalogueImg from "../assets/images/catalogueItem.png";
import style from "./catalog.module.scss";

const Catalog = (props: any) => {
  const { catalogueList } = useSelector((state: any) => state.catalogue);

  return (
    <div className={style.itemsContainer}>
      {catalogueList.map((item: any, index: number) => {
        if (
          index >= (props.thisPage - 1) * props.pageSize &&
          index < props.thisPage * props.pageSize
        ) {
          return (
            <div className={style.catalogItem} key={item.product_id}>
              {!item.quantity_available && (
                <div className={style.unavailableItem}>
                  <h3>Currently unavailable!</h3>
                </div>
              )}
              <div className={style.creatorName}>
                created by <br /> <span> {item.created_by.display_name}</span>
              </div>
              <div className={style.itemName}> {item.name}</div>
              <div className={style.quantity}>
                available <br />
                <span>{item.quantity_available} of 50</span>
              </div>
              <div className={style.price}>
                price <br /> <span> {item.initial_price} ETH</span>
              </div>
              <img src={catalogueImg} alt="" />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Catalog;
