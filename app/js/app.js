import intlTelInput from 'intl-tel-input';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const inputPhone = document.querySelector('#phone');
	const submitBtn = form.querySelector('button[type="submit"]');

    /* Initialize international telephone input plugin */
    const iti = intlTelInput(inputPhone, {
        initialCountry: 'ua',
        strictMode: true,
        separateDialCode: true,
        utilsScript: '../utils/utils.js',
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        /* Retrieve full international number from plugin instance */
        const phone = iti.getNumber();
        const email = document.getElementById('email').value;
        const siteUrl = window.location.href;

        const formattedMessage = `<b>Message from site ${siteUrl}:</b>\n<b>Name:</b> <i>${name}</i>\n<b>Phone:</b> <i>${phone}</i>\n<b>Email:</b> <i>${email}</i>`;

        const token = '6772419107:AAGo6vvV1-HFbFaYR2hsFuvOsyo6F3CizEY';
        const chatId = '@LeadFormData';
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

		submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        const data = {
            chat_id: chatId,
            text: formattedMessage,
            parse_mode: 'HTML',
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

				submitBtn.disabled = false;
                submitBtn.textContent = 'Register for free';

                if (data.ok) {
                    console.log(`Successfully sent to Telegram: ${chatId}`);
                    confirm(`Successfully sent to Telegram ${chatId} \nHTML Preview: \n${formattedMessage}`);
                } else {
                    console.log(`${chatId} Error: ${data.error_code} \n${data.description}`);
                    alert(`${chatId} Error: ${data.error_code} \n${data.description}`);
                }
            })
           .catch((error) => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Register for free';
                console.error('Error:', error);
            });
    });
});