import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="rajasmarathe01@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+19 91728 72641" Image={FiPhone} />
      <SingleInfo text="Maharastra, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
