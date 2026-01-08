"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PuffLoader } from "react-spinners";
import { Check, X } from "lucide-react";

interface FormValues {
  name: string;
  email: string;
}

interface Props {
  eventId: string;
}

const initialValues: FormValues = { name: "", email: "" };

const validationSchema = Yup.object({
  name: Yup.string().required("Enter your name"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
});

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function EventRegistrationForm({ eventId }: Props) {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    setSubmissionState("submitting");
    try {
      const res = await fetch(`/api/events/${eventId}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmissionState("success");
      resetForm();
    } catch {
      setSubmissionState("error");
    }
  };

  if (submissionState === "submitting") {
    return (
      <div className="flex flex-col items-center gap-4 py-12">
        <PuffLoader color="#A3FF12" size={50} />
        <p className="text-my-white text-xl">Submitting...</p>
      </div>
    );
  }

  if (submissionState === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12">
        <Check color="#A3FF12" size={50} />
        <p className="text-my-white text-xl text-center">Registration successful!</p>
      </div>
    );
  }

  if (submissionState === "error") {
    return (
      <div className="flex flex-col items-center gap-4 py-12">
        <X color="#cc3b47" size={50} />
        <p className="text-my-white text-xl text-center">Something went wrong. Try again.</p>
      </div>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-4">
        <Field
          name="name"
          placeholder="Name"
          className="bg-my-deep-black text-white px-4 py-2 rounded focus:outline focus:outline-my-lime"
        />
        <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />

        <Field
          name="email"
          type="email"
          placeholder="Email"
          className="bg-my-deep-black text-white px-4 py-2 rounded focus:outline focus:outline-my-lime"
        />
        <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />

        <button
          type="submit"
          className="bg-my-ash text-my-deep-black px-6 py-2 rounded-lg hover:cursor-pointer font-semibold hover:outline hover:outline-my-lime hover:text-my-lime hover:bg-my-blacker transition-colors"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
}
