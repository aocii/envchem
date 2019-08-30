angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup,$rootScope) {

  //$scope.deneme = function(){
    //var num1 = parseInt(document.getElementById("num1").value);
    //var num2 = parseInt(document.getElementById("num2").value);
    //document.getElementById("output").innerHTML= num1+num2   
  //}
    

//$scope.hesapla = function(v1){

//  $scope.h1=(-Math.log(v1)/Math.log(10));
//}

$scope.islem = function(gelenph){
  $scope.cevapph=Number((-Math.log(gelenph)/Math.log(10))).toFixed(2);
}

$scope.islem1 = function(gelenoh){
  $scope.cevappoh = Number((-Math.log(gelenoh)/Math.log(10))).toFixed(2)
}

$scope.islem2 = function(gelenph1){
  $scope.cevappoh1 = Number(14-(gelenph1)).toFixed(4);
  $scope.cevapmolarh = Math.pow(10,-gelenph1)
  $scope.cevapmglh = Math.pow(10,-gelenph1)
}
$scope.islem3 = function(gelenpoh){
  $scope.cevapph1 = Number(14-(gelenpoh)).toFixed(4);
  $scope.cevapoh1 = Math.pow(10,-gelenpoh);
  $scope.cevapmgloh = 17000*Math.pow(10,-gelenpoh)
}
$scope.regresyon = function (derece){
  var ph = (-0.0132*derece + 7.3538);
  $scope.outputph = Number(ph).toFixed(4);
  $scope.outputpoh = Number(14-ph).toFixed(4);
  $scope.outputmolarh = Math.pow(10,-ph);
  $scope.outputmglh = Math.pow(10,-ph);
  $scope.outputmolaroh = Math.pow(10,-(14-ph));
  $scope.outputmgloh = 17000*Math.pow(10,-(14-ph))
}


//  $scope.regresyon = function(){
 // var t = document.getElementById("t").value;
  //var ph = (-0.0132*t + 7.3538);
  //document.getElementById("outputph").innerHTML= ph
  //document.getElementById("outputpoh").innerHTML=14-ph
  //document.getElementById("outputmolarh").innerHTML= Math.pow(10,-ph)
  //document.getElementById("outputmglh").innerHTML= Math.pow(10,-ph)
  //document.getElementById("outputmolaroh").innerHTML=Math.pow(10,-(14-ph))
  //document.getElementById("outputmgloh").innerHTML=17000*Math.pow(10,-(14-ph))
  //}


$scope.islem4 = function(molaracid1){
  $scope.cevapphacid1=(-Math.log(molaracid1)/Math.log(10));
}

$scope.islem5 = function(molaracid2){
  $scope.cevapphacid2=(-Math.log(molaracid2)/Math.log(10));
}

$scope.islem6 = function(molaracid3){
  $scope.cevapphacid3=(-Math.log(molaracid3)/Math.log(10));
}

$scope.islem7 = function(molaracid4){
  $scope.cevapphacid4=(-Math.log(molaracid4)/Math.log(10));
}

$scope.islem8 = function(molaracid5){
  $scope.cevapphacid5=(-Math.log(molaracid5)/Math.log(10));
}

$scope.islem9 = function(molaracid6){
  $scope.cevapphacid6=(-Math.log(2*molaracid6)/Math.log(10));
}

$scope.islem10 = function(molarbase1){
  $scope.cevapphbase1=14-(-Math.log(molarbase1)/Math.log(10));
}
$scope.islem11 = function(molarbase2){
  $scope.cevapphbase2=14-(-Math.log(molarbase2)/Math.log(10));
}
$scope.islem12 = function(molarbase3){
  $scope.cevapphbase3=14-(-Math.log(molarbase3)/Math.log(10));
}
$scope.islem13 = function(molarbase4){
  $scope.cevapphbase4=14-(-Math.log(2*molarbase4)/Math.log(10));
}
$scope.islem14 = function(molarbase5){
  $scope.cevapphbase5=14-(-Math.log(2*molarbase5)/Math.log(10));
}
$scope.islem15 = function(molarbase6){
  $scope.cevapphbase6=14-(-Math.log(2*molarbase6)/Math.log(10));
}

//weak acid 

$scope.islem16 = function(initialmolar,wacidpka){
  var ka = (Math.pow(10,-wacidpka));
  $scope.cevappkatoka = ka;
  var x = Math.pow(ka*initialmolar,0.5);
  $scope.cevapmolarproduct = x 
  $scope.cevapfinalph = Number(-Math.log(x)/Math.log(10)).toFixed(4);
}
//weak base
$scope.islem17 = function(initialmolar1,wbasepkb){
  var kb = (Math.pow(10,-wbasepkb));
  $scope.cevappkbtokb = kb;
  var ka1 = 14 - kb
  var x1 = Math.pow(ka1*initialmolar1,0.5);
  $scope.cevapmolarproductbase = x1 
  $scope.cevapfinalphbase = Number(-Math.log(x1)/Math.log(10)).toFixed(4);
}


$scope.alk = function(cph,pp,ta){
  if(Number(pp)>Number(ta)){$scope.karbonatalk = "FF can not be greater than TA";
    $scope.ohalk = "FF can not be greater than TA";
    $scope.bikarbonatalk = "FF can not be greater than FF";}else{   
  var hco3 = ((ta/50000)+Math.pow(10,-cph)-Math.pow(10,-(14-cph)))/(1+((4.7*Math.pow(10,-11)/Math.pow(10,-cph))*2))
  $scope.bikarbonatalk = Number(hco3*50000).toFixed(4)
  var co3 = (4.7*Math.pow(10,-11)/Math.pow(10,-cph))*hco3
  $scope.karbonatalk =Number(50000*co3*2).toFixed(4)
  $scope.ohalk =Number( Math.pow(10,-(14-cph))*50000).toFixed(4)
  
  
  if( Number(pp)>(ta-pp)){
    $scope.kabakarbonatalk = (ta-pp)*2;
    $scope.kabaohalk = ta - (ta-pp)*2;
    $rootScope.kababikarbonatalk = "0"
    }else{$scope.kabakarbonatalk = pp*2; 
          $scope.kabaohalk = "0";
          $scope.kababikarbonatalk = ta - 2*pp}
  
  
  if(Number(((pp - $scope.ohalk)*2))>Number(ta)){ 
    $scope.phkabakarbonatalk = ta - $scope.ohalk;
    $scope.phkababikarbonatalk = "0"
    console.log("1a")
    }else{$scope.phkabakarbonatalk = Number((pp-$scope.ohalk)*2).toFixed(4);
          $scope.phkababikarbonatalk = ta - $scope.ohalk - $scope.phkabakarbonatalk 
    console.log("2a")
        }

console.log("buraya geldi")



if ($scope.ohalk != "0" &  $scope.kabaohalk != "0"  ){ 
    if ((Number($scope.ohalk) - Number($scope.kabaohalk) )>20 || (Number($scope.kabaohalk) - Number($scope.ohalk))>20) {console.log("1")
      $scope.ohalk = "Please check your experiment results"
      $scope.kabaohalk = "Please check your experiment results"
      $scope.karbonatalk= "Please check your experiment results"
      $scope.kabakarbonatalk= "Please check your experiment results"
      $scope.bikarbonatalk= "Please check your experiment results"
      $scope.kababikarbonatalk= "Please check your experiment results"
      $scope.phkabakarbonatalk= "Please check your experiment results"
      $scope.phkababikarbonatalk= "Please check your experiment results" 
    }
  }else if($scope.ohalk="0" & (20<Number($scope.kabaohalk))){console.log("2")
      $scope.ohalk = "Please check your experiment results"
      $scope.kabaohalk = "Please check your experiment results"
      $scope.karbonatalk= "Please check your experiment results"
      $scope.kabakarbonatalk= "Please check your experiment results"
      $scope.bikarbonatalk= "Please check your experiment results"
      $scope.kababikarbonatalk= "Please check your experiment results"
      $scope.phkabakarbonatalk= "Please check your experiment results"
      $scope.phkababikarbonatalk= "Please check your experiment results"
  }else if ($scope.kabaohalk="0" & Number($scope.ohalk)>20){console.log("3")
      $scope.ohalk = "Please check your experiment results"
      $scope.kabaohalk = "Please check your experiment results"
      $scope.karbonatalk= "Please check your experiment results"
      $scope.kabakarbonatalk= "Please check your experiment results"
      $scope.bikarbonatalk= "Please check your experiment results"
      $scope.kababikarbonatalk= "Please check your experiment results"
      $scope.phkabakarbonatalk= "Please check your experiment results"
      $scope.phkababikarbonatalk= "Please check your experiment results"
  }else if($scope.karbonatalk!="0" & $scope.kabakarbonatalk!="0" & ((Number($scope.karbonatalk)-Number($scope.kabakarbonatalk))>20 || (Number(kabakarbonatalk)-Number(karbonatalk)))>20){
      $scope.ohalk = "Please check your experiment results"
      $scope.kabaohalk = "Please check your experiment results"
      $scope.karbonatalk= "Please check your experiment results"
      $scope.kabakarbonatalk= "Please check your experiment results"
      $scope.bikarbonatalk= "Please check your experiment results"
      $scope.kababikarbonatalk= "Please check your experiment results"
      $scope.phkabakarbonatalk= "Please check your experiment results"
      $scope.phkababikarbonatalk= "Please check your experiment results" 
  }else if((($scope.bikarbonatalk - $scope.kababikarbonatalk)<20) || (($scope.bikarbonatalk-$scope.kababikarbonatalk))<20){
      console.log("buraya gelir misin lütfen")
      $scope.ohalk = "Please check your experiment results"
      $scope.kabaohalk = "Please check your experiment results"
      $scope.karbonatalk= "Please check your experiment results"
      $scope.kabakarbonatalk= "Please check your experiment results"
      $scope.bikarbonatalk= "Please check your experiment results"
      $scope.kababikarbonatalk= "Please check your experiment results"
      $scope.phkabakarbonatalk= "Please check your experiment results"
      $scope.phkababikarbonatalk= "Please check your experiment results"
    }
  }
}



$scope.durum=1;
$scope.tercih="Please choose concentraion";
$scope.tercih1="Tap here"
$scope.chosemolar=function(){
  if($scope.durum==1){
    $scope.renk="balanced";
    $scope.durum=0;
    $scope.tercih="Type molar concentraion";
    $scope.tercih1="Molarity";
    $scope.alkcalc = function(oh,co3,hco3){
      $scope.taalk = Number((oh - Math.pow(10,-14-Math.log(oh)/Math.log(10))+hco3+2*co3)*50000).toFixed(2);
    }
  }else{$scope.renk="energized";
    $scope.durum=1;
    $scope.tercih="Type Mg/l concentraion" ;
    $scope.tercih1="Mg/l";
    $scope.alkcalc = function(oh,co3,hco3){$scope.taalk = Number((oh/17+co3/30+hco3/61)*50).toFixed(2);}
  }
}

$scope.x = 0;
$scope.phg = function(x,tag){
  var hco3veri = ((tag/50000)+Math.pow(10,-x/1000)-Math.pow(10,-(14-x/1000)))/(1+((4.7*Math.pow(10,-11)/Math.pow(10,-x/1000))*2));
  $scope.bikarbonatalkgraph = Number(hco3veri*50000).toFixed(4);
  var co3veri = ((4.7*Math.pow(10,-11)/Math.pow(10,-x/1000))*hco3veri);
  $scope.karbonatalkgraph = Number(50000*co3veri*2).toFixed(4);
  $scope.ohalkgraph = Number((Math.pow(10,-(14-x/1000))*50000)).toFixed(4);
  $scope.ohyuzde = Number(((Math.pow(10,-(14-x/1000))*50000)/((Math.pow(10,-(14-x/1000))*50000)+(50000*co3veri*2)+(hco3veri*50000)))*100).toFixed(2);
  $scope.co3yuzde = Number(((50000*co3veri*2)/((Math.pow(10,-(14-x/1000))*50000)+(50000*co3veri*2)+(hco3veri*50000)))*100).toFixed(2);
  $scope.hco3yuzde =Number(((hco3veri*50000)/((Math.pow(10,-(14-x/1000))*50000)+(50000*co3veri*2)+(hco3veri*50000)))*100).toFixed(2);
  if (Number($scope.ohyuzde)>100){$scope.ohyuzde=100}
  if (Number($scope.co3yuzde)<0){$scope.co3yuzde=0}
  if (Number($scope.hco3yuzde)<0){$scope.hco3yuzde=0}
}; 



//hardness

$scope.drm=1;
$scope.trch="Please choose concentraion";
$scope.trch1="Tap here"
$scope.conc_terc=function(){
  if($scope.drm==1){
    $scope.renk="balanced";
    $scope.drm=0;
    $scope.trch="Type molar concentraion";
    $scope.trch1="Molarity";
    $scope.sertlik = function(fe,mn,ca,mg,sr,oh,co3,hco3){
      $scope.toplamalkanite = Number((oh - Math.pow(10,-14-Math.log(oh)/Math.log(10))+hco3+2*co3)*50000).toFixed(4);
      
      if(fe!=null){
        $scope.fesertli = Number(fe*55.845*(50/27.92)).toFixed(4)
      }else{$scope.fesertli=0};
      
      if(mn!=null){
        $scope.mnsertli = Number(mn*54.9380*(50/27.469)).toFixed(4) 
      }else{$scope.mnsertli=0};

      if(ca!=null){
        $scope.casertli = Number(ca*40.078*(50/20.39)).toFixed(4)
      }else{$scope.casertli=0};

      if(mg!=null){
        $scope.mgsertli = Number(mg*24.305*(50/12.1525)).toFixed(4)
      }else{$scope.mgsertli=0};

      if(sr!=null){
      $scope.srsertli = Number(sr*87.62*(50/43.81)).toFixed(4)       
      }else{$scope.srsertli=0}
      
      
      $scope.toplamsertlik = (Number($scope.fesertli)+Number($scope.mnsertli) + Number($scope.casertli) + Number($scope.mgsertli)+Number($scope.srsertli));
      
  if (Number($scope.toplamalkanite) < Number($scope.toplamsertlik)){$scope.karbonatsertlik = $scope.toplamalkanite ; 
        $scope.nonkarbonatsertlik =Number($scope.toplamsertlik - $scope.toplamalkanite).toFixed(4)} 
         else{$scope.karbonatsertlik = $scope.toplamsertlik;
             $scope.nonkarbonatsertlik = 0 ;
             console.log("hadi yeter artık olda eve gideyim")
        }
    } 
  }else{$scope.renk="energized";
    $scope.drm=1;
    $scope.trch="Type Mg/l concentraion" ;
    $scope.trch1="Mg/l";
    $scope.sertlik = function(fe,mn,ca,mg,sr,oh,co3,hco3){
      $scope.toplamalkanite = Number((oh/17+co3/30+hco3/61)*50).toFixed(4);
      
      if(fe!=null){
        $scope.fesertlik = Number(fe*(50/27.92)).toFixed(4)
      }else{$scope.fesertlik=0};
      
      if(mn!=null){
        $scope.mnsertlik = Number(mn*(50/27.469)).toFixed(4) 
      }else{$scope.mnsertlik=0};

      if(ca!=null){
        $scope.casertlik = Number(ca*(50/20.39)).toFixed(4)
      }else{$scope.casertlik=0};

      if(mg!=null){
        $scope.mgsertlik = Number(mg*(50/12.1525)).toFixed(4)
      }else{$scope.mgsertlik=0};

      if(sr!=null){
      $scope.srsertlik = Number(sr*(50/43.81)).toFixed(4)       
      }else{$scope.srsertlik=0}

      $scope.toplamsertlik = (Number($scope.fesertlik)+Number($scope.mnsertlik) + Number($scope.casertlik) + Number($scope.mgsertlik)+Number($scope.srsertlik))
      
      if (Number($scope.toplamalkanite) < Number($scope.toplamsertlik)){$scope.karbonatsertlik = $scope.toplamalkanite ; 
        $scope.nonkarbonatsertlik =Number($scope.toplamsertlik - $scope.toplamalkanite).toFixed(4)} 
         else{$scope.karbonatsertlik = $scope.toplamsertlik;
             $scope.nonkarbonatsertlik = 0;}

      if(fe!=null){
        $scope.fesertli = Number(fe*(50/27.92)).toFixed(4)
      }else{$scope.fesertli=0};
      
      if(mn!=null){
        $scope.mnsertli = Number(mn*(50/27.469)).toFixed(4) 
      }else{$scope.mnsertli=0};

      if(ca!=null){
        $scope.casertli = Number(ca*(50/20.39)).toFixed(4)
      }else{$scope.casertli=0};

      if(mg!=null){
        $scope.mgsertli = Number(mg*(50/12.1525)).toFixed(4)
      }else{$scope.mgsertli=0};

      if(sr!=null){
      $scope.srsertli = Number(sr*(50/43.81)).toFixed(4)       
      }else{$scope.srsertli=0}

      $scope.french = Number($scope.toplamsertlik/10).toFixed(4);
      $scope.alman = Number($scope.french*1.7857).toFixed(4);
      $scope.ingiliz = Number($scope.french*1.429).toFixed(4);

      if (Number($scope.toplamsertlik) >0 & Number($scope.toplamsertlik)<75) {$scope.sertlikcesidi = "Soft" 
        $scope.skala = "1"}
        else if(Number($scope.toplamsertlik) >75 & Number($scope.toplamsertlik)<150) {$scope.sertlikcesidi = "Moderately Hard" 
          $scope.skala = "2"}
          else if (Number($scope.toplamsertlik) >150 & Number($scope.toplamsertlik)<300) {$scope.sertlikcesidi = "Hard"
            $scope.skala = "3"}
            else if(Number($scope.toplamsertlik) >300 ) {$scope.sertlikcesidi = "Very Hard"
              $scope.skala = "4"}          

    }
  }
}


//hardness sonu 


//clear butonu
$scope.f5butonu = function(){
  location.reload()
}


//cod
$scope.cod= function(c,h,o,n,cmgl){
      

      if(c!=null){
        $scope.ca = c
      }else{$scope.ca=0};
      if(h!=null){
        $scope.hi = h
      }else{$scope.hi=0};
      if(o!=null){
        $scope.ox = o
      }else{$scope.ox=0};
      if(n!=null){
        $scope.ni = n
      }else{$scope.ni=0};
      if(cmgl!=null){
        $scope.concmgl = cmgl
      }else{ $scope.concmgl= 0};

$scope.oxy = (($scope.ca*2 +($scope.hi-3*$scope.ni)/2  - $scope.ox)/2)*32
$scope.compoundw= ($scope.ca*12 + $scope.hi*1 + $scope.ni*14 + $scope.ox*16)
$scope.codmgl = Number(($scope.oxy*$scope.concmgl)/$scope.compoundw).toFixed(4)

}


$scope.bod = function(d1,bod1,d2,bod2,d){
    $scope.x1= Number(Math.pow(d1/bod1,1/3)).toFixed(6);
    $scope.x2= Number(Math.pow(d2/bod2,1/3)).toFixed(6);
    $scope.m = Number(Math.pow(Math.pow(($scope.x1-$scope.x2)/(d1-d2),2),1/2)).toFixed(6) 
    $scope.n = Number($scope.x2-$scope.m*d2).toFixed(6)
    $scope.k = Number((6*$scope.m)/$scope.n).toFixed(6)
    $scope.bodu = Number(1/($scope.k*Math.pow($scope.n,3))).toFixed(2)
    $scope.bodcevap =  Number($scope.bodu *(1- Math.pow(2.718281828459,-$scope.k*d))).toFixed(2)

}

$scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Source',
     template: 'Various ways exist to determine k and BODu. The method we will use is the Thomas method Water Sewage and Works, Vol. 97 pg. 123, 1950.'
   })
 }

