import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./App.module.scss";
import {
  getCatalogue,
  setPagesCount,
  setPageSize,
} from "./redux/catalogueReducer";
import Paginator from "./components/paginator";
import Catalog from "./components/catalog";
import PageSizeSelector from "./components/pageSizeSelector";
import InStockBtns from "./components/inStockBtn";

const App = () => {
  const dispatch = useDispatch();
  const [thisPage, setThisPage] = useState(1);

  useEffect(() => {
    loadPage().then(() => dispatch(setPagesCount()));
  }, []);

  const loadPage = async () => {
    await dispatch(getCatalogue());
  };

  const changePageSize = (pageDimension: number) => {
    setThisPage(1);
    dispatch(setPageSize(pageDimension));
    dispatch(setPagesCount());
  };

  return (
    <div className={style.App}>
      <h1>Explore</h1>
      <h6>Buy and sell digital fashion NFT art</h6>
      <div>
        <Paginator thisPage={thisPage} setThisPage={setThisPage} />
        <PageSizeSelector changePageSize={changePageSize} />
        <InStockBtns setThisPage={setThisPage} />
        <Catalog thisPage={thisPage} />
        <Paginator thisPage={thisPage} setThisPage={setThisPage} />
      </div>
    </div>
  );
};

export default App;
