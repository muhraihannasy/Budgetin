const PlanCard = () => {
  return (
    <div className="rounded-xl shadow-md bg-white py-4 pl-4 pr-[3em] whitespace-nowrap">
      <div className="w-[3.5em] h-[3.5em] bg-slate-200 rounded-full"></div>

      <div className="my-4">
        <h2 className="font-semibold">Jalan - Jalan Ke Bali</h2>
        <p className="text-sm text-slate-400">23 December 2023</p>
      </div>

      <h2 className="flex gap-1 text-sm">
        <span className="font-bold text-primary">Rp. 200.000</span>
        <span className="text-slate-500">of 1.000.000</span>
      </h2>
    </div>
  );
};

export default PlanCard;
