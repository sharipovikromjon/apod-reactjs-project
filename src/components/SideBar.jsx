function Sidebar({ data, handleToggleModal, showModal }) {
  return (
    <div className={`sidebar ${showModal ? "visible" : "hidden"}`}>
      <div onClick={handleToggleModal} className={`bgOverlay ${showModal ? "visible" : "hidden"}`}></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
