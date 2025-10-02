import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActions } from "../Store/Fetch";
import { itemsAction } from "../Store/itemsSlice";

function FetchItems() {
  let fetchingDone = useSelector((state) => state.fetch.fetchDone);
  let dispatch = useDispatch();

  useEffect(() => {
    if (fetchingDone) return;

    let controller = new AbortController();
    let signal = controller.signal;
    fetch("http://localhost:8080/items", { signal: signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          itemsAction.addInitialItems({
            items: data.items,
          })
        );
        dispatch(fetchActions.markfetchDone());
      });
    return () => {
      controller.abort();
    };
  }, [fetchingDone]);
  return <></>;
}

export default FetchItems;
