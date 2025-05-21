function newsletter() {
    let msg = document.getElementById("news_letter").value;
    if (msg == "") {
        alert("Please Enter Your Email Address");
        return false;
    }
    else {
        window.open('mailto:ceeurg@gmail.com?subject=Subscription To Daily News Letter&body=The email '+msg+' has request to subscribe to daily news letters.&bcc='+msg+'&cc='+msg, '_blank');
        return true;
    }
}