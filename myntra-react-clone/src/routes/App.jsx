import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from "../components/fetchItems";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      {!fetchStatus.fetchDone && <FetchItems />}
      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner />
      ) : fetchStatus.error ? (
        <div className="error-message">
          Failed to load items. Please try again.
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
};

export default App;
