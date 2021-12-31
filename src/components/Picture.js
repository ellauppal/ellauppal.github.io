function Picture(props) {
  const { src } = props;

  return (
    <div className="boarder">
      <img className='face' src={src} alt="face"/>
    </div>
  );
}

export default Picture;
