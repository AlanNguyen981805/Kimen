import dynamic from "next/dynamic";

// Dynamic imports for components
export const SwitchLocale = dynamic(() => import("./SwtichLocale"));
export const Section = dynamic(() => import("./Section"));
export const Section2 = dynamic(() => import("./Section2"));
export const Section3 = dynamic(() => import("./Section3"));
export const Process = dynamic(() => import("./Process"));
export const ProcessCircle = dynamic(() => import("./ProcessCircle"));
export const Slider = dynamic(() => import("./Slider"));
export const Timeline = dynamic(() => import("./TimeLine"));
export const Map = dynamic(() => import("./Map"), { ssr: false });
export const RightContact = dynamic(() => import("./RightContact"));
export const Menu = dynamic(() => import("./Menu"));
export const ListMenuItem = dynamic(() => import("./ListMenuItem"));
export const WrapMenu = dynamic(() => import("./WrapMenu"));
export const RenderTitleMenu = dynamic(() => import("./RenderTitleMenu"));
