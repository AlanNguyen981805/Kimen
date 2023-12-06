import dynamic from "next/dynamic";

// Dynamic imports for components
export const Box1 = dynamic(() => import("./Box1"));
export const Box2 = dynamic(() => import("./Box2"));
export const SwitchLocale = dynamic(() => import("./SwtichLocale"));
export const Section = dynamic(() => import("./Section"));
export const Section2 = dynamic(() => import("./Section2"));
export const Section3 = dynamic(() => import("./Section3"));
export const Process = dynamic(() => import("./Process"));
export const ProcessCircle = dynamic(() => import("./ProcessCircle"));
export const Slider = dynamic(() => import("./Slider"));
export const Timeline = dynamic(() => import("./TimeLine"));
