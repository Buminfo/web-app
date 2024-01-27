export function groupDataByCategory(data: any) {
  return data?.reduce((groups: any, item: any) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});
}
