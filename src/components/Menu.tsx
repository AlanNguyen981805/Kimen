import { NextIntlClientProvider, useMessages } from "next-intl";
import { ListMenuItem, SwitchLocale } from ".";

const Menu = () => {
  const messages = useMessages();

  return (
    <ul className="flex gap-6 items-center">
      <NextIntlClientProvider messages={messages}>
        <ListMenuItem />
      </NextIntlClientProvider>
      <SwitchLocale />
    </ul>
  );
};

export default Menu;
