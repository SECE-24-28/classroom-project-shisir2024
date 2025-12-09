let employee=[{ena:"arun",mob:111},
    {ena:"ajay",mob:112},
       {ena:"bala",mob:113},
       {ena:"bharath",mob:211},
       {ana:"chandru",mob:212},
       {ena:"Dinesh",mob:213}

]

let newEmp=employee.filter((emp)=>
{
    return emp.ena.includess("A")
}
)
console.log(newEmp)