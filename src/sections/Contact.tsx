import {
  useForm,
  UseFormRegister,
  RegisterOptions,
  FieldErrors,
} from "react-hook-form";

import arrow from "../assets/images/arrow.svg";
type Links = {
  title: string;
  href: string;
};

const links: Links[] = [
  { title: "Email", href: "mailto:danishsjjad@gmail.com" },
  { title: "WhatsApp", href: "https://wa.me/923011800058" },
  { title: "Twitter", href: "https://twitter.com/Danishsjjd" },
  { title: "GitHub", href: "https://github.com/danishsjjd/" },
];

const Contact = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-28 sm:px-8" id="Contact">
      <h2 className="mb-14 text-center text-3xl font-bold underline">
        Contact
      </h2>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {links.map(({ href, title }) => (
          <button className="scale-100 transition active:scale-75" key={title}>
            <a
              href={href}
              target={"_blank"}
              rel="noopener noreferrer"
              className="flex rounded-md py-3 pr-6 pl-3 text-xl font-medium text-yellow underline hover:animate-bg hover:decoration-wavy"
            >
              <span>{title}</span>
              <img src={arrow} alt="arrow" />
            </a>
          </button>
        ))}
      </div>
      <h3 className="mt-14 text-center font-Lexend text-xl font-medium underline">
        Or contact me directly
      </h3>
      <ContactForm />
      <Danish data={"str"} />
    </div>
  );
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormData>({});
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <form
      className="my-8 space-y-1 sm:space-y-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 ">
        <Input
          name="name"
          register={register}
          title={"Enter Full Name"}
          type="text"
          validations={{ required: "Please Type Your Name" }}
          errors={errors}
        />
        <Input
          name="email"
          register={register}
          title={"Your Email"}
          type="email"
          validations={{ required: "Enter Your email" }}
          errors={errors}
        />
      </div>
      <label className="block rounded-lg px-4 pt-2 pb-4 !no-underline ring-yellow focus-within:animate-bg focus-within:ring-1">
        <h3 className="pb-2 font-Lexend">Enter Message</h3>
        <textarea
          className={`w-full rounded-md bg-yellow/20 p-4 outline-none `}
          {...register("message", {
            required: "Please explain your message",
            minLength: { message: "enter bro", value: 5 },
          })}
          rows={5}
        ></textarea>
        <p className="mt-1 text-red-300">{errors?.message?.message}</p>
      </label>
      <button
        type="submit"
        className="rounded-full !bg-yellow px-4  py-3 text-black underline hover:decoration-wavy"
      >
        Submit
      </button>
    </form>
  );
}

type InputProps = {
  title: string;
  type: React.HTMLInputTypeAttribute;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  className?: string;
  validations?: RegisterOptions;
  errors: FieldErrors<FormData>;
};

function Input({
  title,
  type,
  className,
  name,
  register,
  validations,
  errors,
}: InputProps) {
  return (
    <label className="rounded-lg px-4 pt-2 pb-4 !no-underline ring-yellow focus-within:animate-bg focus-within:ring-1">
      <h3 className="pb-2 font-Lexend">{title}</h3>
      <input
        type={type}
        className={`w-full rounded-md bg-yellow/20 p-4  outline-none ${
          className ? className : ""
        }`}
        {...register(name, validations)}
      />
      <p className="mt-1 text-red-300">{errors?.[name]?.message}</p>
    </label>
  );
}

interface Data<T> {
  data: T;
}

function Danish<T extends unknown>({ data }: Data<T>) {
  if (typeof data === "string") return <div>{data}</div>;
  return <div>no string found in given dato</div>;
}

export default Contact;
