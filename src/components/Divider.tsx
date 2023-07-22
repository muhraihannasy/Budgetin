const Divider = ({ title }) => {
  return (
    <div className="flex items-center justify-between mb-3 pt-[1em] py-1">
      <h2 className="font-semibold text-xl">{title}</h2>
      <a href="" className="font-semibold text-md text-primary">
        See all
      </a>
    </div>
  );
};

export default Divider;
