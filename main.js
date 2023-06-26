let section = document.querySelectorAll('.section');
let stepNumbers = document.querySelectorAll('.step-num');
let validationforms = document.getElementsByClassName('validationforms');
let inputs = document.querySelectorAll('.input');

let gotostep2 = document.getElementById('btnnextsteptwo')
let gotostep3 = document.getElementById('btnnextstepthree')
let gotostep4 = document.getElementById('btnnextstepfour')
let gobackto1 = document.getElementById('btngobackone');
let gobackto2 = document.getElementById('btngobacktwo');


let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');
let section4 = document.getElementById('section4');
let section5 = document.getElementById('section5');

let stepnum1 = document.getElementById('stepnum1');
let stepnum2 = document.getElementById('stepnum2');
let stepnum3 = document.getElementById('stepnum3');
let stepnum4 = document.getElementById('stepnum4');


/*--------------------------------  section2  ---------------------------------- */
let switch2 = document.getElementById('switch');
let mprice1 = document.getElementById('price-month1');
    let mprice2 = document.getElementById('price-month2');
    let mprice3 = document.getElementById('price-month3');
    let yprice1 = document.getElementById('price-year1');
    let yprice2 = document.getElementById('price-year2');
    let yprice3 = document.getElementById('price-year3');
    let offers = document.querySelectorAll('#offer-year');
    let activeprice = document.querySelectorAll('.month-or-year');
    let planecont = document.querySelectorAll('.plan-container')
    let offererror = document.getElementById('offer-error');
    let ponlineser = document.getElementById('ponlineser');
    let plargestor = document.getElementById('plargestor');
    let pprofile = document.getElementById('pprofile');
    let btntoggle = document.getElementById('btntoggle');
    let pertime;

    let Acradeprice
    let advancedprice
    let proprice
    let planename
    let planeprice

    if(btntoggle.checked == false){
        ponlineser.innerHTML = "+$1/mo";
        plargestor.innerHTML = "+$2/mo";
        pprofile.innerHTML = "+$2/mo";
        pertime = "month";
    }
    

    function toggle(){
        if( btntoggle.checked == true){
            mprice1.style.display = 'none';
            mprice2.style.display = 'none';
            mprice3.style.display = 'none';
            yprice1.style.display = 'block';
            yprice2.style.display = 'block';
            yprice3.style.display = 'block';
            offers[0].classList.remove('hidden');
            offers[1].classList.remove('hidden');
            offers[2].classList.remove('hidden');
            activeprice[1].classList.add('active-price');
            activeprice[0].classList.remove('active-price'); 
            ponlineser.innerHTML = "+$10/yr";
            plargestor.innerHTML = "+$20/yr";
            pprofile.innerHTML = "+$20/yr";
            planecont[1].classList.remove('plan-container-active');
            planecont[2].classList.remove('plan-container-active');
            planecont[0].classList.remove('plan-container-active');
            fprice = 0;
            sprice = 0;
            thprice = 0;
            pertime = "year";
            fpriceout.innerHTML = "+0$";
            spriceout.innerHTML = "+0$";
            thpriceout.innerHTML = "+0$";
            addonas1.checked = false;
            addonas2.checked = false;
            addonas3.checked = false;
            planeprice = undefined;
            planename = undefined;
        }else if(btntoggle.checked == false){
            mprice1.style.display = 'block';
            mprice2.style.display = 'block';
            mprice3.style.display = 'block';
            yprice1.style.display = 'none';
            yprice2.style.display = 'none';
            yprice3.style.display = 'none';
            offers[0].classList.add('hidden');
            offers[1].classList.add('hidden');
            offers[2].classList.add('hidden');
            activeprice[1].classList.remove('active-price');
            activeprice[0].classList.add('active-price');
            ponlineser.innerHTML = "+$1/mo";
            plargestor.innerHTML = "+$2/mo";
            pprofile.innerHTML = "+$2/mo";
            planecont[1].classList.remove('plan-container-active');
            planecont[2].classList.remove('plan-container-active');
            planecont[0].classList.remove('plan-container-active');
            fprice = 0;
            sprice = 0;
            thprice = 0;
            pertime = "month";
            fpriceout.innerHTML = "+0$";
            spriceout.innerHTML = "+0$";
            thpriceout.innerHTML = "+0$";
            addonas1.checked = false;
            addonas2.checked = false;
            addonas3.checked = false;
            planeprice = undefined;
            planename = undefined;
        }  
    }



