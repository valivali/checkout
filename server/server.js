const express = require('express');
const cors = require('cors');
const app = express();

var http = require('http').createServer(app);

app.use(cors()).use(express.json());

app.get('/', (req, res) => res.send('hello mundo!'));

app.get('/api/getCheckoutDetails', (req, res) => {
    res.send(data);
});

app.post('/api/refundRequestSubmission/:id', (req, res) => {
    console.log(`-=-=-=-=-=-=-= REFUND SUBMITTED FOR PURCHASE ${req.params.id} -=-=-=-=-=-=-=`);
    console.log(req.body);
    console.log('-=-=-=-=-=-=-= REFUND REPORT END -=-=-=-=-=-=-=');
    res.json({message: 'Submitted successfully!'});
})

http.listen(3003, () => {
    console.log('whisper in my ear, I am listening on port --3003--');
});

const data = {
    refund: {
        id: "123",
        totalAmount: 100,
        currency: "USD",
        createdAt: "2021-12-16"
    },
    refundMethods: [
        {
            name: "GiftCard",
            description: "Use it for anything from Efi the Dog Staing, it never expires.",
            bonus: 10, //In precentage
            isPopular: true
        },
        {
            name: "VirtualCard",
            description: "This virtual Visa debit card is just like cash. Transfer the balance to your bank anytime. Get 10% cash back to the card when you shop at Efi the Dog Staing",
            fee: 5, //In precentage
            isBestValue: true
        },
        {
            name: "StandardRefund",
            description: "Slowest approach. Get your refund back to your original payment method. This can take up to 5-15 business days."
        },
        {
            name: "Donation",
            description: "Dogs shelter SOS"
        }

    ]
}
