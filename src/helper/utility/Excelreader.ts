import * as xlsx from 'xlsx';
export function getReviewTestData(filePath: string, sheetName: string): { title: string; text: string; expectedMessage: string }[] {
//   // your excel parsing logic
//   return reviewDataArray; // which is an array of objects with title, text, expectedMessage
// }
// export function getReviewTestData(filePath: string, sheetName: string) {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(sheet);
}