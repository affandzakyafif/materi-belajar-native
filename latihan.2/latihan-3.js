// // for (x = 1; x <5; x++){
// //     for (y = 1; y <5; y++)
// //     if (x>=y){
// //         document.write(x)
// //     } 
// //     else {
// //         document.write(" -")
// //     }
// //     document.write("<br>")
// // }
// for (y=1; y<=5; y++){
//     for (x=1; x<=5; x++)
        
//         if (y==3){
//             document.write("5")
//         }
//         else if (x==1){
//             document.write("9")
//         }
        
//         else if (y==1){
//             document.write("2")
//         }

//         else if (x==5){
//             document.write("0")
//         }
//         else {
        
//             document.write("- ")
//         }
//     document.write("<br>")
//     }
// document.write("<br>")
// for (y = 1; y <= 5; y++) {
//     for (x = 1; x <= 5; x++)

//         if (y == 3) {
//             document.write("0")
//         }
//         else if (x == 1) {
//             document.write("0")
//         }

//         else if (y == 1) {
//             document.write("0")
//         }

        
//     document.write("<br>")
// }

// for (y = 1; y <= 5; y++) {
//     for (x = 1; x <= 5; x++)

//         if (x == 3) {
//             document.write("0")
//         }
//         else {

//             document.write("- ")
//         }
//     document.write("<br>")
// }



for (x=1; x<=9; x++){
    for (y=1; y<=9; y++)

    if (x==1){
        document.write("+")
    
    }else if (y==1){
        document.write("+")

    }else if (x==5){
        document.write("+")

    }else if (x==9){
        document.write("+")
    
    }else {
        document.write("-  ")
    
    }document.write("<br>")
  
    
}

document.write("<br>")
for (x=1; x<=9; x++){
    for (y=1; y<=9; y++)

    if (y==x){
        document.write("+")

    }else if (y==1){
        document.write("+")

    }else if (y==9){
        document.write("+")

    }else {
        document.write("-   ")

    }document.write("<br>")
}
document.write("<br>")

for (x=1; x<=9; x++){
    for (y=1; y<=9; y++)

    if (x==1){
        document.write("+")

    }else if (y==1){
        document.write("+")

    }else if (x==5){
        document.write("+")

    }else if (x==9){
        document.write("+")

    }else if (y==9&&x-2 &&x-3 &&x-4){
        document.write("+")


    }else{
        document.write("_    ")
    }
    
    document.write("<br>")
} document.write("<br>")


for (x=1; x<=9; x++){
    for (y=1; y<=9; y++)

    if (y==1){
        document.write("+")
        
    }else if (x==9){
        document.write("+")

    }else{
        document.write("_ ")
    }
    document.write("<br>")
} document.write("<br>")

for (x=1; x<=9; x++){
    for (y=1; y<=9; y++)

    if (y==5){
        document.write("+")

    }else {
        document.write("_  ")

    }document.write("<br>")

} document.write("<br>")

for (x=1; x<=9; x++){
    for (y=1; y<=9; y++)

    if (x==1){
        document.write("+")

    }else if (y==1&&x-8 &&x-7 &&x-6){
        document.write("+")
        
    }else if (x==5){
        document.write("+")

    }else if (x==9){
        document.write("+")
    
    }else if (y==9&&x-2 &&x-3 &&x-4){
        document.write("+")
    
    }else{
        document.write("_  ")

    }document.write("<br>")
}

document.write("<br>")


for (x=1; x<=9; x++){
    for (y=1; y<=9; y++)

    if (x==1 || y==1&&x-8 &&x-7 &&x-6 || x==5 || x==9 || y==9&&x-2 &&x-3 &&x-4){
        document.write("+")

    }else {
        document.write("_   ")

    }
    document.write("<br>")
} 
document.write("<br>")

for (x=1; x<=9; x++){ 
    for (y=1; y<=9; y++)

        if (x==1 || y==1 || x==5 || y==9 ){
            document.write("+")

        }else{
            document.write("_   ")


        }document.write("<br>")

} 
document.write("<br>")
for (y=1; y<=9; y++){
    for (x=1; x<=9; x++){

       if (y==1){
           document.write("+ ")

       }
       else if(y==9){
           document.write("+ ")
       
        }
         else if  (x==10-y){
             document.write("+ ")
         }   
       else {
           document.write("_ ")
       }
    }
    document.write("<br>")


}







