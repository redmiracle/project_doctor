import styles from "./formFields.module.css";

export default function FormFields({formData, setFormData}) {
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    return (
        <>
            <div>
                <label className={styles.label}>First Name</label>
                <input name="firstName" value={formData.firstName || ""} onChange={handleChange} type="text"
                       placeholder="Enter your first name" className={styles.input}/>
            </div>

            <div>
                <label className={styles.label}>Last Name</label>
                <input name="lastName" value={formData.lastName || ""} onChange={handleChange} type="text"
                       placeholder="Enter your last name" className={styles.input}/>
            </div>
            <div>
                <label className={styles.label}>Email</label>
                <input name="email" value={formData.email || ""} onChange={handleChange} type="text"
                       placeholder="your.email@example.com" className={styles.input}/>
            </div>
            <div>
                <label className={styles.label}>Password</label>
                <input name="password" value={formData.password || ""} onChange={handleChange} type="password"
                       placeholder="Create a secure password" className={styles.input}/>
            </div>

            <div>
                <label className={styles.label}>Phone Number</label>
                <input name="phoneNum" value={formData.phoneNum || ""} onChange={handleChange} type="tel"
                       placeholder="Enter your phone number" className={styles.input}/>
            </div>

            <div>
                <label className={styles.label}>Hospital</label>
                <select name="hospital" value={formData.hospital || ""} onChange={handleChange} className={styles.input}>
                    <option value="" disabled>Select hospital</option>
                    <option value="1">Central Hospital</option>
                    <option value="2">City Medical Center</option>
                    <option value="3">Community Healthcare</option>
                </select>
            </div>
        </>
    );
}
