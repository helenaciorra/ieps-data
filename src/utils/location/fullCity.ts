import { UfStateEnum } from 'src/enums';
interface Props {
  city: string;
  uf: string | number;
}

export const fullCity = ({ city, uf }: Props) => {
  const stateUf = UfStateEnum.find((item) => item.id === uf);
  return `${city} - ${stateUf?.uf}`;
};

export default fullCity;
