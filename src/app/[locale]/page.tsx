import Box1 from '@/components/Box1';
import Box2 from '@/components/Box2';
import SwtichLocale from '@/components/SwtichLocale';
import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');
  const tCommon = useTranslations('Common');
  return (
    <>
    <h1>{t('title')}</h1>;
        <SwtichLocale titleBtn1={tCommon('vi')} titleBtn2={tCommon('en')}  />

        <Box1 />
        <Box2 />
    </>
  ) 
}