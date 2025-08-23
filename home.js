
//add_money_features
document.getElementById('add_money_btn')
    .addEventListener('click',
        function (e) {

            e.preventDefault();

            const dummy_pin = 1001;

            const bank = document.getElementById('select_bank').value;
            const acc_number = document.getElementById('ac_number').value;
            const amount = parseInt(document.getElementById('add_amount').value);
            const pin = document.getElementById('add_pin').value;

            const available_money = parseInt(document.getElementById('available_money').innerText);


            if (acc_number.length != 11) {
                alert("Please  enter a valid account number");
                return;
            }
            if (pin != dummy_pin) {
                alert('Please enter a valid pin')
                return;
            }
      


            const new_money = available_money + amount;


            document.getElementById('available_money').innerText = new_money;

            const form = document.getElementById('add_form');
            form.reset();
        })

// cashout features
document.getElementById('cashout_btn')
    .addEventListener('click',
        function (e) {

            e.preventDefault();

            const dummy_pin = 1001;


            const acc_number = document.getElementById('agent_number').value;
            const amount = parseInt(document.getElementById('cashout_amount').value);
            const pin = document.getElementById('cashout_pin').value;

            const available_money = parseInt(document.getElementById('available_money').innerText);


            if (acc_number.length != 11) {
                alert("Please  enter a valid account number");
                return;
            }
            if (pin != dummy_pin) {
                alert('Please enter a valid pin')
                return;
            }
            if(amount>available_money)
            {
                alert('Insufficient Balance');
                return;
            }


            const new_money = available_money - amount;


            document.getElementById('available_money').innerText = new_money;

            const form = document.getElementById('cashout_form');
            form.reset();

        })







// toggling features
document.getElementById('add_money_card')
    .addEventListener('click', function () {
        document.getElementById('cashout_parent').style.display = 'none';
        document.getElementById('add_money_parent').style.display ='block'
    })

document.getElementById('cashout_card')
    .addEventListener('click', function () {
        document.getElementById('add_money_parent').style.display = 'none';
           document.getElementById('cashout_parent').style.display = 'block';
    })















