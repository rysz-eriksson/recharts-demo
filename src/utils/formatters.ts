export const formatDate = (value: string) => value.slice(0, -6);

export const formatTooltip = (value: any, name: any) => {
  return [`${value} km`, name];
};
