import {ReactNode} from "react";

export interface headerLinksType {
    pathLink: string;
    name: string;
    icon: ReactNode;
}

export type indicationType ="pulse" | "bloodPressure" | "oxygen" | "temperature";

export interface alertDataTypeDoc {
    indicationType: indicationType;
    name: string;
    lastName: string;
    id: string;
    indicationPatient: string;
    indicationNormal: string;
    time: string;

}

export interface alertDataTypePac {
    indicationType: indicationType;
    indicationPatient: string;
    indicationNormal: string;
    time: string;

}

export type alertDataType =alertDataTypeDoc[] | alertDataTypePac[];



export interface alertStatsType {

    icon: string,
    name: "pulse" | "temperature" | "bloodPressure" | "oxygen",
    text: string,
    bgColor: string,

}