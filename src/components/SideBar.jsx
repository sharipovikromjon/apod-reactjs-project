function Sidebar() {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle"></p>
          <p></p>
        </div>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
