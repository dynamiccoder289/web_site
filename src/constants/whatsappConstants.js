// WhatsApp contact configuration
export const WHATSAPP_NUMBER = '919533680345';

// Service-specific WhatsApp messages
export const WHATSAPP_MESSAGES = {
  AUDIT: 'Hello can you checklist for audit & assurance services',
  TAX: 'Hello can you checklist for Taxation & Regulatory services',
  ADVISORY: 'Hello can you checklist for Business Advisory consultation',
};

// Generate WhatsApp URL helper function
export const getWhatsAppUrl = (messageType) => {
  const message = WHATSAPP_MESSAGES[messageType];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// Pre-built WhatsApp URLs for each service
export const WHATSAPP_URLS = {
  AUDIT: getWhatsAppUrl('AUDIT'),
  TAX: getWhatsAppUrl('TAX'),
  ADVISORY: getWhatsAppUrl('ADVISORY'),
};
