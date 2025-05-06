const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "5rem", height: "5rem", borderWidth: "0.3em" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
