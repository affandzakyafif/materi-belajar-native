
       var nilai= prompt ("input kan nilai akhir:");
       var grade= "";
           
        if (nilai >=90) grade = "A"
        else if (nilai >= 80 ) grade ="B"
        else if (nilai <= 70 ) grade ="C"
        else grade ="D";
        
        document.write(`<p>grade anda : ${grade} </p>`);
           
           
