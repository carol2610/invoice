var easyinvoice=require('easyinvoice');
var fs = require("fs");
var data = {

    "currency": "KES",
    "taxNotation": "vat",
    "marginTop": "25",
    "marginRight": "25",
    "marginLeft": "25",
    "marginBottom": "25",
    // "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
    "background":"https://public.easyinvoice.cloud/img/watermark-draft.jpg",
    "sender": {
        "company": "Padini General Supplies",
        "address": "Nairobi",
        "zip": "00100",
        "city": "Nairobi",
        "country": "Kenya",
    },
    "client": {
        "company": "Prime interiors",
        "address": "nairobi 00100",
        "zip": "00100",
        "city": "Nairobi",
        "country": "Kenya",
    },
    "invoiceNumber": "2021.0001",
    "invoiceDate": "1.1.2021",
    "products": [
        {
            "quantity": "2",
            "description": "Test1",        "tax": 6,
            "price": 33.87
        },
        {
            "quantity": "4",
            "description": "Test2",
            "tax": 21,
            "price": 10.45,
        }
    ],

    "bottomNotice": "Kindly pay your invoice within 15 days.",
    
    
};

easyinvoice.createInvoice(data, async function (result){
        console.log(result.pdf);
        await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');


});