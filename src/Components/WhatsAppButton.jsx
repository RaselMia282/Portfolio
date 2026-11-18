import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
  href="https://wa.me/8801568281487" 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
>
  <FaWhatsapp size={32} />
</a>
  );
};

export default WhatsAppButton;