$scope.showAlertcod = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'What\'s C.O.D. ?' ,
     template: 'Chemical oxygen demand is a measure of the total quantity of oxygen required to oxidize all organic material (biologically available, inert organic matter) into carbon dioxide and water, and oxidisable inorganic matter.'
   })
 }


$scope.degerler = [
{id:0,ed : 1,mw: 36.46 ,d:1.18 ,p:32 },
{id:1,ed : 2,mw: 98.079,d:1.84 ,p:98  },
{id:2,ed : 1,mw: 63.01,d:1.5129 ,p:63  },
{id:3,ed : 1,mw: 100.46,d:1.67 ,p:70  },
{id:4,ed : 1,mw: 127.911,d:2.85 ,p:57  },
{id:5,ed : 1,mw: 80.91,d:3.6452 ,p:47.6  },
{id:6,ed : 3,mw: 98,d:1.685 ,p:85  },
{id:7,ed : 4,mw: 292.24,d:0.86 },
{id:8,ed : 1,mw: 1,d:1 ,p:1  },
{id:9,ed : 1,mw: 60.05,d:1.049 ,p:4  },
{id:10,ed : 1,mw: 27.0253,d:0.68 ,p:3  },
{id:11,ed : 1,mw: 20.01,d:0.99 ,p:49  },
{id:12,ed : 1,mw: 39.9971,d:2.1  },
{id:13,ed : 1,mw: 56.11,d:2.12 ,p:90  },
{id:14,ed : 2,mw: 58.3197,d:3.47 ,p:99.5  },
{id:15,ed : 2,mw: 74.93,d:2.211   },
{id:16,ed : 1,mw: 23.95,d:1.46 ,p:56.5  },
{id:17,ed : 1,mw: 17.031,d:0.73 ,p:34  },
{id:18,ed : 1,mw: 59.112,d:0.627 ,p:40  },
{id:19,ed : 1,mw: 79.102,d:0.9819 ,p:99  },
{id:20,ed : 1,mw: 35.04,d:0.91 ,p:28  },
];


