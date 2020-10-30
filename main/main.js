module.exports = function main(inputInfo) { 
    let coca = {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Quantity: 0,
        Price: 3,
        Subtotal:0
        }
    let sprite = {
        Barcode: 'ITEM000001',
        Name: 'Sprite',
        Quantity: 0,
        Price: 3,
        Subtotal:0
        }
    let battery = {
        Barcode: 'ITEM000004',
        Name: 'Battery',
        Quantity: 0,
        Price: 2,
        Subtotal:0
        }
    for (let i = 0; i < inputInfo.length; i++)
    {
        if (inputInfo[i].Name == 'Coca-Cola')
        {
            coca.Quantity += 1;
        }
        else if (inputInfo[i].Name == 'Sprite')
        {
            sprite.Quantity += 1;
        }
        else if (inputInfo[i].Name == 'Battery')
        {
            battery.Quantity += 1;
        }
        else
        {
            return "wrong input";
        }
    }
    coca.Subtotal = coca.Price * coca.Quantity;
    sprite.Subtotal = sprite.Price * sprite.Quantity;
    battery.Subtotal = battery.Price * battery.Quantity;
    let total = coca.Subtotal + sprite.Subtotal + battery.Subtotal;

    if (coca.Quantity == 0 && sprite.Quantity !== 0 && battery.Quantity !== 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Sprite, Quantity: ' + sprite.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + sprite.Subtotal +'.00 (yuan)\n' +
        'Name: Battery, Quantity: ' + battery.Quantity + ', Unit price: 2.00 (yuan), Subtotal: ' + battery.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        return output;
    }
    else if (coca.Quantity !== 0 && sprite.Quantity == 0 && battery.Quantity !== 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Coca-Cola, Quantity: ' + coca.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + coca.Subtotal +'.00 (yuan)\n' +
        'Name: Battery, Quantity: ' + battery.Quantity + ', Unit price: 2.00 (yuan), Subtotal: ' + battery.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        return output;
    }
    else if (coca.Quantity !== 0 && sprite.Quantity !== 0 && battery.Quantity == 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Coca-Cola, Quantity: ' + coca.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + coca.Subtotal +'.00 (yuan)\n' +
        'Name: Sprite, Quantity: ' + sprite.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + sprite.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        return output;  
    }
    else if (coca.Quantity !== 0 && sprite.Quantity == 0 && battery.Quantity == 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Coca-Cola, Quantity: ' + coca.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + coca.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        return output;
    }
    else if (coca.Quantity == 0 && sprite.Quantity !== 0 && battery.Quantity == 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Sprite, Quantity: ' + sprite.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + sprite.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        return output;
    }
    else if (coca.Quantity == 0 && sprite.Quantity == 0 && battery.Quantity !== 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Battery, Quantity: ' + battery.Quantity + ', Unit price: 2.00 (yuan), Subtotal: ' + battery.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        return output;
    }
    else
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Coca-Cola, Quantity: ' + coca.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + coca.Subtotal +'.00 (yuan)\n' +
        'Name: Sprite, Quantity: ' + sprite.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + sprite.Subtotal +'.00 (yuan)\n' +
        'Name: Battery, Quantity: ' + battery.Quantity + ', Unit price: 2.00 (yuan), Subtotal: ' + battery.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        return output;
    }
}
