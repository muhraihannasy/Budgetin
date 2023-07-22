const TabCard = ({ currentTab, handleChangeTab, name }) => {
  const isActive = "bg-primary text-white";
  const isNotActive = "bg-slate-200 text-slate-500";
  const styles = `px-6 py-2 flex items-center justify-center rounded-full font-medium transition-all ${
    currentTab == name ? isActive : isNotActive
  }`;

  return (
    <button className={styles} onClick={() => handleChangeTab(name)}>
      {name}
    </button>
  );
};

export default TabCard;
