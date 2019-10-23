
     var jawab = prompt("kode nama yg harus d ketik...");
     var nama  = "";
      switch(jawab){
          case "1":
            nama = "affan";
            break;
          case "2": 
            nama = "ucup";
            break;
            case "3":
            nama = "aris";
            break;
            default:
            document.write("<p>sorry anda salah pilih</p>");
      }

          if (nama ===""){
              document.write("<P>kamu gagal </p>");
              }else{
                  document.write("<h2>selamat nama nya adalah " + nama  );
              }     
 