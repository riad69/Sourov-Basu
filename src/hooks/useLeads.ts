import axios from "axios";
import { useEffect } from "react";

const useLeads = () => {
  useEffect(() => {
    const fetchLeads = async () => {
      const leads = await axios.get("https://erp.seopage1.net/api/leads");
    };

    fetchLeads();
  });

  return;
};
