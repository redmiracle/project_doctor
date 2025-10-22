import styles from "./formFields.module.css";
import React from "react";
import {formFildDataType} from "@/components/ui/login/SignIn/SignIn";

interface Props {
    handleChange:(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement|HTMLTextAreaElement>,type:"doctor"|'patient'|'formFields') => void;
    formFildData: Partial<formFildDataType>;

}

export default function FormFields({handleChange,formFildData}: Props) {
    const {firstName,lastName,email,password,phoneNum,hospital}=formFildData;

    return (
        <>
            <div>
                <label className={styles.label}>First Name</label>
                <input name="firstName" onChange={e=>handleChange(e,'formFields')} type="text"
                      value={firstName?firstName:''}  placeholder="Enter your first name" className={styles.input}/>
            </div>

            <div>
                <label className={styles.label}>Last Name</label>
                <input name="lastName" onChange={e=>handleChange(e,'formFields')} type="text"
                     value={lastName?lastName:''}  placeholder="Enter your last name" className={styles.input}/>
            </div>
            <div>
                <label className={styles.label}>Email</label>
                <input name="email"  onChange={e=>handleChange(e,'formFields')} type="text"
                       value={email?email:''} placeholder="your.email@example.com" className={styles.input}/>
            </div>
            <div>
                <label className={styles.label}>Password</label>
                <input name="password" onChange={e=>handleChange(e,'formFields')} type="password"
                     value={password?password:''}  placeholder="Create a secure password" className={styles.input}/>
            </div>

            <div>
                <label className={styles.label}>Phone Number</label>
                <input name="phoneNum"  onChange={e=>handleChange(e,'formFields')} type="tel"
                      value={phoneNum?password:''}  placeholder="Enter your phone number" className={styles.input}/>
            </div>

            <div>
                <label className={styles.label}>Hospital</label>
                <select name="hospital" value={hospital?hospital:''} onChange={e=>handleChange(e,'formFields')} className={styles.input}>
                    <option value="" disabled>Select hospital</option>
                    <option value="1">Central Hospital</option>
                    <option value="2">City Medical Center</option>
                    <option value="3">Community Healthcare</option>
                </select>
            </div>
        </>
    );
}
