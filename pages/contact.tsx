import ContactForm from "@/components/ContactForm";
import Meta from "@/components/Meta";

const contact = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 my-10">
      <Meta title="Contact Us" />
      <h1 className="text-4xl font-bold my-3">Contact Us</h1>

      <ContactForm />
    </div>
  );
};
export default contact;
