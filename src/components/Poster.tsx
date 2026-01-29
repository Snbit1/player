type PosterProps = {
  onClick: () => void;
};

const Poster = ({ onClick }: PosterProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: 480,
        height: 270,
        border: "4px solid #7c3aed",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        margin: "120px auto",
        color: "#7c3aed",
        fontSize: 64,
      }}
    >
      ▶
    </div>
  );
};

export default Poster;
