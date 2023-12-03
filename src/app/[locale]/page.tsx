import { Box1, Box2, SwitchLocale } from '@/components';
import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');
  const tCommon = useTranslations('Common');
  return (
    <>
    <h1>{t('title')}</h1>;
        <SwitchLocale titleBtn1={tCommon('vi')} titleBtn2={tCommon('en')}  />

        <Box1 />
        <Box2 />
    </>
  ) 
}