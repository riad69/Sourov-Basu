import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import Tables from "./components/shared/Tables";
import Dropdown from "./components/shared/Dropdown";

const App = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      const { data } = await axios.get("https://erp.seopage1.net/api/leads");

      setAllData(data.data);
    };

    fetchApiData();
  }, []);

  console.log(allData.length);

  const specificData =
    allData &&
    allData?.map((lead: any) => ({
      project_name: lead.client_name,
      bid_value: lead.bid_value,
      actual_value: lead.actual_value,
      added_by: lead.added_by,
      country: lead.country,
      deal_status: lead.deal_status,
      status: lead.status,
    }));

  console.log(specificData);

  return (
    <div className="w-screen p-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Button>+ Add Leads</Button>
          <Button>Export</Button>
        </div>
        <div className="">
          <Dropdown />
        </div>
      </div>

      <Tables data={specificData} />
    </div>
  );
};

export default App;
