import {
  useForm,
  UseFormRegister,
  RegisterOptions,
  Path,
  DeepMap,
  FieldError,
} from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import emailjs from "@emailjs/browser"
import { DetailedHTMLProps, InputHTMLAttributes, useRef, useState } from "react"
import { toast } from "react-hot-toast"

import arrow from "../assets/images/arrow.svg"
type Links = {
  title: string
  href: string
}

const links: Links[] = [
  { title: "Email", href: "mailto:danishsjjad@gmail.com" },
  { title: "WhatsApp", href: "https://wa.me/923011800058" },
  { title: "GitHub", href: "https://github.com/danishsjjd/" },
]

const Contact = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 py-28 sm:px-8" id="Contact">
      <h2 className="mb-14 text-center text-3xl font-bold underline">
        Contact
      </h2>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {links.map(({ href, title }) => (
          <button
            className="group scale-100 transition active:scale-75"
            key={title}
          >
            <a
              href={href}
              target={"_blank"}
              rel="noopener noreferrer"
              className="flex rounded-md py-3 pr-6 pl-3 text-xl font-medium text-yellow underline hover:animate-bg hover:decoration-wavy"
            >
              <span>{title}</span>
              <img
                src={arrow}
                alt="arrow"
                className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </button>
        ))}
      </div>
      <h3 className="mt-14 text-center font-Lexend text-xl font-medium underline">
        Or contact me directly
      </h3>
      <ContactForm />
    </section>
  )
}

type FormData = {
  name: string
  email: string
  message: string
}

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>({})

  const onSubmit = (data: FormData) => {
    if (isLoading) return

    setIsLoading(true)
    toast
      .promise(
        emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE,
          data,
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        ),
        {
          loading: "Sending...",
          success: <b>Email Sent. Thanks!</b>,
          error: <b>problem while sending an email</b>,
        }
      )
      .then(() => {
        reset()
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <form
      className="my-8 space-y-1 sm:space-y-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 ">
        <Input<FormData>
          name="name"
          register={register}
          title={"Enter Full Name"}
          type="text"
          validations={{ required: "Please Type Your Name" }}
          errors={errors}
        />
        <Input<FormData>
          name="email"
          register={register}
          title={"Your Email"}
          type="email"
          validations={{
            required: "Enter Your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          }}
          errors={errors}
        />
      </div>
      <label className="block rounded-lg px-4 pt-2 pb-4 !no-underline ring-yellow focus-within:animate-bg focus-within:ring-1">
        <h3 className="pb-2 font-Lexend">Enter Message</h3>
        <textarea
          className={`w-full rounded-md bg-yellow/20 p-4 outline-none `}
          {...register("message", {
            required: "Please explain your message",
            minLength: { message: "Explain Your Message", value: 8 },
          })}
          rows={5}
        ></textarea>
        <p className="mt-1 text-red-300">{errors?.message?.message}</p>
      </label>
      <button
        type="submit"
        className="rounded-full !bg-yellow px-4  py-3 text-black underline hover:decoration-wavy"
        disabled={isLoading}
      >
        Submit
      </button>
    </form>
  )
}

type InputProps<T extends {}> = {
  title: string
  type: React.HTMLInputTypeAttribute
  errors: Partial<DeepMap<T, FieldError>>
  name: Path<T>
  register: UseFormRegister<T>
  className?: string
  validations?: RegisterOptions
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "name"
>

const Input = <T extends {}>({
  title,
  type,
  className,
  name,
  register,
  validations,
  errors,
  ...props
}: InputProps<T>) => {
  return (
    <label className="rounded-lg px-4 pt-2 pb-4 !no-underline ring-yellow focus-within:animate-bg focus-within:ring-1">
      <h3 className="pb-2 font-Lexend">{title}</h3>
      <input
        type={type}
        className={`w-full rounded-md bg-yellow/20 p-4  outline-none ${
          className ? className : ""
        }`}
        {...register(name, validations)}
        {...props}
      />
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => {
          return <p className="mt-1 text-red-300">{message}</p>
        }}
      />
    </label>
  )
}

export default Contact
