import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from "downloadjs";

const generatePDF = async (data) => {
  const { name, fatherName, branch, year, degree, course, grade } = data;
  const existingPdfBytes = await fetch("degreez-fillForm.pdf").then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // getting the form fields
  const form = pdfDoc.getForm();
  const nameField = form.getTextField("name");
  const fatherNameField = form.getTextField("fatherName");
  const branchField = form.getTextField("branch");
  const yearField = form.getTextField("year");
  const degreeField = form.getTextField("degree");
  const courseField = form.getTextField("course");
  const gradeField = form.getTextField("grade");

  // setting the text
  nameField.setText(name);
  fatherNameField.setText(fatherName);
  branchField.setText(branch);
  yearField.setText(year);
  degreeField.setText(degree);
  courseField.setText(course);
  gradeField.setText(grade);

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // download the modified pdf
  download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");
};

export default generatePDF;
