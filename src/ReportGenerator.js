import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";

const generatePdf = (items) => {
  const doc = new jsPDF();
  const tableColumn = [
    "Username",
    "Itemname",
    "Criticality",
    "Quantity",
    "Ordered From",
    "Updated at",
  ];
  const tableRows = [];
  items.forEach((item) => {
    const itemData = [
      item.username,
      item.itemname,
      item.criticality,
      item.quantity,
      item.orderedfrom,
      format(new Date(item.updatedAt), "yyyy-MM-dd"),
    ];
    tableRows.push(itemData);
  });

  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  doc.text("All items list", 11,11);
  doc.save(`report_${dateStr}.pdf`);
};
export default generatePdf;
