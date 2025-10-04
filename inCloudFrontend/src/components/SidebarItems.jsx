function SidebarItems({ icon, text, onClick }) {
  return (
    <div
      onClick={onClick} 
      className="flex text-gray-700 items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer"
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}
export default SidebarItems;
