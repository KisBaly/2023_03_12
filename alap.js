var div, sor, oszlop;
var leptet = 0;
var matrix=[];
var jelo = 0;
var jelx = 0;
var kulo = 0;
var kulx = 0;
var nyert = false;
var nyer1 = 0;//kor
var nyer2 = 0;//x

var iranyvektorok = [ [-1,0],[1,0],//fuggoleges
                      [0,1],[0,-1],//vizszintes
                      [-1,1],[1,-1],//foatlo    
                      [-1,-1],[1,1] //mellekatlo    


                
                    ];
function jatekosVane(aktsor,aktoszlop,jatekos)
{
    return matrix[aktsor][aktoszlop] == jatekos;
}
function matrixSzelet(aktsor,aktoszlop)
{
    return aktsor<0 || aktsor >= sor || aktoszlop < 0|| aktoszlop >= oszlop;
}                    
function megszamol(irany,jatekos,startx,starty)
        {
                let db =1;
                while(!matrixSzelet(startx+iranyvektorok[irany][0]*db,starty+iranyvektorok[irany][1]*db) && 
                jatekosVane(startx+iranyvektorok[irany][0]*db,starty+iranyvektorok[irany][1]*db,jatekos))
                {
                    db++;
                }
                return db-1;
        }
function uresMatrix()

{
    for(var i = 0; i < sor; i++)
    {
        sorx=[];
        for(var j = 0; j < oszlop; j++)
        {
            sorx.push(0);
        }
        matrix.push(sorx);
    }
    console.log(matrix);
}


