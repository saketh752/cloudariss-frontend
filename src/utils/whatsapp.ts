/**
 * WhatsApp Course Enquiry Utility
 * Generates pre-filled, URL-encoded WhatsApp messages for Cloudariss courses.
 * WhatsApp Phone: +91 63026 80457
 */

export const CLOUDARISS_WHATSAPP_NUMBER = '916302680457';

export interface WhatsAppMessageOptions {
  courseId?: string;
  courseName?: string;
}

export function getCRPCEnquiryMessage(): string {
  return `Hi Cloudariss Team,\n\nI came across the CRPC – Cloud & Data Career Accelerator program and I’m interested in learning more about the course.\n\nCould you please share the course curriculum, duration, fees, upcoming batch details, and enrollment process?\n\nThank you.`;
}

export function getDAAPEnquiryMessage(): string {
  return `Hi Cloudariss Team,\n\nI came across the DAAP – Data Analyst Accelerator Program and I’m interested in learning more about the program.\n\nCould you please share the course curriculum, duration, fees, upcoming batch details, and enrollment process?\n\nThank you.`;
}

export function getCourseEnquiryMessage(courseName: string): string {
  const normalized = courseName.toLowerCase().trim();
  if (normalized === 'crpc') return getCRPCEnquiryMessage();
  if (normalized === 'daap') return getDAAPEnquiryMessage();
  if (normalized === 'java') {
    return `Hi Cloudariss Team,\n\nI’m interested in the Java course offered by Cloudariss and would like to know more about the program.\n\nCould you please share the course curriculum, duration, fees, upcoming batch details, and enrollment process?\n\nThank you.`;
  }
  if (normalized === 'python') {
    return `Hi Cloudariss Team,\n\nI’m interested in the Python course offered by Cloudariss and would like to know more about the program.\n\nCould you please share the course curriculum, duration, fees, upcoming batch details, and enrollment process?\n\nThank you.`;
  }
  return `Hi Cloudariss Team,\n\nI’m interested in the ${courseName} course offered by Cloudariss and would like to know more about the program.\n\nCould you please share the course curriculum, duration, fees, upcoming batch details, and enrollment process?\n\nThank you.`;
}

export function getGenericEnquiryMessage(): string {
  return `Hi Cloudariss Team,\n\nI’m interested in learning more about Cloudariss programs and would like to know more about the available courses.\n\nCould you please guide me with the program details and enrollment process?\n\nThank you.`;
}

export function getWhatsAppEnquiryUrl(options?: WhatsAppMessageOptions): string {
  const courseId = options?.courseId?.toLowerCase().trim();
  const courseName = options?.courseName?.trim();

  let message = '';
  if (courseId === 'crpc') {
    message = getCRPCEnquiryMessage();
  } else if (courseId === 'daap') {
    message = getDAAPEnquiryMessage();
  } else if (courseId === 'java' || courseName?.toLowerCase() === 'java') {
    message = getCourseEnquiryMessage('Java');
  } else if (courseId === 'python' || courseName?.toLowerCase() === 'python') {
    message = getCourseEnquiryMessage('Python');
  } else if (courseName) {
    message = getCourseEnquiryMessage(courseName);
  } else {
    message = getGenericEnquiryMessage();
  }

  return `https://wa.me/${CLOUDARISS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(urlOrMessage: string): void {
  let finalUrl = urlOrMessage;
  if (!urlOrMessage.startsWith('http')) {
    finalUrl = `https://wa.me/${CLOUDARISS_WHATSAPP_NUMBER}?text=${encodeURIComponent(urlOrMessage)}`;
  }
  window.open(finalUrl, '_blank', 'noopener,noreferrer');
}
