import styles from "./formFields.module.css";
import React from "react";

interface Props {
    handleChange:(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function FormFields({handleChange}: Props) {

    return (
        <>
            <div>
                <label className={styles.label}>First Name</label>
                <input name="firstName"  onChange={handleChange} type="text"
                       placeholder="Enter your first name" className={styles.input}/>
            </div>

            <div>
                <label className={styles.label}>Last Name</label>
                <input name="lastName" onChange={handleChange} type="text"
                       placeholder="Enter your last name" className={styles.input}/>
            </div>
            <div>
                <label className={styles.label}>Email</label>
                <input name="email"  onChange={handleChange} type="text"
                       placeholder="your.email@example.com" className={styles.input}/>
            </div>
            <div>
                <label className={styles.label}>Password</label>
                <input name="password" onChange={handleChange} type="password"
                       placeholder="Create a secure password" className={styles.input}/>
            </div>

            <div>
                <label className={styles.label}>Phone Number</label>
                <input name="phoneNum"  onChange={handleChange} type="tel"
                       placeholder="Enter your phone number" className={styles.input}/>
            </div>

            <div>
                <label className={styles.label}>Hospital</label>
                <select name="hospital" onChange={handleChange} className={styles.input}>
                    <option value="" disabled>Select hospital</option>
                    <option value="1">Central Hospital</option>
                    <option value="2">City Medical Center</option>
                    <option value="3">Community Healthcare</option>
                </select>
            </div>
        </>
    );
}
