import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestacaoService {

  constructor() {

  }

  Left(str, n) {
    if (str != "") {
      if (n <= 0)
        return "";
      else if (n > String(str).length)
        return str;
      else
        return String(str).substring(0, n);
    }
    else {
      return ""
    }
  }

  Right(str, n) {
    if (str != "") {
      if (n <= 0)
        return "";
      else if (n > String(str).length)
        return str;
      else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
      }
    }
    else {
      return ""
    }
  }

  IsDate(sDate) {
    if (sDate != "") {
      var scratch = new Date(sDate);
      if (scratch.toString() == "NaN" || scratch.toString() == "Invalid Date") {
        //alert("Not a Date");
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }

  }

  getIdadeGestacional(d1, d2, s) {    
    d2 = ""
    s = ""
    let sdays = 0;
    //d2 = convertDate(d2);
    var DateDiff = {

      inDays: function (d1, d2) {
        //if (this.IsDate(d2) === false) {
          d2 = new Date();
        //}

        if (s != "") {
          sdays = s.replace(",", ".");
          var diff = Math.abs(d1 - d2);
          var igDays = (sdays * 7) + Math.round(diff / 24 * 3600 * 1000);
          var result = this.Left((igDays % 7), 2);
          result = result.replace(".", "")        
          return result;
        }
        else {
          return "";
        }
      },

      inWeeks: function (d1, d2) {
        //if (this.IsDate(d2) === false) {
          d2 = new Date();
        //}
        let t2 = d2.getTime();
        let t1 = d1.getTime();

        if (s != "") {
          sdays = s.replace(",", ".");
          sdays = sdays * 7   
          return this.Left(((sdays + parseInt(t2) - parseInt(t1)) / (24 * 3600 * 1000)) / 7, 2);
        }
        else {          
          return ((parseInt(t2) - parseInt(t1)) / (24 * 3600 * 1000 * 7));
        }
      },

      inMonths: function (d1, d2) {
        let d1Y = d1.getFullYear();
        let d2Y = d2.getFullYear();
        let d1M = d1.getMonth();
        let d2M = d2.getMonth();

        return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
      },

      inYears: function (d1, d2) {
        return d2.getFullYear() - d1.getFullYear();
      }
    }
    d1 = this.convertDate(d1);//"06/13/2015";

    //if (this.IsDate(d1) == true) {
      d1 = new Date(d1);
      let weeks = DateDiff.inWeeks(d1, d2);
      let days = DateDiff.inDays(d1, d2);

      let semanasStr: string = weeks.toString()

      console.log('weeks', semanasStr.indexOf("."))

      console.log('semanas', )
      let dias = semanasStr.slice(semanasStr.indexOf(".") +1,  semanasStr.length)[0];
      let semanas = semanasStr.slice(0, semanasStr.indexOf("."))
      //var weekdays = weeks * 7;	
      //days = days - weekdays ;
     
      if (dias != "0") {
        return (semanas != "1" ? semanas + ' semanas' : semanas + ' semana')+ " e " + (dias != "1" ? dias + ' dias' : dias + ' dia');
      }
      else {
        return semanas != "1" ? semanas + ' semanas' : semanas + ' semana';
      }
    //}
    /* else {

      return "";
    } */
  }
  convertDate(inputFormat: string) {
    var ss = inputFormat.split("/");

    return ss[1] + "/" + ss[0] + "/" + ss[2];
  }

  getDppFromDate(d, s) {
    var pDate = this.convertDate(d);
    var sdays = 0;
    if (s != "") {
      s = s.replace(",", ".");
      sdays = s * 7;
    }
    var newdate = new Date(pDate);

    /* let date = new Date();
    let date2 = date.setTime(date.getTime() - (14 * 24 * 60 * 60 * 1000));
    let dum = new Date(date2);
    
    formatedDum = dum.getDate() + "/" + (dum.getMonth() + 1) + "/" + dum.getFullYear() ; */



    newdate.setDate(newdate.getDate() - sdays);
    newdate.setDate(newdate.getDate() + 280);
    
    console.log('new date', newdate)
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();

    var someFormattedDate = dd + '/' + mm + '/' + y;
    return newdate;
    
  }
}
