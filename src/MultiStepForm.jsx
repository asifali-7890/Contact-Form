import { useState } from 'react';
import { motion } from 'framer-motion';

const ProfessionalMultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        company: '',
        city: '',
        bio: '',
        website: '',
        linkedin: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const steps = [
        { id: 1, title: 'Personal Information' },
        { id: 2, title: 'Professional Details' },
        { id: 3, title: 'Review & Submit' }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleContinue = (e) => {
        e.preventDefault();
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const formVariants = {
        hidden: { x: currentStep === 1 ? -50 : 50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                    {/* Progress Indicators */}
                    <div className="mb-12">
                        <nav aria-label="Progress">
                            <ol className="flex items-center justify-between">
                                {steps.map((step, index) => (
                                    <li key={step.id} className="flex-1">
                                        <div className="flex items-center">
                                            <div
                                                className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full 
                          ${currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}
                          ${index !== steps.length - 1 ? 'relative' : ''}`}
                                            >
                                                {step.id}
                                                {index !== steps.length - 1 && (
                                                    <div className="hidden sm:block absolute top-3/4 left-full w-32 h-1 bg-gray-200 transform -translate-y-1/2"></div>
                                                )}
                                            </div>
                                            <p className="ml-4 text-sm font-medium hidden sm:block">
                                                {step.title}
                                            </p>
                                            {/* <p className="ml-4 text-sm font-medium hidden sm:block">
                                                {step.title}
                                            </p> */}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>

                    {!isSubmitted ? (
                        <form onSubmit={currentStep === 3 ? handleSubmit : handleContinue}>
                            <motion.div
                                key={currentStep}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Step 1 */}
                                {currentStep === 1 && (
                                    <motion.div variants={formVariants} className="space-y-6">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Personal Information</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 2 */}
                                {currentStep === 2 && (
                                    <motion.div variants={formVariants} className="space-y-6">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Details</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Occupation
                                                </label>
                                                <input
                                                    type="text"
                                                    name="occupation"
                                                    value={formData.occupation}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Website
                                                </label>
                                                <input
                                                    type="url"
                                                    name="website"
                                                    value={formData.website}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    LinkedIn Profile
                                                </label>
                                                <input
                                                    type="url"
                                                    name="linkedin"
                                                    value={formData.linkedin}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Professional Bio
                                                </label>
                                                <textarea
                                                    name="bio"
                                                    value={formData.bio}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    rows="4"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 3 */}
                                {currentStep === 3 && (
                                    <motion.div variants={formVariants} className="space-y-6">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Review Your Information</h2>
                                        <div className="bg-gray-50 p-6 rounded-xl">
                                            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                                                <div className="border-b pb-2">
                                                    <dt className="font-medium">Full Name</dt>
                                                    <dd className="mt-1">{formData.firstName} {formData.lastName}</dd>
                                                </div>
                                                <div className="border-b pb-2">
                                                    <dt className="font-medium">Email</dt>
                                                    <dd className="mt-1">{formData.email}</dd>
                                                </div>
                                                <div className="border-b pb-2">
                                                    <dt className="font-medium">Occupation</dt>
                                                    <dd className="mt-1">{formData.occupation}</dd>
                                                </div>
                                                <div className="border-b pb-2">
                                                    <dt className="font-medium">Company</dt>
                                                    <dd className="mt-1">{formData.company || 'N/A'}</dd>
                                                </div>
                                                <div className="border-b pb-2">
                                                    <dt className="font-medium">Location</dt>
                                                    <dd className="mt-1">{formData.city}</dd>
                                                </div>
                                                <div className="border-b pb-2">
                                                    <dt className="font-medium">Website</dt>
                                                    <dd className="mt-1">{formData.website || 'N/A'}</dd>
                                                </div>
                                                <div className="md:col-span-2 border-b pb-2">
                                                    <dt className="font-medium">LinkedIn</dt>
                                                    <dd className="mt -1">{formData.linkedin || 'N/A'}</dd>
                                                </div>
                                                <div className="md:col-span-2 border-b pb-2">
                                                    <dt className="font-medium">Bio</dt>
                                                    <dd className="mt-1">{formData.bio || 'N/A'}</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="mt-8 flex justify-between">
                                    {currentStep > 1 && (
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200"
                                        >
                                            Back
                                        </button>
                                    )}

                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                                    >
                                        {currentStep === 3 ? 'Confirm' : 'Continue'}
                                    </button>
                                </div>
                            </motion.div>
                        </form>
                    ) : (
                        /* Success Message */
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4 text-green-600">Success!</h2>
                            <p className="text-lg mb-4">Your form has been submitted successfully.</p>
                            <button
                                onClick={() => {
                                    setCurrentStep(1);
                                    setIsSubmitted(false);
                                    setFormData({
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                        occupation: '',
                                        company: '',
                                        city: '',
                                        bio: '',
                                        website: '',
                                        linkedin: ''
                                    });
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                Submit New Form
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfessionalMultiStepForm;