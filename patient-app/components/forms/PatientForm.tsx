"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { Form} from "@/components/ui/form";
import CustomFormField from "../ui/CustomFormField";
import { useState } from "react";
import SubmitButton from "@/components/SubmitButton";
import { UserFormValidation } from "@/lib/validation";
import { create } from "domain";
import { useRouter } from "next/router";

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  DATE_PICKER = 'datepicker',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  SKELETON = 'skeleton',

}


 
 const PatientForm = () => {
  const rounter = useRouter();
  const [isLoading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone: "",
      

      
    },
  })
 
 async function onSubmit({name, email, phone }: z.infer<typeof UserFormValidation>) {
    setLoading(true);
  try {
   const userData ={ name, email, phone };
    const user = await createUser(userData);
    
    if(user) rounter.push(`/patient/${user.$id}/register`)
  }  catch (error) {
    console.log(error);
  }
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
