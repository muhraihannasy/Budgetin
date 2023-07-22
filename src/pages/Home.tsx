// Icon
import { HiOutlineArrowRight } from "react-icons/hi";

// Image
import money from "/assets/online-payment.png";

const Home = () => {
  return (
    <section className="h-[100vh] bg-primary flex items-center justify-center flex-col px-7">
      <div className="text-white">
        <img src={money} alt="" className="w-[20em] ml-10 mb-10" />

        <h2 className="font-semibold text-[2em]">
          Kontrol Keuangan Buat Mimpimu Menjadi Nyata Dengan Budgetin
        </h2>

        <p className="mt-4 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi
          saepe ullam quia architecto modi fugit sapiente tempore iusto nam!
        </p>

        <a
          href="/dashboard"
          className="bg-secondary w-[2.5em] h-[2.5em] flex items-center justify-center text-2xl text-primary rounded-full mt-4 ml-auto cursor-pointer"
        >
          <HiOutlineArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Home;
