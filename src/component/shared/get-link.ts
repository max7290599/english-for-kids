export const getLink = (link: string): string => {
  const newLink = `#${link[0].toLowerCase()}${link.slice(1)}`;
  return newLink.replace(/\s+/g, '');
};
