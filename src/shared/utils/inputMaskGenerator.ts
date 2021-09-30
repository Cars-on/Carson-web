export const formatBrazilianCurrency = (value: string) => {
  const cleanValue = value
    .replace('R$ ', '')
    .replace(',', '')
    .replace('.', '')
    .replace('.', '');

  const transformValue = parseFloat(
    parseFloat(`${parseInt(cleanValue) / 100}`).toFixed(2),
  );

  const currencyFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(transformValue);

  return currencyFormatted;
};
