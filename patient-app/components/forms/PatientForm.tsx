"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { Form} from "@/components/ui/form";
import CustomFormField from "../ui/CustomFormField";
import { useState } from "react";
import SubmitButton from "@/components/SubmitButton";

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  DATE_PICKER = 'datepicker',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  SKELETON = 'skeleton',

}


 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
 const PatientForm = () => {
  const [isLoading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      phone: "",
      

      
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Dumelang & welkom 👋</h1>
          <p className="text-dark-700">Schedule your first appointment</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="jane doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="janedoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="phone number"
          placeholder="+27 123 456 7890"
        />

        <SubmitButton isLoading={isLoading}>Get starated</SubmitButton>
      </form>
    </Form>
  );
}

export default PatientForm 
