import { DownloadIcon } from "../Icons/Icons";
import * as XLSX from "xlsx/xlsx.mjs";

const DownloadBtn = ({ data = [], fileName }) => {
  return (
    <button
      className="btn bg-l_orange text-black transition-all duration-300 hover:text-d_orange hover:border-d_orange"
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
    >
      Download
    </button>
  );
};

export default DownloadBtn;