$scope.asd = function (paramid){
  $scope.ed = $scope.degerler[paramid].ed  
}

$scope.as = function (paramid){
  $scope.ed1 = $scope.degerler[paramid].ed
  $scope.ma1 =  $scope.degerler[paramid].mw 
  $scope.d1 =  $scope.degerler[paramid].d
  $scope.p1 =  $scope.degerler[paramid].p 
}

//ed=etki değerlik, ma=moleculer weight, m = stock solution molarity,v = hazırlanmak istenen çöz. hacmi, sm= hazırlanmak istenen molarite 
 $scope.dlm = function(c,ed,m,v,sm){
  if(c=="Molarity"){
   $scope.v2 = ((sm* (v/1000))/m)*1000

  }else if(c=="Normality" ){
    var molar = sm/ed
    $scope.v2 = ((molar* (v/1000))/m)*1000
    }

 }


$scope.stk = function(z,y,h,ed1,d1,p1,ma1, m1, v1){
  
  
if(z != 0){
  if ( h == 'l' ){
        if(y =='Molarity' ){
          console.log("molar sıvı ")
          $scope.mol = m1*v1
          $scope.safhacim = ($scope.mol*$scope.ma1)/$scope.d1/100
          $scope.hacim=Number(($scope.safhacim/($scope.p1/100))/10).toFixed(4)
          $scope.sonuc = ("Get "+$scope.hacim+" ml substance and complet it with water till its volume become "+v1+ " ml ")
        }else if(y=='Normality'){
          console.log("normal sıvı")
          $scope.mol = (m1/$scope.ed1)*v1
          $scope.safhacim = ($scope.mol*$scope.ma1)/$scope.d1/100
          $scope.hacim=Number(($scope.safhacim/($scope.p1/100))/10).toFixed(4)
          $scope.sonuc = ("Get "+$scope.hacim+" ml substance and complet it with water till its volume become "+v1+ " ml ") 
        }

  }else if(h=='s'){
        if(y=='Molarity'){
          console.log("molar katı ")
          $scope.mol = (m1/1000)*v1
          $scope.sonuc = ("Get "+Number($scope.mol*$scope.ma1).toFixed(4)+" gr susbtances and complete it with water till its volume become "+v1+" ml ")
        }else if(y=='Normality'){
          console.log("normal katı ")
          $scope.mol = ((m1/1000)*v1)/$scope.ed1
          $scope.sonuc = ("Get "+Number($scope.mol*$scope.ma1).toFixed(4)+" gr susbtances and complete it with water till its volume become "+v1+" ml ")
          
        }
     }
  }
} 



