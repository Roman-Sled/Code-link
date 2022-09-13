// Функція повертає значення співвідношення кількості долларів до курсу Bitcoin , та округлює це значення до 7 знаків,після коми.

function result(bitcoinPrice,usdQuantity) {
    return (usdQuantity /= bitcoinPrice).toFixed(7);
  }
  
result(21000,1000);