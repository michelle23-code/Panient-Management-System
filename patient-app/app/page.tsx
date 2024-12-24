import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: Verification | PasskeyModal */}
      
      <section className="remove-scrollbar container my-auto">
        <div className="sub-contanier max-w-[496px]">
          <img src="/assets/icons/logo-full.svg"
          height={1000}
          width={1000}
          alt="patient-app-logo"
          className="mb-12 h-20 w-fit"
          />
          <PatientForm />
          <div className="text-14-reqular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 Patient App  All rights reserved 
            </p>
            <Link href="/?admin=true" className="text-green-500">
            Admin 
            </Link>
          </div>
        </div>
        </section>
      <Image 
      src="/assets/images/onboarding-img.png"
      height={1000}
      width={1000}
      alt='patient'
      className="side-img max-w-[50%]"
      />
      

    </div>
  );
}
