// src/utils/api.js
import emailjs from 'emailjs-com';

export const sendEmail = async (templateParams) => {
  try {
    const serviceID = 'service_5erovf9';
    const templateID = 'template_l1x1jaw';
    const userID = 'Portfolio';
    
    const response = await emailjs.send(serviceID, templateID, templateParams, userID);
    return response.status;
  } catch (error) {
    throw error;
  }
};
