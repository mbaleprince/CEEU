function info() {
    let message = document.getElementById("message_").value;
    let subject = document.getElementById("subject_").value;
    let mail = document.getElementById("mail_").value;
    let phone = document.getElementById("telephone_").value;
    let name = document.getElementById("name_").value;
    if (name == "" & phone == "" & mail == "" & subject == "" & message == "") {
        alert("Please Fill In All Forms");
        return false;
    }
    else if (name == "") {
        alert("Please Fill In Your Name");
        return false;
    }
    else if (phone == "") {
        alert("Please Enter Your Phone number");
        return true;
    }
    else if (mail == "") {
        alert("Please Enter Your Email Address");
        return true;
    }
    else if (subject == "") {
        alert("Please Enter The Subject");
        return false;
    }
    else if (message == "") {
        alert("Please Enter Your Message");
        return false;
    }
    else {
        window.open('mailto:ceeurg@gmail.com?subject='+subject+'&body='+message+' And the whole message was sent by '+name+' and my telephone number is '+phone+'&bcc='+mail+'&cc='+mail, '_blank');
        return true;
    }
}