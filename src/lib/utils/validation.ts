export type ValidationResult = string | null;
export const validateEmail = (email: string): ValidationResult => {
    if (!email) return "Enter email";
    if (!/\S+@\S+\.\S+/.test(email)) return "Incorrect email";
    return null;
};

export const validatePassword = (password: string): ValidationResult => {
    if (!password) return "Enter password";
    return null;
};

export const validatePhoneNum = (phoneNum: string): ValidationResult => {
    if (!phoneNum) return "Enter phone number";
    if (!/^\+?\d{10,15}$/.test(phoneNum)) return "Incorrect phone number";
    return null;
}

export const validatePatientId = (patientId: string): ValidationResult => {
    if (!patientId) return "Enter patient ID";
    if (/^\d{9}$/.test(patientId) || /^[A-Z0-9]{8,9}$/i.test(patientId)) return null;
    return "Incorrect ID number";
}

export const validateHospital = (hospital: string): ValidationResult => {
    if (!hospital || hospital === "default") return "Select a hospital";
    return null;
};

export function validateForm(formData: any) {
    const errors: { [key: string]: string | null} = {};

    errors.firstName = formData.firstName ? null : "Enter first name";
    errors.lastName = formData.lastName ? null : "Enter last name";
    errors.email = validateEmail(formData.email);
    errors.password = validatePassword(formData.password);
    errors.phoneNum = validatePhoneNum(formData.phoneNum);
    errors.patientId = validatePatientId(formData.patientId);
    errors.hospital = validateHospital(formData.hospital);


    return errors;
}


export const validateRequired = (value: string, fieldName: string): ValidationResult => {
    if (!value || value.trim() === "") return `Enter ${fieldName}`;
    return null;
};
