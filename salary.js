//Benefits and basic salary

let houseallowance =  24001;
let transportallowance = 32333
let personalRelief = 2400;
let nssf =  200;

function netSalary(salary, benefits = 1080)
{ 
     // Function to calculate PAYE 

    let payeCalculations = () =>
    {
    const grossSalary = salary;
    let taxable = grossSalary - benefits
    
    if (salary <= 24000)
    {
        var tax =  (24000 * 0.1) - 2400;
        return tax;
    }
    else if (taxable> 24000 && taxable <= 32333) 
    {
        const tax =  (24000 * 0.1) + (0.25 * (taxable - houseallowance)) - personalRelief;
        return tax;
    }
     else if (taxable > 32333)
     {
         const tax =  2400 + ((32333 - 24000) * 0.25) + (0.3 * (taxable - transportallowance)) - personalRelief;
         return tax;
     }
     
    }
    const nssfNhifDeduction = ()=> 
    {
        // Block takes into account NSSF, NHIF figures and PAYE function above.


        if (salary <= 5999)
        {
            const payment = salary - payeCalulations() - nssf - 150;
            return payment;
        }
        else if (salary >=6000 && salary < 8000)
        {
            const payment = salary - payeCalulations() - nssf - 300;
            return payment;
        }
        else if (salary >=8000 && salary < 12000)
        {
            const payment= salary - payeCalulations() - nssf - 400;
            return payment;
        }
        else if (salary >=12000 && salary < 15000)
        {
            const payment = salary - payeCalulations() - nssf - 500;
            return payment;
        }
        else if (salary >=15000 && salary < 20000)
        {
            const payment = salary - payeCalulations() - nssf - 600;
            return payment;
        }
        else if (salary >=20000 && salary < 25000)
        {
            const payment = salary - payeCalulations() - nssf - 750;
            return payment;
        }
        else if (salary >=25000 && salary < 30000)
        {
            const payment= salary - payeCalulations() - nssf - 850;
            return payment;
        }
        else if (salary >=30000 && salary < 35000)
        {
            const payment= salary - payeCalulations() - nssf - 900;
            return payment;
        }
        else if (salary >=35000 && salary < 40000)
        {
            const payment= salary - payeCalulations() - nssf - 950;
            return payment;
        }
        else if (salary >=40000 && salary < 45000)
        {
            const payment = salary - payeCalulations() - nssf - 1000;
            return payment;
        }
        else if (salary >=45000 && salary < 50000)
        {
            const payment = salary - payeCalculations() - nssf - 1100;
            return payment;
        }
        else if (salary >=50000 && salary < 60000)
        {
            const payment = salary - payeCalculations() - nssf - 1200;
            return payment;
        }
        else if (salary >=60000 && salary < 70000)
        {
            const payment = salary - payeCalculations() - nssf - 1300;
            return payment;
        }
        else if (salary >=70000 && salary < 80000)
        {
            const payment = salary - payeCalculations() - nssf - 1400;
            return payment;
        }
        else if (salary >=80000 && salary < 90000)
        {
            const payment = salary - payeCalculations() - nssf - 1500;
            return payment;
        }
        else if (salary >=90000 && salary < 100000)
        {
            const payment = salary - payeCalculations() - nssf - 1600;
            return payment;
        }
        else
        {
            const salo = salary - payeCalculations() - nssf - 1600; 
            return salo;
        }
    }
   
    const endPay =  [`PAYE: ${payeCalculations().toFixed(2)}, NSSF: ${nssf}, Net Salary is: ${nssfNhifDeduction() + benefits}`];
    return endPay; 
}
console.log(netsalary(40000,60000))