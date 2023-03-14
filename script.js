function func(){
          var a = Number(document.getElementById("1").value);
          var b = Number(document.getElementById("2").value);
          var c = Number(document.getElementById("3").value);
          var d = Number(document.getElementById("4").value);
          var e = Number(document.getElementById("5").value);
          var f = Number(document.getElementById("6").value);
          var g = Number(document.getElementById("7").value);
          var h = Number(document.getElementById("8").value);
          var i = Number(document.getElementById("9").value);
          var j = Number(document.getElementById("10").value);

          var S = Number(document.getElementById("S").value);

          var m
          var V

          m = (a+b+c+d+e+f+g+h+i+j)/10;
          V = S * m;

          document.getElementById("m").innerHTML = m + "    м";
          document.getElementById("V").innerHTML = "Объём (V): " + V;

      }
