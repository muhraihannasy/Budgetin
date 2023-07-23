interface TabCardInterface {
  currentTab: string;
  name: string;
  handleChangeTab: (tab: string) => {};
}

const TabCard: React.FC<TabCardInterface> = ({
  currentTab,
  name,
  handleChangeTab,
}) => {
  const isActive = "bg-primary text-white";
  const isNotActive = "bg-slate-200 text-slate-500";
  const styles = `px-5 py-1.5 flex items-center justify-center rounded-full font-medium transition-all text-md ${
    currentTab == name ? isActive : isNotActive
  }`;

  return (
    <button className={styles} onClick={() => handleChangeTab(name)}>
      {name}
    </button>
  );
};

export default TabCard;
