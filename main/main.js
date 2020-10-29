module.export = function main() { 
    function printReceipt(inputInfo){
        let coca = {
        Barcode: 'ITEM000000',
        Name: 'Coca-cola',
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
    for (i in inputInfo)
    {
        if (i.Name == 'Coca-Cola')
        {
            this.coca.Quantity += 1;
        }
        else if (i.Name == 'Sprite')
        {
            this.sprite.Quantity += 1;
        }
        else (i.Name == 'Battery')
        {
            this.battery.Quantity += 1;
        }
    }
    this.coca.Subtotal = this.coca.Price * this.coca.Quantity;
    this.sprite.Subtotal = this.sprite.Price * this.sprite.Quantity;
    this.battery.Subtotal = this.battery.Price * this.battery.Quantity;
    let total = this.coca.Subtotal + this.sprite.Subtotal + this.battery.Subtotal;

    if (this.coca.Quantity == 0 && this.sprite.Quantity !== 0 && this.battery.Quantity !== 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Sprite, Quantity: ' + this.sprite.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + this.sprite.Subtotal +'.00 (yuan)\n' +
        'Name: Battery, Quantity: ' + this.battery.Quantity + ', Unit price: 2.00 (yuan), Subtotal: ' + this.battery.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        console.log(output);
        return output;
    }
    else if (this.coca.Quantity !== 0 && this.sprite.Quantity == 0 && this.battery.Quantity !== 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Coca-Cola, Quantity: ' + this.coca.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + this.coca.Subtotal +'.00 (yuan)\n' +
        'Name: Battery, Quantity: ' + this.battery.Quantity + ', Unit price: 2.00 (yuan), Subtotal: ' + this.battery.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        console.log(output); 
        return output;
    }
    else if (this.coca.Quantity !== 0 && this.sprite.Quantity !== 0 && this.battery.Quantity == 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Coca-Cola, Quantity: ' + this.coca.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + this.coca.Subtotal +'.00 (yuan)\n' +
        'Name: Sprite, Quantity: ' + this.sprite.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + this.sprite.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        console.log(output);
        return output;  
    }
    else if (this.coca.Quantity !== 0 && this.sprite.Quantity == 0 && this.battery.Quantity == 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Coca-Cola, Quantity: ' + this.coca.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + this.coca.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        console.log(output);
        return output;
    }
    else if (this.coca.Quantity == 0 && this.sprite.Quantity !== 0 && this.battery.Quantity == 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Sprite, Quantity: ' + this.sprite.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + this.sprite.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        console.log(output);
        return output;
    }
    else if (this.coca.Quantity == 0 && this.sprite.Quantity == 0 && this.battery.Quantity !== 0)
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Battery, Quantity: ' + this.battery.Quantity + ', Unit price: 2.00 (yuan), Subtotal: ' + this.battery.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        console.log(output);
        return output;
    }
    else
    {
        let output = '***<store earning no money>Receipt ***\n' +
        'Name: Coca-Cola, Quantity: ' + this.coca.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + this.coca.Subtotal +'.00 (yuan)\n' +
        'Name: Sprite, Quantity: ' + this.sprite.Quantity + ' bottles, Unit price: 3.00 (yuan), Subtotal: ' + this.sprite.Subtotal +'.00 (yuan)\n' +
        'Name: Battery, Quantity: ' + this.battery.Quantity + ', Unit price: 2.00 (yuan), Subtotal: ' + this.battery.Subtotal +'.00 (yuan)\n' +
        '----------------------\n' +
        'Total: ' + total + '.00 (yuan)\n' +
        '**********************\n';
        console.log(output);
        return output;
    }
    }
};