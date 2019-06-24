# A Car Renting App on Blockchain

## About This Project
### 一句話描述這個專題
建構在區塊鏈的租車系統。

### 這包含了什麼
其實這是小組專題，包含了app、[區塊鏈後台][1]與遙控車等三大部分，而這個repo只有app的部分；至於其他兩部分則是由其他兩個小組完成。

### app?
這是個使用React Native建構的iPhone app，目前並沒有開發android的版本。  
所有的介面都非常的直觀，可以查看車輛評價、租車、遙控並查看錢包餘額。

## Using App

### setup
Replace the following IP address by the IP address of the [blockchain backend][1]:

1. Line 37 in `./container/RatingPage.js`;  
2. Line 46, 64, 84 in `./container/carlist.js`;  
3. Line 50, 75, 84 in `./container/Login.js`;  

Replace the following IP address by that of the Respberry-Pi automotive car: 

1. Line 34 in `./container/Keyboard.js`;

### usage
```
$ cd ./app  
$ npm install
```
Open `./ios/Final.xcodeproj` by Xcode then build it; then you can play this app on the simulator.


[1]:https://github.com/DCChen1998/Automotive-contract/