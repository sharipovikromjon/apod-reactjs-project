function Main({ data }) {
  let src = data.hdurl
  return (
    <div className="imgContainer">
      <img className="bgImage" src={src} alt={data.title || "bg-img"} />
    </div>
  );
}

export default Main;
