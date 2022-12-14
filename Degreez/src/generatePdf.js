import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from "downloadjs";

const generatePDF = async (name) => {
  const existingPdfBytes = await fetch("Certificate.pdf").then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // using documentation font
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Draw a string of text diagonally across the first page
  firstPage.drawText(name, {
    x: 300,
    y: 270,
    size: 58,
    font: helveticaFont,
    color: rgb(0.2, 0.84, 0.67),
  });
  console.log("drawwing");

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // download the modified pdf
  download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");
};

export default generatePDF;
