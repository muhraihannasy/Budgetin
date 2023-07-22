import { Link } from "react-router-dom";

// Icon
import { BsBell } from "react-icons/bs";

// Image
import Logo from "/assets/smartphone.png";

// Component
import Header from "../components/Header";
import InformDashboardCard from "../components/InformDashboardCard";
import Divider from "../components/Divider";
import PlanCard from "../components/PlanCard";
import TabGoals from "../components/Tab Goals/TabGoals";
import CardHistory from "../components/CardHistory";
import CardHistoryGroup from "../components/CardHistoryGroup";

const Dashboard = () => {
  return (
    <>
      <Header />

      <div className="bg-primary mb-20 p-4 h-[18em]">
        <div className="flex items-center justify-center flex-col text-white mt-3 pt-[4.5em]">
          <h2 className="text-xl">Your Budget</h2>
          <h2 className="font-semibold text-2xl mt-1 border-b-2 pb-2">
            Rp. 15.000.000
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-8 translate-y-[25px]">
          <InformDashboardCard title="Incomes" price="200.000" />
          <InformDashboardCard title="Spending" price="200.000" />
        </div>
      </div>

      <div className="px-4">
        <Divider title="Goals" />
        <TabGoals />

        <div className="flex gap-4 scrollable pl-1">
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
      </div>

      <div className="px-4">
        <Divider title="History" />

        <div className="flex gap-4 pl-1">
          <div className="w-full bg-white rounded-xl p-3 flex flex-col gap-6 pt-3">
            <CardHistoryGroup date="Today, 31 Mar 2023" />
            <CardHistoryGroup date="Today, 31 Mar 2023" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
