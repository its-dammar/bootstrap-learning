

{
    let y = 20;

    let copy = {
        brand: "Asmita",
        price: "NRs. 100",
    }
    document.write('<br> The copy brand is ' + copy.brand);
}



// array: collection of multiple data with same datatype sybmol: [], array indexing starts from 0

// collection of 5 students inforamtion : name, email, phone, address
{

    let name=["Ram", "shyam", "prerana", "Gita", "Sita"];
    let email=["Ram@gmail.com", "shyam@gmail.com", "prerana@gmail.com", "Gita@gmail.com", "Sita@gmail.com"];
    let phone=[98680000, 98670000, 980250000, 98680000027, 98970000];
    let address=["KTM", "PKR", "Chiwan", "Jhapa", "MNR"];

    for(let i=0; i<=4; i++){
        document.write("<br><br> The student Name is " + name[i] + "<br> The student email is " + email[i] + "<br>" + phone[i] + "<br>" + address[i]);
    }

}

