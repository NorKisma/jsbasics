function EVCPlus() {
    let enteredPin = document.getElementById('pin').value;
    let correctPin = '1234';
    document.getElementById('Itus').innerHTML = "";
    document.getElementById('Bixi').innerHTML = "";
    document.getElementById('Uwareeji').innerHTML = "";
    document.getElementById('Badal').innerHTML = "";

    if (enteredPin === correctPin) {
      document.getElementById('Itus').innerHTML = "1: Itus Haraagaaga";
      document.getElementById('Uwareeji').innerHTML = "2: Uwareeji Qof kale";
      document.getElementById('Badal').innerHTML = "3: Badal PIN";
      document.getElementById('Bixi').innerHTML = "4: Bixi Bill ";
    } else {
      document.getElementById('incorrectPin').innerHTML = "Pin kaaga Ayaa ka Qaldan";
    }
  }

  function EVCBalance() {
    let chose = document.getElementById('number').value;
    document.getElementById('numb').innerHTML = "";
    document.getElementById('trnsfr').innerHTML = "";
    document.getElementById('TRF').innerHTML = "";
    document.getElementById('LastBh').innerHTML = "";
    document.getElementById('LastBN').innerHTML = "";

    let Norblance = 500;
    let HassanB = 200;

    if (chose == '1') {
      document.getElementById('Norblance').innerHTML = " Nor Balance is: " + Norblance;
      document.getElementById('HassanB').innerHTML = " Hassan Balance is: " + HassanB;
    } else if (chose == '2') {
      document.getElementById('TRF').innerHTML = " Transfer to Hassan: ";
      let transferAmount = parseInt(document.getElementById('trnsfr').value);
      document.getElementById('Norblance').innerHTML = " Nor Balance is: " + Norblance;
      document.getElementById('HassanB').innerHTML = " Hassan Balance is: " + HassanB;

      Norblance -= transferAmount;
      HassanB += transferAmount;

      document.getElementById('LastBN').innerHTML = " Nor Balance is: " + Norblance;
      document.getElementById('LastBh').innerHTML = " Hassan Balance is: " + HassanB;

    } else if (chose == '3') {
       document.getElementById('TRF').innerHTML = " Inter Old PIN ";
     
    }
  }