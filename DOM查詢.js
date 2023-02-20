
//查找bj節點
let btn01 = document.getElementById("btn01");
btn01.onclick = function(){
    let bj = document.getElementById("bj");
    alert(bj.innerHTML);
};

//查找所有li節點
let btn02 = document.getElementById("btn02");
btn02.onclick = function(){
    //getElementsByTagName會返回一個類數組對象,所有查詢到的元素都會封裝到對象中
    let li = document.getElementsByTagName("li");
    //遍歷li
    for(let i = 0; i < li.length ; i++){
        alert(li[i].innerHTML)
    }
};

//查找name = gender的所有節點
let btn03 = document.getElementById("btn03");
btn03.onclick = function(){
    let gender = document.getElementsByName("gender");
    for(let i = 0 ; i < gender.length ; i++){
        //inertHTML用來獲取裡面內容,因此對於自結束標籤沒有意義
        //因此若想獲取自結束標籤的值  使用: 元素.屬性值
        // class不可使用這種方式 ex.元素.class   >>> undefined
        //因為class為JS中保留字
        //因此要使用className代替
        alert(gender[i].value)
    }
};

//查找city下的所有li節點

let btn04 = document.getElementById("btn04");
btn04.onclick = function(){
    let city = document.getElementById("city");
    let lis = city.getElementsByTagName("li");
    for(let i = 0 ; i < lis.length ; i++){
        alert(lis[i].innerHTML);
    }
};

//查找city下的所有子節點(網頁所有部分)

let btn05 = document.getElementById("btn05");
btn05.onclick = function(){
    let city = document.getElementById("city");
    let cns = city.childNodes;
    alert(cns.length);  //因為節點Nodes為網頁所有部分 所以空白也會算進子節點中
    let cns2 = city.children;  //children 獲取所有子元素(標籤)
    alert(cns2.length);
}

//返回ID為phone的第一個子節點

let btn06 = document.getElementById("btn06");
btn06.onclick = function(){
    let phone = document.getElementById("phone");
    let pfn = phone.firstChild;  //firstChild可以獲取當前第一個子節點
    alert(pfn);
    let pfn2 = phone.firstElementChild; //firstElementChild 獲取當前第一個子元素
    alert(pfn2);
}

//思路: 一直寫同樣的onclick事件太過麻煩 因此寫一個函數當作模板

function myClick(idStr,fun){
    let btn = document.getElementById(idStr);
    btn.onclick = fun;
};

//返回bj的父節點
myClick("btn07",function(){
    let bj = document.getElementById("bj");
    let bjf = bj.parentNode;
    alert(bjf.innerText);
});


//返回ANDROID的前一個兄弟節點
myClick("btn08",function(){
    let Android = document.getElementById("Android");
    let Abr = Android.previousSibling;
    alert(Abr.innerText); //返回空白
})

myClick("btn09" , function(){
    let username = document.getElementById("username");
    let uv = username.value;
    alert(uv);
})



myClick("btn10" , function(){
    let username = document.getElementById("username");
    username.value = "看我改";
})

myClick("btn11" , function(){
    let bj = document.getElementById("bj");
    alert(bj.innerHTML);
})