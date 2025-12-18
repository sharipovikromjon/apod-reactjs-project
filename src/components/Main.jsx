function Main({ data }) {
  return (
    <div className="imgContainer">
      <img
        className="bgImage"
        src={data.hdurl || "/mars.png"}
        alt={data.title || "bg-img"}
      />
    </div>
  );
}

export default Main;