function kattint(td){
    if(td.innerHTML == "" && nyert == false)
    {
        let jatekos="X";
        if(leptet % 2 ==0){
           
                td.innerHTML = "X";
                matrix[td.dataset.sor][td.dataset.oszlop]="X";
                let x = document.getElementById("x");
                let y = document.getElementById("y");
                x.innerHTML="-";
                y.innerHTML="+";
            }
        
        else{
            jatekos="O";
                td.innerHTML = "O";
                matrix[td.dataset.sor][td.dataset.oszlop]="O";
                let x = document.getElementById("x");
                let y = document.getElementById("y");
                x.innerHTML="+";
                y.innerHTML="-";
        }
        for(let i = 0; i < iranyvektorok.length; i++)
        {
            console.log(megszamol(i,jatekos,Number(td.dataset.sor),Number(td.dataset.oszlop)))
        }
        leptet++;
        //innentol van a nyert
        if(sor > 5 && oszlop >5)
        {
            for(let i = 0; i<8;i+=2)
            {
                if(megszamol(i,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+
                megszamol(i+1,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+1>=5)
                {
                    console.log("Nyert:"+jatekos);
                    if(jatekos == "O")
                    {
                       
                        var ponto = document.getElementById("allaso");
                        var nyertx = document.getElementById("nyertx");
                        var nyerty = document.getElementById("nyerty");
                        var pontx = document.getElementById("allas");
                        nyerty.innerHTML="Nyert"
                        nyerty.style.color="green";
                        nyertx.innerHTML="Vesztett"
                        nyertx.style.color="red";
                        jelo++;
                        ponto.innerHTML= jelo;
                        nyert = true;
                        nyer1 = 1;
                        nyer2 = 0;

                        matrix = [];
                        Streak();

                    }
                    else if(jatekos == "X")
                    {
                        var pontx = document.getElementById("allas");
                        var nyertx = document.getElementById("nyertx");
                        var nyerty = document.getElementById("nyerty");
                        var pontx = document.getElementById("allas");
                        nyertx.innerHTML="Nyert"
                        nyertx.style.color="green";
                        nyerty.innerHTML="Vesztett"
                        nyerty.style.color="red";
                        jelx++;
                        pontx.innerHTML= jelx;
                        nyert = true;
                        nyer1 = 0;
                        nyer2 = 1;

                      matrix = [];
                        Streak();
                    }
                }
                
            }
        }
        else if(sor == 5 && oszlop == 5)
        {
            for(let i = 0; i<8;i+=2)
            {
                if(megszamol(i,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+
                megszamol(i+1,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+1>=5)
                {
                    console.log("Nyert:"+jatekos);
                    if(jatekos == "O")
                    {
                        var ponto = document.getElementById("allaso");
                        var nyertx = document.getElementById("nyertx");
                        var nyerty = document.getElementById("nyerty");
                        var pontx = document.getElementById("allas");
                        nyerty.innerHTML="Nyert"
                        nyerty.style.color="green";
                        nyertx.innerHTML="Vesztett"
                        nyertx.style.color="red";
                        var ponto = document.getElementById("allaso");
                        jelo++;
                        ponto.innerHTML= jelo;
                        nyert = true;
                        nyer1 = 1;
                        nyer2 = 0;
                        matrix = [];
                        Streak();

                    }
                    else if(jatekos == "X")
                    {
                        var ponto = document.getElementById("allaso");
                        var nyertx = document.getElementById("nyertx");
                        var nyerty = document.getElementById("nyerty");
                        var pontx = document.getElementById("allas");
                        nyertx.innerHTML="Nyert"
                        nyertx.style.color="green";
                        nyerty.innerHTML="Vesztett"
                        nyerty.style.color="red";
                        jelx++;
                        pontx.innerHTML= jelx;
                        nyert = true;
                        nyer1 = 0;
                        nyer2 = 1;
                      matrix = [];
                        Streak();
                    }
                }
                
            }
        }
        else if(sor == 4 && oszlop == 4)
        {
            for(let i = 0; i<8;i+=2)
            {
                if(megszamol(i,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+
                megszamol(i+1,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+1>=4)
                {
                    console.log("Nyert:"+jatekos);
                    if(jatekos == "O")
                    {
                        
                        var ponto = document.getElementById("allaso");
                        var nyertx = document.getElementById("nyertx");
                        var nyerty = document.getElementById("nyerty");
                        var pontx = document.getElementById("allas");
                        nyerty.innerHTML="Nyert"
                        nyerty.style.color="green";
                        nyertx.innerHTML="Vesztett"
                        nyertx.style.color="red";
                        jelo++;
                        ponto.innerHTML= jelo;
                        nyert = true;
                        nyer1 = 1;
                        nyer2 = 0;

                        matrix = [];
                        Streak();
                    }
                    else if(jatekos == "X")
                    {
                        
                        var pontx = document.getElementById("allaso");
                        var nyertx = document.getElementById("nyertx");
                        var nyerty = document.getElementById("nyerty");
                        var pontx = document.getElementById("allas");
                        nyertx.innerHTML="Nyert"
                        nyertx.style.color="green";
                        nyerty.innerHTML="Vesztett"
                        nyerty.style.color="red";
                        jelx++;
                        pontx.innerHTML= jelx;
                        nyert = true;
                        nyer1 = 0;
                        nyer2 = 1;
                      matrix = [];
                        Streak();
                    }

                }
                
            }
        }
        else if(sor < 4 && oszlop <4)
        {
            var j = 0;
            for(let i = 0; i<8;i+=2)
            {
                if(megszamol(i,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+
                megszamol(i+1,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+1>=3)
                {
                    console.log("Nyert:"+jatekos);
                    if(jatekos == "O")
                    {
                        var ponto = document.getElementById("allaso");
                        var nyertx = document.getElementById("nyertx");
                        var nyerty = document.getElementById("nyerty");
                        var pontx = document.getElementById("allas");
                        nyerty.innerHTML="Nyert"
                        nyerty.style.color="green";
                        nyertx.innerHTML="Vesztett"
                        nyertx.style.color="red";
                        jelo++;
                        ponto.innerHTML= jelo;
                        nyert = true;
                        nyer1 = 1;
                        nyer2 = 0;
 
                      matrix = [];
                        Streak();
                    }
                    else if(jatekos == "X")
                    {
                        
                        var pontx = document.getElementById("allaso");
                        var nyertx = document.getElementById("nyertx");
                        var nyerty = document.getElementById("nyerty");
                        var pontx = document.getElementById("allas");
                        nyertx.innerHTML="Nyert"
                        nyertx.style.color="green";
                        nyerty.innerHTML="Vesztett"
                        nyerty.style.color="red";
                        jelx++;
                        pontx.innerHTML= jelx;
                        nyert = true;
                        nyer1 = 0;
                        nyer2 = 1;

                        matrix = [];
                        Streak();
                    }
                   

                }
                
            }
           
        }
        
                    
                }
        else if(td.innerHTML == "" && nyert == false)
        {
            if(megszamol(i,jatekos,
                Number(td.dataset.sor),Number(td.dataset.oszlop))+
            megszamol(i+1,jatekos,
                Number(td.dataset.sor),Number(td.dataset.oszlop))+1!=oszlop*sor)
                {
                    alert("n");
                }
        }
                
            }


       


        //innentol van a dontetlen
        

function TablaGeneralas(){
    var egyik = document.getElementById("sor").value;
    var masik = document.getElementById("oszlop").value;
    if(egyik >= 3 && masik >= 3 && egyik <= 10 && masik <= 10 )
    {
    sor = document.getElementById("sor").value;
    oszlop = document.getElementById("oszlop").value;
    if(sor != oszlop)
    {
        sor = oszlop;
    }
    var nyertx = document.getElementById("nyertx");
    var nyerty = document.getElementById("nyerty");
    div = document.getElementById("eredmeny");
    div.innerHTML = "";
    nyert = false;
    leptet = 0;
    nyer1 = 0;
    nyer2 = 0;
    matrix = [];
    nyertx.innerHTML="-"
    nyertx.style.color="white";
    nyerty.innerHTML="-"
    nyerty.style.color="white";
    x.innerHTML="+";
    y.innerHTML="-";
    console.log(sor, oszlop);
    uresMatrix();
    var table = document.createElement("table");
    for (let i = 0; i < sor; i++){
        let tr = document.createElement("tr");
        for (let j = 0; j < oszlop; j++) {
            let td = document.createElement("td");
            td.setAttribute("onclick", "kattint(this)");
            td.dataset.sor=i;
            td.dataset.oszlop=j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    div.appendChild(table);
}
}


function Streak()
{
    var streakx = document.getElementById("elonyx");
    var streako = document.getElementById("elonyo");
    if(jelx >= jelo)
    {
        kulx = jelx - jelo;
        streakx.innerHTML= kulx;
    }
    else if(jelo >= jelx)
    {
        kulo = jelo - jelx;
        
        streako.innerHTML= kulo;
    }
}


function Nevmentes()
{
    
    var xnev = document.getElementById("nevx").value;
    var ynev = document.getElementById("nevy").value;
    var idexnev = document.getElementById("idekellx");
    var ideynev = document.getElementById("idekelly");
    idexnev.innerHTML= xnev;
    ideynev.innerHTML= ynev;
}
function megvaneaminvmax()
{
    var mini1 = document.getElementById("sor").value;
    var mini2 = document.getElementById("oszlop").value;
    var maxi1 = document.getElementById("sor").value;
    var maxi2 = document.getElementById("oszlop").value;
    if(mini1 < 3 && mini2 < 3)
    {
        alert("A minimum érték 3x3!")
    }
    else if(maxi1 < 3 && maxi2 < 3)
    {
        alert("A maximum érték 10x10!")
    }
    else if(mini1 != mini2 && mini1)
    {
        mini1 = mini2
    }
    else if(maxi1 != maxi2)
    {
        maxi1 = maxi2
    }
}

function kovetkezik()
{
    var xkov = document.getElementById("kovx");
    var xkoy = document.getElementById("kovy");
    var plus = "+";
    var minus = "-";
    var kov = 0;
    if(kov == 0)
    {
        xkov.innerHTML= plus;
        xkoy.innerHTML = minus;
        kov++;
    }
    else if(kov == 1)
    {
        xkoy.innerHTML= plus;
        xkov.innerHTML = minus;
        kov--;
    }
}

function csalokodok() {
    const input = document.getElementById("csalokod");
    const value = input.value;
    console.log(value);
  
    if (value === "Zsófi") {
      const source = document.getElementById("myVideo");
      const parent = source.parentNode;
      parent.removeChild(source);
  
      const video = document.createElement("video");
      video.id = "myVideo";
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
  
      const sourceTag = document.createElement("source");
      sourceTag.src = "sailing-ships-pink-ocean-sunset-moewalls.com.mp4";
      sourceTag.type = "video/mp4";
  
      video.appendChild(sourceTag);
      parent.appendChild(video);
  
      console.log(video);
  
      const tablejeim = document.getElementsByTagName("table");
      for (let k = 0; k < tablejeim.length; k++) {
        
      }
  
      const thtaggjeim = document.getElementsByTagName("th");
      for (let i = 0; i < thtaggjeim.length; i++) {
        
        thtaggjeim[i].style.color = "black";
      }
  
      const tdjeim = document.getElementsByTagName("td");
      for (let j = 0; j < tdjeim.length; j++) {
        tdjeim[j].style.color = "black";
      }
  
      const trjeim = document.getElementsByTagName("tr");
      for (let g = 0; g < trjeim.length; g++) {
        trjeim[g].style.color = "black";
      }
      var h1 = document.getElementById("h1");
        h1.style.color="rgba(139, 71, 108, 0.8)";
        var table = document.getElementById("table");
        table.style.border="black";
        const gomb1 = document.getElementsByTagName("input");
        for (let q = 0; q < gomb1.length; q++) {
          gomb1[q].style.backgroundColor="white";
          gomb1[q].style.backgroundColor="rgba(139, 71, 108, 0.8)";
        }
        var szov = document.getElementById("gombok");
        szov.style.color=rgba(139, 71, 108, 0.8);
        
        var exa = document.getElementById("exampleModalToggleLabel");
        exa.style.color=rgba(139, 71, 108, 0.8);
        var szin = document.getElementById("eredmeny");
        szin.style.color="rgba(233, 19, 19, 0.8)";
    }

      
      
      else if (value === "Japan") {
        const source = document.getElementById("myVideo");
        const parent = source.parentNode;
        parent.removeChild(source);
    
        const video = document.createElement("video");
        video.id = "myVideo";
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
    
        const sourceTag = document.createElement("source");
        sourceTag.src = "rainy-night-on-japanese-street-moewalls.com.mp4";
        sourceTag.type = "video/mp4";
    
        video.appendChild(sourceTag);
        parent.appendChild(video);
    
        console.log(video);
    
        const tablejeim = document.getElementsByTagName("table");
        for (let k = 0; k < tablejeim.length; k++) {
          
        }
    
        const thtaggjeim = document.getElementsByTagName("th");
        for (let i = 0; i < thtaggjeim.length; i++) {
          
          thtaggjeim[i].style.color = "white";
        }
    
        const tdjeim = document.getElementsByTagName("td");
        for (let j = 0; j < tdjeim.length; j++) {
          tdjeim[j].style.color = "white";
        }
    
        const trjeim = document.getElementsByTagName("tr");
        for (let g = 0; g < trjeim.length; g++) {
          trjeim[g].style.color = "white";
        }
        var h1 = document.getElementById("h1");
        h1.style.color="yellow";
        var table = document.getElementById("table");
        table.style.border="1px solid white";
        const gomb1 = document.getElementsByTagName("input");
        for (let q = 0; q < gomb1.length; q++) {
          gomb1[q].style.backgroundColor="white";
          gomb1[q].style.color="black";
        }
        var szov = document.getElementById("gombok");
        
        szov.style.color="white";
        
        var exa = document.getElementById("exampleModalToggleLabel");
        exa.style.color="white";
        
      }


    }







