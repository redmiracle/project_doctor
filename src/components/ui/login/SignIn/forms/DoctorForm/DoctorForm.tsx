

import React from "react";
import {regDataDoctorType} from "@/components/ui/login/SignIn/SignIn";



interface Props {
    handleChange:(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement|HTMLTextAreaElement>,type:"doctor"|'patient'|'formFields') => void;
    doctorData:Partial<regDataDoctorType>;
}


export default function DoctorForm({handleChange,doctorData}: Props) {

    const {jobTitle}=doctorData;
    return (
        <div  className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                    <input
                        value={jobTitle?jobTitle:''}
                        onChange={e=>handleChange(e,'doctor')}
                        name="jobTitle" type="text" placeholder="Enter your job title" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"/>
                </div>
            </div>
    );
}