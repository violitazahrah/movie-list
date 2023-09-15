// const Footer = () => {
//   return (
//     <div className="text-center flex items-center justify-center bg-indigo-700">
//       <p className="text-xl text-gray-800">
//         &copy; Copyright 2023 <span className="font-bold">MovieSide</span>
//       </p>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer style={{ position: "fixed", padding: "10px", textAlign: "center", width: "100%", bottom: "0" }} className="bg-indigo-700">
      <div>
        <p className="text-xl text-gray-800">
          &copy; Copyright 2023 <span className="font-bold">MovieSide</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
