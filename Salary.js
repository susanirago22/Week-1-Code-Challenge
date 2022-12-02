//Deductions
let personalrelief=2400;
let lowerclass=1000-24000;
let middleclass=24001-32333;
let nssf=400;


function netSalary(grosssalary,deduction,salary )

     // Function to calculate PAYE 

    var grossSalary = salary;
    let netsalary = grossSalary - deductions
    
    if (salary <= 24000)
    {
        let tax =  (24000/100 *10) - 2400;
        return tax;
        let  netsalary =  (salary(24000)) -(personalRelief(2400)+nssf(400));
        return netsalary;
    }
    else if ( netsalary>= 32333) 
    {
        let tax=(32333/100*25)-8083;
        return tax;

        let netsalary=  (salary(32333)) -(personalRelief(2400)+nssf(400));
        return netsalary;
    }
     
     
     // add NSSF, NHIF calculations and paye function above.


        if (salary <= 5999)
        {
            let payment = salary - paye(599) - nssf(400) -  nssf(150);
            return payment;
        }
        else if (salary >=6000 && salary < 8000)
        {
            let payment = salary - paye(600) - nssf (400)- nhif(300);
            return payment;
        }
        else if (salary >=8000 && salary < 12000)
        {
            let  payment= salary - paye(800) - nssf(400) - nhif(400);
            return payment;
        }
        else if (salary >=12000 && salary < 15000)
        {
            let payment = salary - paye(1200) - nssf(400) - nhif(500);
            return payment;
        }
        else if (salary >=15000 && salary < 20000)
        {
            let payment = salary - paye(1500) - nssf(400) - nhif(600);
            return payment;
        }
        else if (salary >=20000 && salary < 25000)
        {
            let payment = salary - paye(2000) - nssf(400) - nhif(750);
            return payment;
        }
        else if (salary >=25000 && salary < 30000)
        {
            let payment= salary - paye(6250) - nssf(400) - nhif(850);
            return payment;
        }
        else if (salary >=30000)
        {
            let payment= salary - paye(7500) - nssf(400) - nhif(900);
            return payment;
        }
        console.log(netsalary(59999-3000))
