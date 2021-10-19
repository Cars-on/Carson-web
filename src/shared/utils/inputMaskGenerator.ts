export const formatBrazilianCurrency = (value: string) => {
  const cleanValue = value
    .replace('R$ ', '')
    .replace('.', '')
    .replace('.', '')
    .replace('.', '');

  if (!cleanValue) return '';

  const transformValue = parseInt(cleanValue);

  const currencyFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(transformValue);

  return currencyFormatted;
};
