"use client";

const ContactForm = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      nama: event.target.nama.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };
    console.log(data);

    // untuk reset kolom setelah submit
    event.target.nama.value = "";
    event.target.email.value = "";
    event.target.message.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col">
        <label className="font-bold text-gray-800" htmlFor="nama">
          Nama:
        </label>
        <input type="text" autoComplete="off" id="nama" className="mx-3 my-2 p-4 bg-gray-50 border border-gray-100" required minLength={3} maxLength={150} />
      </div>
      <div className="w-full flex flex-col">
        <label className="font-bold text-gray-800" htmlFor="email">
          Email:
        </label>
        <input type="email" autoComplete="off" id="email" className="mx-3 my-2 p-4 bg-gray-50 border border-gray-100" required minLength={5} maxLength={150} />
      </div>
      <div className="w-full flex flex-col">
        <label className="font-bold text-gray-800" htmlFor="message">
          Pesan
        </label>
        <textarea rows={4} placeholder="Kami akan membantu kendala kamu dalam mengakses website ini...." className="w-full mx-3 my-2 px-2 p-4 bg-gray-50 border border-gray-100" name="message" required minLength={10} maxLength={500} />
      </div>
      <button type="submit" className="px-4 py-2 w-40 bg-gray-700 text-white font-medium rounded">
        Kirim
      </button>
    </form>
  );
};

export default ContactForm;
