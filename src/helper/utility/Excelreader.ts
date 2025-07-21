import * as XLSX from 'xlsx';
import * as path from 'path';

export class ExcelReader {
  static getExcelData(filePath: string, sheetName: string): string[][] {
    const absolutePath = path.resolve(filePath);
    const workbook = XLSX.readFile(absolutePath);
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
      throw new Error(`Sheet ${sheetName} not found in ${filePath}`);
    }

    const jsonData: string[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];
    return jsonData;
  }
}
