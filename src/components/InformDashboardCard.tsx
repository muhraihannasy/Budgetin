interface InformDashboardInterface {
  title: string;
  price: string;
}

const InformDashboardCard: React.FC<InformDashboardInterface> = ({
  title,
  price,
}) => {
  return (
    <div className="bg-white rounded-xl p-3 shadow-lg">
      <div className="w-[3em] h-[3em] rounded-full bg-secondary"></div>

      <span className="block mt-3 mb-0.5 text-slate-400 text-sm">{title}</span>
      <h3 className="font-bold">Rp. {price}</h3>
    </div>
  );
};

export default InformDashboardCard;
