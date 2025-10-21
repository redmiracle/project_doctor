'use client'
import React from "react";
import {useState} from "react";
import PatientForm from "@/components/ui/login/SignIn/forms/PatientForm/PatientForm";
import DoctorForm from "@/components/ui/login/SignIn/forms/DoctorForm/DoctorForm";

import FormFields from "@/components/ui/login/SignIn/forms/FormFields/FormFields";
import axios from "axios";


interface regDataPatient {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNum: string;
    hospital: string;
    bloodGroup: string;
    allergic: string;
    patientID: string;
}

interface regDataDoctor {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNum: string;
    hospital: string;
    jobTitle: string;

}


export default function SignIn() {
    const [patientData, setPatientData] = useState<Partial<regDataPatient>>({});
    const [doctorData, setDoctorData] = useState<Partial<regDataDoctor>>({});
    const [formFildData, setFormFildData] = useState<Partial<regDataPatient>>({});
    const [isDoctor, setIsDoctor] = useState<boolean>(false);
    const [errors, setErrors] = useState<Partial<regDataPatient | regDataDoctor>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,type:string) => {
        const {name, value} = e.target;

        switch (type) {
            case 'doctor':
                setDoctorData((prev) => ({...prev, [name]: value}))
            case 'patient':
                setPatientData((prev) => ({...prev, [name]: value}))
            case 'formFields':
                setFormFildData((prev) => ({...prev, [name]: value}));
        }

        // if (!isDoctor) {
        //     setPatientData((prev) => ({...prev, [name]: value}));
        // } else {
        //     setDoctorData((prev) => ({...prev, [name]: value}));
        // }
    };

    const  handleClick =async () => {

        const currentData=isDoctor ? {...formFildData,...doctorData} : {...formFildData,...patientData};
        console.log(currentData);
        try{
            const res = axios.post("http://localhost:8080/account/register/patient", currentData);
            console.log(res);
        }
        catch (error){
            console.log(error);
        }
        // const validationErrors = validateForm(currentData);
        // setErrors(validationErrors as Partial<regDataPatient> | Partial<regDataDoctor>);
        //
        // const hasError = Object.values(validationErrors).some((err) => err !== null);
        // if (!hasError) {
        //     console.log("The form is valid, data to send:", currentData);
        // } else {
        //     console.log("Validation errors:", validationErrors);
        // }
    };

    return (
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden mx-auto mt-10">
            <div className="bg-blue-600 text-white p-6 text-center">
                <h1 className="text-2xl font-bold">Create Your Account</h1>
                <p className="mt-2 opacity-90">Join our healthcare platform</p>
            </div>
            <div className="flex justify-center -mt-6">
                <div className="bg-white rounded-full p-1 shadow-md flex items-center">
                    <button className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                        !isDoctor ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setIsDoctor(false)}>Patient
                    </button>
                    <button className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                        isDoctor ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                            onClick={() => setIsDoctor(true)}>Doctor
                    </button>
                </div>
            </div>
            <div className="relative w-full mx-auto min-h-[500px] mt-6 px-5">
                <FormFields handleChange={handleChange}/>
                {isDoctor ?
                    <DoctorForm handleChange={handleChange}/>

                    :

                   <PatientForm handleChange={handleChange}/>


                }


            </div>
            <div>
                <button type="submit" onClick={handleClick}
                        className="w-60 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-md flex items-center justify-center mx-auto">Register
                </button>
            </div>
            <p className="my-4 text-center text-sm text-gray-600">Already have an account?
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium"> Sign in</a>
            </p>
        </div>
    );
}