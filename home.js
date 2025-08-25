function getValueInt(id) {
    const value = parseInt(document.getElementById(id).value);
    return value;
}
function getValue(id) {
    const value = document.getElementById(id).value;
    return value;
}

const transactionData = [];




//add_money_features
document.getElementById('add_money_btn')
    .addEventListener('click',
        function (e) {

            e.preventDefault();

            const dummy_pin = 1001;

            const bank = document.getElementById('select_bank').value;



            // const acc_number = document.getElementById('ac_number').value;
            const acc_number = getValue("ac_number");

            // const amount = parseInt(document.getElementById('add_amount').value);
            const amount = getValueInt("add_amount");


            // const pin = document.getElementById('add_pin').value;
            const pin = getValueInt("add_pin");

            const available_money = parseInt(document.getElementById('available_money').innerText);



            if (bank === "Select Bank") {
                alert("please select a bank ");
                return;
            }
            if (amount <= 0) {
                alert("Please  enter a valid amount");
                return;
            }
            if (acc_number.length != 11) {
                alert("Please  enter a valid account number");
                return;
            }
            if (pin !== dummy_pin) {
                alert('Please enter a valid pin')
                return;
            }



            const new_money = available_money + amount;


            document.getElementById('available_money').innerText = new_money;

            const form = document.getElementById('add_form');
            form.reset();


            const data =
            {
                name: 'Add Money',
                date: new Date().toLocaleTimeString()
            }
            transactionData.push(data);


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
            if (amount <= 0 || amount > available_money) {
                alert('Insufficient Balance');
                return;
            }


            const new_money = available_money - amount;


            document.getElementById('available_money').innerText = new_money;

            const form = document.getElementById('cashout_form');
            form.reset();

            const data =
            {
                name: 'Cash Out',
                date: new Date().toLocaleTimeString()
            }
            transactionData.push(data);
            console.log(data);

        })





// transaction features
document.getElementById('transaction_card')
    .addEventListener('click', function () {
        const transaction_container = document.getElementById('transaction_container');
        transaction_container.innerText = ''

        for (const data of transactionData) {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="flex justify-between items-center bg-white rounded-xl p-3">
                    <div class="flex items-center">

                        <div class="border- p-3 rounded-full bg-[#0808080d]">
                            <img src="assets/wallet1.png" alt="" class="mx-auto">
                        </div>
                        <div class="ml-5">
                            <h1>${data.name}</h1>
                            <p>${data.date}
                            </p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>

                </div>
                <br> 
            
            `
            transaction_container.appendChild(div);

        }

    })



// toggle function
function displayYou(id) {
    const forms = document.getElementsByClassName("common_form");
    for (const form of forms) {
        form.style.display = 'none'
    }

    document.getElementById(id).style.display = 'block'
}

//active color toggle function
function showActive(id) {
    const cardBtns = document.getElementsByClassName('card_btn');
    for (const btn of cardBtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-[#0808081a]")
    }


    document.getElementById(id).classList.remove("border-[#0808081a]")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}






// toggling features
document.getElementById('add_money_card')
    .addEventListener('click', function () {

        displayYou('add_money_parent');
        showActive('add_money_card');
    })

document.getElementById('cashout_card')
    .addEventListener('click', function () {

        displayYou('cashout_parent');
        showActive('cashout_card');

    })

document.getElementById('transfer_card')
    .addEventListener('click', function () {

        displayYou('transfer_money_parent');
        showActive('transfer_card');
    })


document.getElementById('bonus_card')
    .addEventListener('click', function () {

        displayYou('get_bonus_parent');
        showActive('bonus_card');

    })
document.getElementById('paybill_card')
    .addEventListener('click', function () {

        displayYou('paybill_parent');
        showActive('paybill_card');

    })
document.getElementById('transaction_card')
    .addEventListener('click', function () {

        displayYou('transaction_parent');
        showActive('transaction_card');

    })















