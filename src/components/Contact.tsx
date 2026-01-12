"use client";

import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { Check, X } from "lucide-react";
import { Meeting } from "./Meeting";



interface ContactFormValues {
    name: string;
    email: string;
    companyName?: string;
    companyWebsite?: string;
    budget: string | null;
    service: string;
    phone: string;
    message: string;
    status: string;
}



const initialValues: ContactFormValues = {
    name: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    budget: "",
    message: "",
    service: "",
    phone: "",
    status: "New Lead",
};

type SubmissionState = "idle" | "submitting" | "success" | "error" | "meeting";


const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
    companyName: Yup.string(),
    companyWebsite: Yup.string(),
    budget: Yup.number()
        .transform((value, originalValue) =>
            originalValue === "" ? undefined : Number(originalValue)
        )
        .typeError("Budget must be a number")
        .positive("Budget must be a positive number")
        .integer("Budget must be an integer")
        .nullable(),
    service: Yup.string().required("Please select a service"),
    message: Yup.string().required("Message is required"),
    phone: Yup.string().required("Phone number is required")
        .matches(/^\+?\d{10,15}$/, "Enter a valid phone number")
});

function Contact() {

    const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

    const handleSubmit = async (
        values: ContactFormValues,
        { resetForm }: { resetForm: () => void }
    ) => {

        setSubmissionState("submitting");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                console.error("Server responded with an error:", res.status);
                setSubmissionState("error");
                return;
            }
            setSubmissionState("success");
            resetForm();
        } catch (err) {
            console.error("Request failed:", err);
            setSubmissionState("error");
        }

    };

    const [igHovered, setIgHovered] = useState(false);
    const [ldHovered, setLdHovered] = useState(false);
    const [fbHovered, setFbHovered] = useState(false);

    return (
        <section className="bg-my-deep-black py-12" id="contact">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                {
                    submissionState === "idle" &&
                    <div className="bg-my-blacker p-6 md:p-10 rounded-xl border-my-black border divide-y divide-my-black">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-6">
                                <div className="rounded-full flex justify-center gap-1 py-2 px-4 bg-my-blacker border border-my-black w-max">
                                    <Image src="/images/contact.svg" alt="" width={20} height={20} className="object-contain" />
                                    <p className="text-my-lime">Contact Us</p>
                                </div>
                                <h2 className="font-bold text-3xl md:text-5xl text-my-white">Get in Touch with Keda Marketing</h2>
                                <p className="text-xl font-semibold max-w-4xl mx-auto">Have a question or need more information about our services? Fill out the form, and our team will get back to you as soon as possible.</p>
                            </div>
                            <div>
                                <Formik<ContactFormValues>
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    <Form className="flex flex-col gap-4 md:max-w-md text-base mb-8 w-full">

                                        <label htmlFor="name" className="sr-only">Name</label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="focus:outline focus:outline-my-ash bg-my-deep-black py-2 px-4 rounded-md placeholder-my-ash"
                                            placeholder="Name"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="p"
                                            className="text-red-500 text-sm"
                                        />

                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="focus:outline focus:outline-my-ash bg-my-deep-black py-2 px-4 rounded-md placeholder-my-ash"
                                            placeholder="Email"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="p"
                                            className="text-red-500 text-sm"
                                        />

                                        <label htmlFor="phone" className="sr-only">Name</label>
                                        <Field
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            className="focus:outline focus:outline-my-ash bg-my-deep-black py-2 px-4 rounded-md placeholder-my-ash"
                                            placeholder="Phone Number"
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="p"
                                            className="text-red-500 text-sm"
                                        />

                                        <label htmlFor="companyName" className="sr-only">Name</label>
                                        <Field
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            className="focus:outline focus:outline-my-ash bg-my-deep-black py-2 px-4 rounded-md placeholder-my-ash"
                                            placeholder="Company Name"
                                        />
                                        <ErrorMessage
                                            name="companyName"
                                            component="p"
                                            className="text-red-500 text-sm"
                                        />

                                        <label htmlFor="companyWebsite" className="sr-only">Name</label>
                                        <Field
                                            type="text"
                                            id="companyWebsite"
                                            name="companyWebsite"
                                            className="focus:outline focus:outline-my-ash bg-my-deep-black py-2 px-4 rounded-md placeholder-my-ash"
                                            placeholder="Company Website"
                                        />
                                        <ErrorMessage
                                            name="companyWebsite"
                                            component="p"
                                            className="text-red-500 text-sm"
                                        />

                                        <label htmlFor="budget" className="sr-only">Name</label>
                                        <Field
                                            type="number"
                                            id="budget"
                                            name="budget"
                                            className="focus:outline focus:outline-my-ash bg-my-deep-black py-2 px-4 rounded-md placeholder-my-ash [appearance:textfield]
         [&::-webkit-inner-spin-button]:hidden 
         [&::-webkit-outer-spin-button]:hidden"
                                            placeholder="What is your budget (naira)?"
                                        />
                                        <ErrorMessage
                                            name="budget"
                                            component="p"
                                            className="text-red-500 text-sm"
                                        />

                                        <label htmlFor="service" className="sr-only">Service</label>
                                        <Field
                                            type="text"
                                            as="select"
                                            id="service"
                                            name="service"
                                            className="focus:outline focus:outline-my-ash bg-my-deep-black py-2 px-4 rounded-md placeholder-my-ash [appearance:textfield]
         [&::-webkit-inner-spin-button]:hidden 
         [&::-webkit-outer-spin-button]:hidden"
                                            placeholder="What Service are you interested in?"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="Video Editing">Video Editing</option>
                                            <option value="Advertising">Advertising</option>
                                            <option value="AI Automation">AI Automation</option>
                                            <option value="Email Marketing">Email Marketing</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Social media Management">Social media Management</option>
                                        </Field>
                                        <ErrorMessage
                                            name="service"
                                            component="p"
                                            className="text-red-500 text-sm"
                                        />
                                        <label htmlFor="message" className="sr-only">Message</label>
                                        <Field
                                            as="textarea"
                                            id="message"
                                            name="message"
                                            className="focus:outline focus:outline-my-ash bg-my-deep-black py-2 px-4 rounded-md placeholder-my-ash resize-none"
                                            placeholder="Tell us about your project..."
                                            rows="5"
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="p"
                                            className="text-red-500 text-sm"
                                        />

                                        <button
                                            className="text-my-deep-black px-5 py-2 bg-my-lime rounded-full font-semibold text-lg w-max transition-colors duration-300 hover:outline hover:outline-my-lime hover:text-my-lime hover:bg-my-blacker cursor-pointer"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-2 md:gap-6 pt-6 mt-6">
                            <div
                                className="p-2 md:p-4 bg-my-blacker rounded-lg border border-my-black flex justify-between items-center gap-4"
                                onMouseEnter={() => setIgHovered(true)}
                                onMouseLeave={() => setIgHovered(false)}
                            >
                                <div className="bg-my-black rounded-lg p-1 md:p-4">
                                    <Image src="/images/instagram.svg" alt="Instagram Icon" width={24} height={24} className="object-contain" />
                                </div>
                                <p>@kedamarketing</p>
                                <div>
                                    <div className="w-6 h-6 overflow-hidden mr-4" >
                                        <div className={`${igHovered ? '-translate-y-1/2 translate-x-0' : "-translate-x-1/2"} transition-transform duration-400 ease-in-out grid grid-cols-2 w-12 h-12`}>
                                            <p></p>
                                            <MoveUpRight size={24} className="text-my-lime" />
                                            <MoveUpRight size={24} className="text-my-lime" />
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="p-2 md:p-4 bg-my-blacker rounded-lg border border-my-black flex justify-between items-center gap-4"
                                onMouseEnter={() => setFbHovered(true)}
                                onMouseLeave={() => setFbHovered(false)}
                            >
                                <div className="bg-my-black rounded-lg p-1 md:p-4">
                                    <Image src="/images/facebook.svg" alt="Instagram Icon" width={24} height={24} className="object-contain" />
                                </div>
                                <p>@kedamarketing</p>
                                <div>
                                    <div className="w-6 h-6 overflow-hidden mr-4" >
                                        <div className={`${fbHovered ? '-translate-y-1/2 translate-x-0' : "-translate-x-1/2"} transition-transform duration-400 ease-in-out grid grid-cols-2 w-12 h-12`}>
                                            <p></p>
                                            <MoveUpRight size={24} className="text-my-lime" />
                                            <MoveUpRight size={24} className="text-my-lime" />
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="p-2 md:p-4 bg-my-blacker rounded-lg border border-my-black flex justify-between items-center gap-4"
                                onMouseEnter={() => setLdHovered(true)}
                                onMouseLeave={() => setLdHovered(false)}
                            >
                                <div className="bg-my-black rounded-lg p-1 md:p-4">
                                    <Image src="/images/linkedin.svg" alt="Instagram Icon" width={24} height={24} className="object-contain" />
                                </div>
                                <p>@kedamarketing</p>
                                <div>
                                    <div className="w-6 h-6 overflow-hidden mr-4" >
                                        <div className={`${ldHovered ? '-translate-y-1/2 translate-x-0' : "-translate-x-1/2"} transition-transform duration-400 ease-in-out grid grid-cols-2 w-12 h-12`}>
                                            <p></p>
                                            <MoveUpRight size={24} className="text-my-lime" />
                                            <MoveUpRight size={24} className="text-my-lime" />
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    submissionState === "submitting" &&
                    <div className="bg-my-blacker px-6 md:px-10 py-36 md:py-48 rounded-xl border-my-black border divide-y divide-my-black">
                        <div className="flex justify-center items-center gap-4 flex-col">
                            <PuffLoader color={"#A3FF12"} size={70} />
                            <p className="text-2xl text-my-white">Submitting</p>
                        </div>
                    </div>
                }
                {
                    submissionState === "success" &&
                    <div className="bg-my-blacker px-6 md:px-10 py-36 md:py-48 rounded-xl border-my-black border divide-y divide-my-black">
                        <div className="flex justify-center items-center gap-4 flex-col">
                            <div className="p-3 bg-my-blacker border border-my-black rounded-full">
                                <Check color={"#A3FF12"} size={65} />
                            </div>
                            <p className="text-2xl text-my-white max-w-3xl text-center">We have recieved your form. Book a meeting to get started with your transformation</p>
                            <button
                                onClick={() => setSubmissionState("meeting")}
                                className="text-my-deep-black px-6 py-3 mt-6 bg-my-lime rounded-full font-semibold text-lg w-max transition-colors duration-300 hover:outline hover:outline-my-lime hover:text-my-lime hover:bg-my-blacker cursor-pointer"
                            >
                                Book a Meeting
                            </button>
                        </div>
                    </div>
                }

                {
                    submissionState === "error" &&
                    <div className="bg-my-blacker px-6 md:px-10 py-36 md:py-48 rounded-xl border-my-black border divide-y divide-my-black">
                        <div className="flex justify-center items-center gap-4 flex-col">
                            <div className="p-3 bg-my-blacker border border-my-black rounded-full">
                                <X color="#cc3b47" size={65} />
                            </div>
                            <p className="text-2xl text-my-white max-w-3xl text-center">An error occured during submission. Try again in a while.</p>
                            <button
                                onClick={() => setSubmissionState("idle")}
                                className="text-my-deep-black px-6 py-3 mt-6 bg-my-lime rounded-full font-semibold text-lg w-max transition-colors duration-300 hover:outline hover:outline-my-lime hover:text-my-lime hover:bg-my-blacker cursor-pointer"
                            >
                                Back to Form
                            </button>
                        </div>
                    </div>
                }
                {
                    submissionState === "meeting" &&
                    <div className="">
                        <Meeting />
                    </div>
                }
            </div>
        </section>
    )
}

export default Contact