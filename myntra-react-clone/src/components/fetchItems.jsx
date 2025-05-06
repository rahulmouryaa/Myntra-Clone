import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const markFetchDone = useSelector((store) => store.fetchStatus.markFetchDone);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Only fetch if not done yet
    if (!markFetchDone) {
      dispatch(fetchStatusActions.markFetchingStarted());

      fetch("http://localhost:8080/items", { signal })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch items");
          return res.json();
        })
        .then(({ items }) => {
          dispatch(itemsActions.addInitialItems(items[0])); // Load all items
          dispatch(fetchStatusActions.markFetchDone());
        })
        .catch((error) => {
          if (error.name !== "AbortError") console.error("Fetch error:", error);
        })
        .finally(() => {
          dispatch(fetchStatusActions.markFetchingFinished());
        });
    }

    // Cleanup to cancel fetch on unmount
    return () => controller.abort();
  }, [markFetchDone, dispatch]);

  return null;
};

export default FetchItems;