$scope.st = function(z, y, h , ed11 , d11 , p11 , ma11 , m11 , v11){
  console.log("burayaa geldi")
  if ( h == 'l' ){
        if(y == 'Molarity' ){
          console.log("özel molar sıvı")
          $scope.mol1 = m11*v11
          $scope.safhacim1 = ($scope.mol1*ma11)/d11/100
          $scope.hacim1=Number(($scope.safhacim1/(p11/100))/10).toFixed(4)
          $scope.sonuc="Get "+$scope.hacim1+" ml substance and complete it with water till its volume become "+v11+ " ml "
        }else if(y=='Normality'){
          console.log("özel normal sıvı")
          $scope.mol1 = (m11/ed11)*v11
          $scope.safhacim1 = ($scope.mol1*ma11)/d11/100
          $scope.hacim1=Number(($scope.safhacim1/(p11/100))/10).toFixed(4)
          $scope.sonuc="Get "+$scope.hacim1+" ml substance and complete it with water till its volume become "+v11+ " ml "
        }

  }else if(h=='s'){
        if(y=='Molarity'){
          console.log("özel molar katı ")
          $scope.mol = (m11/1000)*v11
          $scope.sonuc = ("Get "+Number($scope.mol*ma11).toFixed(4)+" gr susbtances and complete it with water till its volume become "+v11+" ml ")

        }else if(y=='Normality'){
          console.log("özel normal katı ")
          $scope.mol = ((m11/1000)*v11)/ed11
          $scope.sonuc = ("Get "+Number($scope.mol*ma11).toFixed(4)+" gr susbtances and complete it with water till its volume become "+v11+" ml ")
          
        }

    }
  }



})
.controller('PlaylistsCtrl', function($scope) {
  $scope.konular = [
    { title: 'pH and Acidity', adres:'1', resim:"/img/PHscale.jpg ", aciklama:"pH is a unit of measure describing the degree of acidity or alkalinity of a solution. The opening is Power of Hydrogen. The concept of pH was first defined by the Danish chemist Søren Peder Lauritz Sørensen at the Carlsberg Laboratory in 1909.", id: 0 },
    { title: 'Alkalinity', adres:'2', resim:"/img/alkchart.png",aciklama:"Alkalinity is the quantitative measure of the acid buffering capacity of water and is the degree of resistance of water to pH change. Alkalinity represent the total value of carbonates,bicarbonates and hydroxides which are dissolved in water.", id: 1 },
    { title: 'Hardness', adres:'3',resim:"/img/waterhardness.jpg" ,aciklama:"Water hardness is the amount of dissolved calcium and magnesium in the water. Hard water is high in dissolved minerals, both calcium and magnesium. When using hard water, more soap or detergent is needed to get things clean, be it your hands, hair, or your laundry.", id: 2},
    { title: 'C.O.D.',adres:'21', resim:"/img/cod.jpg", aciklama:" Chemical oxygen demand (COD) is the amount of oxygen needed to chemically oxidize oxidizable substances in water.",id: 3 },
    { title: 'B.O.D.',adres:'20', resim:"/img/bodd.jpg" ,aciklama:"The biochemical oxygen demand (BOD) is the amount of dissolved oxygen used by microorganisms to oxidize organic matter in the water sample (at the defined time period at 20 ° C and under defined conditions).",id: 4 },  
    { title: 'Stock & Dilution ',adres:'19',resim:"/img/dilution.jpg" , aciklama:"In this module you can calculate the data required to prepare stock solution and calculate the data needed to dilute a solution.  ", id: 5 },  
   
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
