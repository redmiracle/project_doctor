import {headerLinksType} from "@/type";
import {alarmIcon, chartIcon, listIcon, settingsIcon} from "@/lib/icons/icons";

export const doctorLinks: headerLinksType[] = [
    {
        pathLink: "/doctor",
        name: "Notification",
        icon:alarmIcon("size-8"),
    },
    {
        pathLink: "/doctor/patientList",
        name: "Patient list",
        icon:listIcon("size-8"),
    },
    {
        pathLink: "/doctor/settings",
        name: "Settings",
        icon:settingsIcon("size-8"),
    },


]

export const patientLinks: headerLinksType[] = [
    {
        pathLink: "/patient",
        name: "Notification",
        icon:alarmIcon("size-9"),
    },
    {
        pathLink: "/patient/indicators",
        name: "Indicators",
        icon:chartIcon("size-9"),
    },
    {
        pathLink: "/patient/settings",
        name: "Settings",
        icon:settingsIcon("size-9"),
    },


]