function selectoffer2(){
    if(activeprice[0].classList.contains('active-price')){
        advancedprice = 12;
        planename = "Advanced";
        planeprice = advancedprice;
        planecont[1].classList.add('plan-container-active');
        planecont[2].classList.remove('plan-container-active');
        planecont[0].classList.remove('plan-container-active');
        addonas1.checked = false;
        addonas2.checked = false;
        addonas3.checked = false;
        fprice = 1;
        sprice = 2;
        thprice = 2;
    } else if(activeprice[1].classList.contains('active-price')){
        advancedprice = 120;
        planename = "Advanced";
        planeprice = advancedprice;
        planecont[1].classList.add('plan-container-active');
        planecont[2].classList.remove('plan-container-active');
        planecont[0].classList.remove('plan-container-active');
        addonas1.checked = false;
        addonas2.checked = false;
        addonas3.checked = false;
        fprice = 10;
        sprice = 20;
        thprice = 20;
    }


}
function selectoffer1(){
    if(activeprice[0].classList.contains('active-price')){
        Acradeprice = 9;
        planename = "Acrade";
        planeprice = Acradeprice;
        planecont[0].classList.add('plan-container-active');
        planecont[2].classList.remove('plan-container-active');
        planecont[1].classList.remove('plan-container-active');
        addonas1.checked = false;
        addonas2.checked = false;
        addonas3.checked = false;
        fprice = 1;
        sprice = 2;
        thprice = 2;

    } else if(activeprice[1].classList.contains('active-price')){
        Acradeprice = 90;
        planename = "Acrade";
        planeprice = Acradeprice;
        planecont[0].classList.add('plan-container-active');
        planecont[2].classList.remove('plan-container-active');
        planecont[1].classList.remove('plan-container-active');
        addonas1.checked = false;
        addonas2.checked = false;
        addonas3.checked = false;
        fprice = 10;
        sprice = 20;
        thprice = 20;
    }

}
function selectoffer3(){
    if(activeprice[0].classList.contains('active-price')){
        proprice = 15;
        planename = "Pro";
        planeprice = proprice;
        planecont[2].classList.add('plan-container-active');
        planecont[1].classList.remove('plan-container-active');
        planecont[0].classList.remove('plan-container-active');
        addonas1.checked = false;
        addonas2.checked = false;
        addonas3.checked = false;
        fprice = 1;
        sprice = 2;
        thprice = 2;
    } else if(activeprice[1].classList.contains('active-price')){
        proprice = 150;
        planename = "Pro";
        planeprice = proprice;
        planecont[2].classList.add('plan-container-active');
        planecont[1].classList.remove('plan-container-active');
        planecont[0].classList.remove('plan-container-active');
        addonas1.checked = false;
        addonas2.checked = false;
        addonas3.checked = false;
        fprice = 10;
        sprice = 20;
        thprice = 20;
    }
}


function gotostepthree(){

    if(planename === undefined && planeprice === undefined){
        offererror.classList.remove('hide');
    }else{
        offererror.classList.add('hide');
        wplanename.innerHTML = planename;
        wplaneprice.innerHTML = "+"+planeprice + "$";
        section3.style.display = 'block';
        section2.style.display = 'none';
        stepnum2.classList.remove('active-step');
        stepnum3.classList.add('active-step');
        gotostep4.classList.remove('hide');
        gobackto2.classList.remove('hide');
    }
}

function backsteptwo(){
    section2.style.display = 'block';
    section3.style.display = 'none';
    stepnum2.classList.add('active-step');
    stepnum3.classList.remove('active-step');
    gotostep4.classList.add('hide');
    gobackto2.classList.add('hide');
}



/*--------------------------------  section2  ---------------------------------- */












/*-------------------------------------------  section3  ------------------------------------------ */
    let wplanename = document.getElementById('plane-name');
    let wplaneprice = document.getElementById('plane-price');
    let addonas1 = document.getElementById('addons-checkbox');
    let addonas2 = document.getElementById('addons-checkbox1');
    let addonas3 = document.getElementById('addons-checkbox2');
    let fpriceout = document.getElementById('onlinePrice');
    let spriceout = document.getElementById('storagePrice');
    let thpriceout = document.getElementById('customizablePrice');
    let fprice;
    let sprice;
    let thprice;
    let total;

    let finishingprice = document.getElementById('finishing-total-price');
    let finishtimeout = document.getElementById('finishint-total-date');
    let pertimeout = document.getElementById('per-time');
    let btnfinish = document.getElementById('btnfinish');


    if(addonas1.checked == false){
        fpriceout.innerHTML = "+0$"
    } 

    if(addonas2.checked == false){
        spriceout.innerHTML = "+0$"
    } 

    if(addonas3.checked == false){
        thpriceout.innerHTML = "+0$"
    } 

    function get1(){
        if(addonas1.checked == true){
            fpriceout.innerHTML = "+"+ fprice + "$"
        }else if(addonas1.checked == false){
            fpriceout.innerHTML = "+0$"
        }
    }

    function get2(){
        if(addonas2.checked == true){
            spriceout.innerHTML = "+"+ sprice + "$"
        }else if(addonas2.checked == false){
            spriceout.innerHTML = "+0$"
        }
    }

    function get3(){
        if(addonas3.checked == true){
            thpriceout.innerHTML ="+"+ thprice + "$"
        }else if(addonas3.checked == false){
            thpriceout.innerHTML = "+0$"
        } 
    }

    function gotostepfour(){
        section4.style.display = 'block';
        section3.style.display = 'none';
        stepnum4.classList.add('active-step');
        stepnum3.classList.remove('active-step');
        total = planeprice + fprice + sprice + thprice;
        finishingprice.innerHTML = total;
        pertimeout.innerHTML = " " + pertime;
        btnfinish.classList.remove('hide');
        if(btntoggle.checked == true){
            finishtimeout.innerHTML = "yr";
        }else if(btntoggle.checked == false){
            finishtimeout.innerHTML = "mo";
        }
    }


