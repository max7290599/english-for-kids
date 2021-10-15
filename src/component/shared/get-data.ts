import { ContainerCardModel } from '../../models/card-model';

export const getData = async (data: string): Promise<ContainerCardModel[]> => {
  const resNav = await fetch(`./${data}.json`);
  const nav = await resNav.json();
  return nav;
};
