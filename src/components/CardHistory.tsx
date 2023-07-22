const CardHistory = ({ title, time, price }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-[3em] h-[3em] rounded-full bg-secondary"></div>

        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm">{time}</p>
        </div>
      </div>

      <h2 className="font-semibold">{price}</h2>
    </div>
  );
};

export default CardHistory;
