import SectionUser from "./component/SectionUser";
import TableUser from "./component/TableUser";





const DashboardPage = () => {


  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <SectionUser></SectionUser>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <TableUser></TableUser>
      </div>
    </div>
  );
};

export default DashboardPage;