// checkAllButton 全選
let checkedAllBtn = document.getElementById("checkedAllBtn");

let items = document.getElementsByName("items");

checkedAllBtn.onclick = function(){
    //先獲取底下所有checkbox
    
    //遍歷類數組items
    for(let i = 0 ; i < items.length ; i++){
        items[i].checked = true;  //使用checkbox屬性checked   true=被選 false=沒選
    };
};

//checkedNoBtn 全不選
let checkedNoBtn = document.getElementById("checkedNoBtn");

checkedNoBtn.onclick = function(){
    
    for(let i = 0 ; i < items.length ; i++){
        items[i].checked = false;  //使用checkbox屬性checked   true=被選 false=沒選
    };
}

// checkedRevBtn 反選
let checkedRevBtn  = document.getElementById("checkedRevBtn");

checkedRevBtn.onclick = function(){
    
    for(let i = 0 ; i < items.length ; i++){
       items[i].checked = !items[i].checked;
    };
}

//sendBtn提交
let sendBtn  = document.getElementById("sendBtn");

sendBtn.onclick = function(){
    
    for(let i = 0 ; i < items.length ; i++){
       if(items[i].checked){
          alert(items[i].value)
       }
    };
}

//checkAllBox

let checkedAllBox = document.getElementById("checkedAllBox");
checkedAllBox.onclick = function(){
    for(let i = 0 ; i < items.length ; i++){
        // if(checkedAllBox.checked){
        //    items[i].checked = true;
        // }else{
        //     items[i].checked = false;
        // }
        items[i].checked = this.checked;  // 在綁定事件中響應函數給誰綁定this就指誰
           
        }
};


//items
for(let i = 0 ; i < items.length; i++){
    items[i].onclick = function(){
        checkedAllBox.checked = true;
        for(let j = 0 ; j < items.length ; j++){
            if(!items[j].checked){
                checkedAllBox.checked = false;

                break; //一旦條件判斷成功即不用執行
            }
        }
    }
}
