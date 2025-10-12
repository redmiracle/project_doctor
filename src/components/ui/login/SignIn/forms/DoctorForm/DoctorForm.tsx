import FormFields from "@/components/ui/login/SignIn/forms/FormFields/FormFields";
import {validateForm} from "@/lib/utils/validation";


interface DoctorFormProps {
    regData: any;
    setRegData: any;
}

export default function DoctorForm({ regData, setRegData }: DoctorFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const errors = validateForm(regData);
        if (Object.keys(errors).length > 0) {
            console.log("Ошибки:", errors);
            return;
        }
    };
    return (
        <div onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormFields formData={regData} setFormData={setRegData} />
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                    <input name="jobTitle" type="text" placeholder="Enter your job title" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"/>
                </div>
            </div>
    );
}