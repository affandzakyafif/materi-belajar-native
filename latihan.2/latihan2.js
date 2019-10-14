for (y=1; y<=5; y++){
    for (x=1; x<=5; x++){
        if (y==3&&x==4){
            document.write("+")
        
        }else {
            document.write("_")
        }
        
    }document.write("<br>")

    
}
for (y=1; y<=5; y++){
    for (x=1; x<=5; x++){

        if (y==3&&x==2){
            document.write("+")
        } 
        else if (y==4&&x==1){
            document.write("+")
        }
        else{
        document.write("_ ")
    }
}
    document.write("<br>")
}

for (y=1; y<=5; y++){
    for(x=1; x<=5; x++){

        if (x==5&&y>3){
            document.write("+")

        } 
        else if (y==1&&x<3){
            document.write("+")
        }
        else {
            document.write("_")
        }
    } 
    document.write("<br>")
}

for (y=1; y<=5; y++){
    for (x=1; x<=5; x++){

        if (x==3&&y>1&&y<5){
            document.write("+")
        }
        else {
            document.write("_ ")
        }
       
    }document.write("<br>")
}

for (y=1; y<=5; y++){
    for (x=1; x<=5; x++){
       
        if (y==3&&x>1&&x<5){
            document.write("+")

        }
         else{
            document.write("_")

        }
    }
    document.write("<br>")
}
for (y=1; y<=5; y++){
    for (x=1; x<=5; x++){

        if (x==3&&y>1&&y<5){
            document.write("+")

        }
        else{
            document.write("_ ")

        }
        
    }document.write("<br>")
}

for (y=1; y<=5; y++){
    for (x=1; x<=5; x++){

        if (y==2&&x==4){
            document.write("+")

        }else if (y==3&&x==3){
            document.write("+")

        }else if (y==4&&x==2){
            document.write("+")

        }else if (y==5&&x==1){
            document.write("+")
        }
        
        else{
            document.write("_ ")

        } 
    }document.write("<br>")
}
document.write("<br>")

for (y=1; y<=5; y++){
    for (x=1; x<=5; x++){

        if (y==1&&x==4 || y==2&&x==4){
            document.write("+")

        }else if (y==2&&x==3 || y==3&&x==4){
            document.write("+")

        }else if (y==3&&x==2 || y==4&&x==4){
            document.write("+")

        }else if (y==4&&x==1 || y==5&&x==4){
            document.write("+")
        }
        else{
            document.write("_ ")

        }
    }document.write("<br>")
}
document.write("<br>")
for (y=1; y<=6; y++){
    for (x=1; x<=6; x++){

        if (y==1&&x==1 || y==2&&x==1 || y==3&&x==1 || y==4&&x==1 || y==5&&x==1 || y==6&&x==1 || y==5&&x==2 || y==4&&x==3 || y==4&&x==4 || y==5 || y==6&&x==6 || y==5&&x==6 || y==4&&x==6 || y==3&&x==6 || y==2&&x==6 || y==1&&x==6){
            document.write("+")

        }else {
            document.write("_    ")

        }
    }document.write("<br>")
} 
document.write("<br>")

for (y=1; y<=6; y++){
    for (x=1; x<=6; x++){
        if (x==3&&y<2 || x==5&&y>5 ){
            document.write("+")

        } else {
            document.write("_  ")

        }
    }document.write("<br>")
}