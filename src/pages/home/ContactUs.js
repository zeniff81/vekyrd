import React, { useEffect } from "react";
import ContactEmail from "./ContactEmail";
import OtherChannels from "./Channels";
import OurAgents from "./OurAgents";
import {
  saveScrollPosition,
  loadScrollPosition
} from "../../utilities/manageScrollPosition";

function ContactUs() {
  useEffect(() => {
    loadScrollPosition("contactus");
    return () => {
      saveScrollPosition("contactus");
    };
  }, []);

  return (
    <div className='contactus'>
      <h1>Contáctenos</h1>
      <OtherChannels />
      <OurAgents />
      <ContactEmail />
    </div>
  );
}

export default ContactUs;
