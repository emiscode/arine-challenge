function filterDuplicateLanguages(supportedLanguages: any) {
  const result = {};
  const dataSet = new Set();
  const data = Object.entries(supportedLanguages);

  for (const [key, value] of data) {
    if (!dataSet.has(String(value).toLowerCase())) {
      dataSet.add(String(value).toLowerCase());
      Object(result)[key] = value;
    }
  }

  return result;
}

export default filterDuplicateLanguages;
