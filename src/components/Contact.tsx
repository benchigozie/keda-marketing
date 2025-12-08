"use client";

import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";

interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

function Contact() {

    const initialValues: ContactFormValues = {
        name: "",
        email: "",
        message: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Enter your name"),
        email: Yup.string()
            .email("Enter a valid email address")
            .required("Email is required"),
        message: Yup.string().required("Message is required"),
    });

    const handleSubmit = (values: ContactFormValues, { resetForm }: { resetForm: () => void }) => {
        console.log("Form data", values);
        resetForm();
    };

    const [igHovered, setIgHovered] = useState(false);
    const [ldHovered, setLdHovered] = useState(false);
    const [fbHovered, setFbHovered] = useState(false);

    return (
        <section className="bg-my-deep-black py-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
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
                                <Form className="flex flex-col gap-4 max-w-md text-base mb-8">

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

                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <Field
                                        as="textarea"
                                        id="message"
                                        name="message"
                                        className="focus:outline focus:outline-my-ash bg-my-deep-black py-2 px-4 rounded-md placeholder-my-ash resize-none"
                                        placeholder="Message"
                                        rows="5"
                                    />
                                    <ErrorMessage
                                        name="message"
                                        component="p"
                                        className="text-red-500 text-sm"
                                    />

                                    <button
                                        className="text-my-deep-black px-5 py-2 bg-my-lime rounded-full font-semibold text-lg w-max"
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
                                        <MoveUpRight size={24} className="text-my-lime"/>
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
                                        <MoveUpRight size={24} className="text-my-lime"/>
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
                                        <MoveUpRight size={24} className="text-my-lime"/>
                                        <MoveUpRight size={24} className="text-my-lime" />
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact