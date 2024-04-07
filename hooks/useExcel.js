import * as XLSX from "xlsx";

export default function useExcel() {

  const useExportToExcel = (jsonTable, fileName) => {



    const ws = XLSX.utils.json_to_sheet(jsonTable)
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Reporte");
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };


  return { useExportToExcel};
}
