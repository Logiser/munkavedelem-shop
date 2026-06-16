// netlify/functions/send-order-email.js

const nodemailer = require('nodemailer');

// Gmail SMTP konfiguráció (vagy más email provider)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

exports.handler = async (event) => {
  // Csak POST kéréseket fogad el
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const orderData = JSON.parse(event.body);
    const { customer, items, total, timestamp } = orderData;

    // HTML email sablon
    const emailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0F2A1D; color: white; padding: 20px; text-align: center; border-radius: 4px; }
            .section { margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 4px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
            th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #0F2A1D; color: white; }
            .total-row { font-weight: bold; background-color: #fff; }
            .price { color: #C9A961; font-weight: bold; }
            .footer { text-align: center; color: #999; font-size: 0.9rem; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🛡️ Új Rendelés Érkezett</h1>
            </div>

            <div class="section">
              <h2 style="color: #0F2A1D; margin-top: 0;">Ügyfél Adatai</h2>
              <p><strong>Név:</strong> ${customer.name}</p>
              <p><strong>Email:</strong> ${customer.email}</p>
              <p><strong>Telefon:</strong> ${customer.phone}</p>
              <p><strong>Cég:</strong> ${customer.company || 'Nincs megadva'}</p>
              <p><strong>Cím:</strong> ${customer.address}, ${customer.zipCode} ${customer.city}</p>
              ${customer.notes ? `<p><strong>Megjegyzések:</strong> ${customer.notes}</p>` : ''}
            </div>

            <div class="section">
              <h2 style="color: #0F2A1D; margin-top: 0;">Megrendelt Termékek</h2>
              <table>
                <thead>
                  <tr>
                    <th>Termék</th>
                    <th>Méret</th>
                    <th>Mennyiség</th>
                    <th>Egységár</th>
                    <th>Összesen</th>
                  </tr>
                </thead>
                <tbody>
                  ${items.map(item => `
                    <tr>
                      <td>${item.name}</td>
                      <td>${item.size || '-'}</td>
                      <td>${item.quantity}</td>
                      <td class="price">${item.price.toLocaleString('hu-HU')} Ft</td>
                      <td class="price">${(item.price * item.quantity).toLocaleString('hu-HU')} Ft</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="section">
              <h2 style="color: #0F2A1D; margin-top: 0;">Rendelés Összesítője</h2>
              <table>
                <tr>
                  <td><strong>Termékek:</strong></td>
                  <td class="price text-right">${(total - 1990).toLocaleString('hu-HU')} Ft</td>
                </tr>
                <tr>
                  <td><strong>Szállítás:</strong></td>
                  <td class="price">1.990 Ft</td>
                </tr>
                <tr class="total-row">
                  <td style="font-size: 1.2rem;"><strong>VÉGÖSSZESEN:</strong></td>
                  <td style="font-size: 1.2rem;" class="price">${total.toLocaleString('hu-HU')} Ft</td>
                </tr>
              </table>
            </div>

            <div class="section">
              <p><strong>Rendelés időpontja:</strong> ${new Date(timestamp).toLocaleString('hu-HU')}</p>
              <p><strong>Rendelés ID:</strong> #${Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </div>

            <div class="footer">
              <p>Ez egy automatikus email a MunkavédelmiShop rendszerből.</p>
              <p>Kérdésekért írj az iroda@tuz-munkavedelmiszaki.hu email címre.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text verzió
    const emailText = `
MunkavédelmiShop - Új Rendelés

ÜGYFÉL ADATAI:
Név: ${customer.name}
Email: ${customer.email}
Telefon: ${customer.phone}
Cég: ${customer.company || 'Nincs megadva'}
Cím: ${customer.address}, ${customer.zipCode} ${customer.city}
${customer.notes ? `Megjegyzések: ${customer.notes}` : ''}

MEGRENDELT TERMÉKEK:
${items.map(item => `
- ${item.name}
  Méret: ${item.size || '-'}
  Mennyiség: ${item.quantity}
  Egységár: ${item.price.toLocaleString('hu-HU')} Ft
  Összesen: ${(item.price * item.quantity).toLocaleString('hu-HU')} Ft
`).join('')}

RENDELÉS ÖSSZESÍTŐJE:
Termékek: ${(total - 1990).toLocaleString('hu-HU')} Ft
Szállítás: 1.990 Ft
VÉGÖSSZESEN: ${total.toLocaleString('hu-HU')} Ft

Rendelés időpontja: ${new Date(timestamp).toLocaleString('hu-HU')}
    `;

    // Email 1: Az irodának
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'iroda@tuz-munkavedelmiszaki.hu',
      subject: `Új Rendelés #${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      text: emailText,
      html: emailHTML
    });

    // Email 2: Az ügyfélnek (megerősítés)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: customer.email,
      subject: '📦 Rendelési Megerősítés - MunkavédelmiShop',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #0F2A1D; color: white; padding: 20px; text-align: center; border-radius: 4px; }
              .section { margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 4px; }
              .footer { text-align: center; color: #999; font-size: 0.9rem; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✅ Rendelésed Sikeresen Beérkezett!</h1>
              </div>

              <div class="section">
                <h2 style="color: #0F2A1D; margin-top: 0;">Köszönjük a Rendelésedért!</h2>
                <p>A rendelésed sikeresen feldolgozásra került. Az iroda munkatársai hamarosan kapcsolatba lépnek veled a fizetési modalitások és szállítási részletek egyeztetéséhez.</p>
              </div>

              <div class="section">
                <h2 style="color: #0F2A1D; margin-top: 0;">Rendelés Összesítője</h2>
                <p><strong>Végösszesen:</strong> <span style="color: #C9A961; font-weight: bold; font-size: 1.2rem;">${total.toLocaleString('hu-HU')} Ft</span></p>
              </div>

              <div class="section">
                <p><strong>Szállítási Cím:</strong><br>
                ${customer.address}<br>
                ${customer.zipCode} ${customer.city}</p>
              </div>

              <div class="section">
                <h3 style="color: #0F2A1D; margin-top: 0;">Következő Lépések</h3>
                <ol>
                  <li>Az iroda hamarosan kapcsolatba lép veled (${customer.phone} vagy ${customer.email})</li>
                  <li>Egyeztetünk a fizetési módról</li>
                  <li>Feldolgozzuk a rendelésed</li>
                  <li>Szállítás az Ön címére</li>
                </ol>
              </div>

              <div class="footer">
                <p>Kérdésekért írj: iroda@tuz-munkavedelmiszaki.hu</p>
                <p>Telefon: +36 30 272 2571</p>
                <p style="margin-top: 20px;">Köszönjük, hogy bennünk bízol!</p>
              </div>
            </div>
          </body>
        </html>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Rendelés sikeresen elküldve!'
      })
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Email küldési hiba',
        details: error.message
      })
    };
  }
};
