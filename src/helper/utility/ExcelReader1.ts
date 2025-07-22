// import * as XLSX from 'xlsx';
// import * as fs from 'fs';

// export function getReviewTestData(filePath: string, sheetName: string) {
//   if (!fs.existsSync(filePath)) {
//     throw new Error(`Test data file not found at ${filePath}`);
//   }
//   const workbook = XLSX.readFile(filePath);
//   const sheet = workbook.Sheets[sheetName];
//   return XLSX.utils.sheet_to_json(sheet);
// }
import * as XLSX from 'xlsx';
import * as fs from 'fs';

export interface ReviewData {
  title: string;
  text: string;
  expectedMessage: string;
}

export function getReviewTestData(filePath: string, sheetName: string): ReviewData[] {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Test data file not found at ${filePath}`);
  }

  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) {
    throw new Error(`Sheet ${sheetName} not found in file ${filePath}`);
  }

  return XLSX.utils.sheet_to_json<ReviewData>(sheet);
}
