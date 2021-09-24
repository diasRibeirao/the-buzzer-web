const MercadoPago = require('mercadopago');

const getFullUrl = (req) => {
    const url = req.protocol + '://' + req.get('host');
    console.log(url);
    return url;
}

module.exports = {
    async checkout(req, res) {
        console.log(process.env);
        
        MercadoPago.configure({
            sandbox: process.env.SANDBOX == 'true' ? true : false,
            access_token: process.env.MP_ACCESS_TOKEN
        });

        const { id, email, description, amount } = req.params;

        // Create Purchase Item Object Template
        const purchaseOrder = {
            items: [
                item = {
                    id: id,
                    title: description,
                    description: description,
                    quantity: 1,
                    currency_id: 'BRL',
                    unit_price: parseFloat(amount)
                }
            ],
            payer: {
                email: email
            },
            auto_return: "all",
            external_reference: id,
            back_urls: {
                sucess: getFullUrl(req) + "/payments/sucess",
                pending: getFullUrl(req) + "/payments/pending",
                failure: getFullUrl(req) + "/payments/failure",
            }
        }

        // Generate init_point to Checkout
        try {
            const preference = await MercadoPago.preferences.create(purchaseOrder);
            return res.redirect(`${preference.body.init_point}`);
        } catch (err) {
            return res.send(err.message);
        }
    }
}