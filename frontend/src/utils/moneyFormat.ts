export const moneyFormat = (value: number) => {
    const formattedNumber = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return formattedNumber.replace('BRL', 'R$').replace(/\s/g, '');
}