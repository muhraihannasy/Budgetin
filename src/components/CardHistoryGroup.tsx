import CardHistory from "./CardHistory";

const CardHistoryGroup = ({ date }) => {
  return (
    <div>
      <h2 className="text-sm text-slate-500">{date}</h2>

      <div className="mt-4 flex flex-col gap-5">
        <CardHistory title="Beli Makanan" time="10.00 AM" price="Rp. 200.000" />
        <CardHistory title="Beli Makanan" time="10.00 AM" price="Rp. 200.000" />
        <CardHistory title="Beli Makanan" time="10.00 AM" price="Rp. 200.000" />
      </div>
    </div>
  );
};

export default CardHistoryGroup;
