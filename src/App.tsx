import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./App.module.scss";
import { getCatalogue, setPagesCount } from "./redux/catalogueReducer";
import Paginator from "./components/paginator";
import Catalog from "./components/catalog";
import PageSizeSelector from "./components/pageSizeSelector";
import InStockBtns from "./components/inStockBtn";

const App = () => {
  const dispatch = useDispatch();
  //const { pagesCount } = useSelector((state: any) => state.catalogue);
  const [thisPage, setThisPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    loadPage().then(() => dispatch(setPagesCount(pageSize)));
  });

  const loadPage = async () => {
    await dispatch(getCatalogue());
  };

  /* useEffect(() => {
    dispatch(getCatalogue());
    dispatch(setPagesCount(pageSize));
    console.log("use 2");
  }, [pageSize]); */

  const changePageSize = (pageDimension: number) => {
    dispatch(setThisPage(1));
    dispatch(setPageSize(pageDimension));
    loadPage().then(() => dispatch(setPagesCount(pageSize)));
  };

  return (
    <div className={style.App}>
      <h1>Explore</h1>
      <h6>Buy and sell digital fashion NFT art</h6>
      <div>
        <Paginator thisPage={thisPage} setThisPage={setThisPage} />
        <PageSizeSelector changePageSize={changePageSize} />
        <InStockBtns pageSize={pageSize} />
        <Catalog pageSize={pageSize} thisPage={thisPage} />
        <Paginator thisPage={thisPage} setThisPage={setThisPage} />
      </div>
    </div>
  );
};

export default App;