/*-------------------------------------------  section3  ------------------------------------------ */






/*-------------------------------------------  section4  ------------------------------------------ */
function change(){
    section2.style.display = 'block';
    section4.style.display = 'none';
    stepnum4.classList.remove('active-step');
    stepnum2.classList.add('active-step');
}

function confirm(){
    section5.style.display = 'block';
    section4.style.display = 'none';
    stepnum3.classList.remove('active-step');
}


/*-------------------------------------------  section4  ------------------------------------------ */

/*--------------------------------  section1  ---------------------------------- */

function checkname(){
    let namevalidaton = document.getElementById('namevalidation');
    let nameinput = document.getElementById('nameinput');
    let nameRe = /^[a-zA-Z-\s]+$/;
    let namevalidate = nameRe.test(nameinput.value);

    if(nameinput.value.trim() == ""){
        namevalidaton.style.display = 'block';
        namevalidaton.innerHTML = "this feild is required!";
        nameinput.classList.add('border-error');
    } else if(namevalidate == false){
        namevalidaton.style.display = 'block';
        namevalidaton.innerHTML = "please enter your name!";
        nameinput.classList.add('border-error');
    } else{
        namevalidaton.style.display = 'none';
        nameinput.classList.remove('border-error');
    }
}

function checkMAIL(){
    let mailvalidation = document.getElementById('mailvalidation');
    let mailinput = document.getElementById('mailinput');
    let  mailRe = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    let mailRevalidate = mailRe.test(mailinput.value);
    if(mailinput.value.trim() == ""){
        mailvalidation.style.display = 'block';
        mailvalidation.innerHTML = "this feild is required!";
        mailinput.classList.add('border-error');
    } else if(mailRevalidate == false){
        mailvalidation.style.display = 'block';
        mailvalidation.innerHTML = "please enter your mail!";
        mailinput.classList.add('border-error');
    }else{
        mailvalidation.style.display = 'none';
        mailinput.classList.remove('border-error');
    }

}

function checkNUM(){
    let telvalidation = document.getElementById('telvalidation');
    let telinput = document.getElementById('telinput');
    let phoneRe = /^[0-9\s]+$/;
    let telvalidate = phoneRe.test(telinput.value);

    if(telinput.value.trim() == ""){
        telvalidation.style.display = 'block';
        telvalidation.innerHTML = "this feild is required!";
        telinput.classList.add('border-error');
    } else if(telinput.value.trim().length !== 11){
        telvalidation.style.display = 'block';
        telvalidation.innerHTML = "you must enter 11 number!";
        telinput.classList.add('border-error');
    } else if(telvalidate == false){
        telvalidation.style.display = 'block';
        telvalidation.innerHTML = "please enter your phone number!";
        telinput.classList.add('border-error');
    }else{
        telvalidation.style.display = 'none';
        telinput.classList.remove('border-error');
    }

}

function steptwo(){
    let mailinput = document.getElementById('mailinput');
    let  mailRe = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    let mailRevalidate = mailRe.test(mailinput.value);
    let nameinput = document.getElementById('nameinput');
    let nameRe = /^[a-zA-Z-\s]+$/;
    let namevalidate = nameRe.test(nameinput.value);
    let telinput = document.getElementById('telinput');
    let phoneRe = /^[0-9\s]+$/;
    let telvalidate = phoneRe.test(telinput.value);


    if(
        mailinput.value.trim() == "" || nameinput.value.trim() == "" ||
        telinput.value.trim() == "" || telinput.value.trim().length !== 11 
        || mailRevalidate == false || namevalidate == false || telvalidate == false
        ){
        section2.style.display = 'none';
        section1.style.display = 'block';
        } else{
            section1.style.display = 'none';
            section2.style.display = 'block';
            stepnum2.classList.add('active-step');
            stepnum1.classList.remove('active-step');
            gobackto1.style.display = 'block';
            gotostep3.style.display = 'block';
            gotostep2.style.display = 'none';
            }
    }

function gosteptwo(){
    checkname();
    checkNUM();
    checkMAIL();
    steptwo();
}

function backstepone(){
    section2.style.display = 'none';
    section1.style.display = 'block';
    stepnum1.classList.add('active-step');
    stepnum2.classList.remove('active-step');
    gobackto1.style.display = 'none';
    gotostep3.style.display = 'none';
    gotostep2.style.display = 'block';
}
/*--------------------------------  section1  ---------------------------------- */


