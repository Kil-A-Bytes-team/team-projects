export const Card = ({ name, text, imageUrl, videoUrl }) => {
  return (
    <div className="col-md-3 col-sm-6 col-12">
      <div className="card text-center pt-4">
        <div className="card-body">
          <img alt="" src={imageUrl} className="img-fluid rounded-circle" />
          <video controls>
            <source src={videoUrl} type="video" />
          </video>
          <h2 className="card-title">{name}</h2>
          <p className="card-text">{text}</p>
          <div className="">
            <i className="bi bi-facebook px-1"></i>{" "}
            <i className="bi bi-instagram px-1"></i>{" "}
            <i className="bi bi-twitter px-1"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
