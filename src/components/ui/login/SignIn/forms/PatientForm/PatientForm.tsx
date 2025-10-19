

import React from "react";


interface Props {
    handleChange:(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}


export default function PatientForm({ handleChange }:Props) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label  className="block text-sm font-medium text-gray-700 mb-1">Patient ID</label>
                    <input
                        onChange={handleChange}
                        name="patientId" type="text" placeholder="Enter your patient ID"
                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
                    <select name="bloodGroup"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                        <option value="" disabled>Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>
                <div>
                    <label  className="block text-sm font-medium text-gray-700 mb-1">Allergies (Optional)</label>
                    <textarea name="allergies" placeholder="List any allergies you have"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                              ></textarea>
                </div>
        </div>

    );
}