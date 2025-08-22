// login button functionality

document.getElementById('login_btn').addEventListener('click',
    function (event) 
    {  
        event.preventDefault();
        const dummy_mobile_number = 1407322600 ;
        const dummy_pin = 1001;

        const input_number = document.getElementById('number') ;
        const input_pin = document.getElementById('pin') ;

        const number = parseInt(input_number.value) ;
        const pin = parseInt(input_pin.value);

       

        if(number === dummy_mobile_number && pin === dummy_pin)
        {
            window.location.href="./home.html"
        }
        else{
            console.log('Invalid Number or Pin !!') ;
            const paragraph = document.createElement('p');
            paragraph.innerText = 'Invalid Number or Pin' ;
            
            paragraph.style.backgroundColor = 'red' ;
            paragraph.style.margin = '10px';
            paragraph.style.padding = '5px';
            paragraph.style.color = 'white';
            paragraph.style.textAlign = 'center';
            paragraph.style.borderRadius ='15px' ;
            paragraph.style.fontSize ='bold' ;
            


            
            const parent = document.getElementById('form');

            parent.appendChild(paragraph);


            
        }
       

        
        


    }
)