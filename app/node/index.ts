import fs from "fs";
import path from "path";
import filterDuplicateLanguages from "../helpers/filterDuplicatedLanguages";

try {
  const filePath = path.join(
    process.cwd(),
    "app/data",
    "supportedLanguages.json"
  );
  const jsonData = fs.readFileSync(filePath, "utf8");
  const supportedLanguages = JSON.parse(jsonData);
  console.log("supportedLanguages: ", supportedLanguages);
  console.log("filtered: ", filterDuplicateLanguages(supportedLanguages));
} catch (error) {
  throw new Error("Failed to read the file" + (error as Error).message);
}
