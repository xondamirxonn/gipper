function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        zIndex: "9",
        left: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow3(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "50%",
        position: "absolute",
        right: "13px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow3(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        position: "absolute",
        left: "2px",
        borderRadius: "50%",
        zIndex: "9",
      }}
      onClick={onClick}
    />
  );
}

export { SampleNextArrow, SamplePrevArrow, SampleNextArrow3, SamplePrevArrow3 };
