export const getWhatsAppUrl = (language) => {
  const number = "5521985160860";
  let text = "Olá! Vi o site da Prime Art Tech e gostaria de solicitar um orçamento especializado.";
  
  if (language && language.startsWith('en')) {
    text = "Hello! I saw the Prime Art Tech website and would like to request a specialized quote.";
  } else if (language === 'pt-PT') {
    text = "Olá! Vi o site da Prime Art Tech e gostaria de solicitar um orçamento especializado.";
  }
  
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(text)}`;
};
