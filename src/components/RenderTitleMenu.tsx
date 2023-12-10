import { useTranslations } from "next-intl";

interface IProps {
  title: string;
}
const RenderTitleMenu = ({ title }: IProps) => {
  const tMenu = useTranslations("Menu");

  return <span>{tMenu(title)}</span>;
};

export default RenderTitleMenu;
