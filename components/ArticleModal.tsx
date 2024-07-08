// import React from "react";
// import Modal from "react-modal";

// Modal.setAppElement("#__next"); // Set the app element for accessibility

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     width: "80%",
//     maxWidth: "600px",
//   },
// };

// const ArticleModal = ({ isOpen, onRequestClose, article }) => {
//   if (!article) return null;

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
//       <div className="p-4">
//         <h2 className="text-3xl font-bold mb-4">{article.judul}</h2>
//         <p className="text-gray-600 mb-4">Penulis: {article.penulis}</p>
//         <div
//           className="text-gray-700 mb-4"
//           dangerouslySetInnerHTML={{ __html: article.konten }}
//         ></div>
//         <button
//           onClick={onRequestClose}
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//         >
//           Tutup
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default ArticleModal;
