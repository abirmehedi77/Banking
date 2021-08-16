document.getElementById('deposit-button').addEventListener('click', function(){
    const clicking = document.getElementById('deposit-input');
    const deposit = clicking.value;
    const dipositText = parseFloat(deposit);
    const dislpay = document.getElementById('deposit-total');
    const initialAmmount =  dislpay.innerText;
    const ammount = parseFloat(initialAmmount);

    if( dipositText<0){
        alert('Please input a valid ammount');
        
        return
    }
    else if(isNaN(dipositText)){
        alert('Please input a valid ammount');
        return
        

    }

    dislpay.innerText = dipositText +  ammount; 

    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const balanceAdd = parseFloat(balanceText);
    balance.innerText =dipositText + balanceAdd; 
    clicking.value = '';

})
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawClicking = document.getElementById('withdraw-input');
    const withdraw = withdrawClicking.value;
    const withdrawText = parseFloat(withdraw);
    const dislpayWithdraw = document.getElementById('withdraw-total');
    const currentAmmount =  dislpayWithdraw.innerText;
    const withdrawAmmount = parseFloat(currentAmmount);

    if( withdrawText<0){
        alert('Please input a valid ammount');
        
        return
    }
    else if(isNaN(withdrawText)){
        alert('Please input a valid ammount');
        return
        

    }

    dislpayWithdraw.innerText = withdrawText +  withdrawAmmount; 

    const withdrawBalance = document.getElementById('balance-total');
    const withdrawBalanceText = withdrawBalance.innerText;
    const withdrawBalanceAdd = parseFloat(withdrawBalanceText);
    withdrawBalance.innerText = withdrawBalanceAdd - withdrawText; 
    withdrawClicking.value = '';

})