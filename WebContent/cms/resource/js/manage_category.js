var page = 1;
var url = '/Art/cms/jsp/categoryList?page=' + page;

$(document).ready(function(){
	$('#content').load(url);	
});

function addCategory(){
	 
    var category = prompt("请输入要添加的类别名称","");//将输入的内容赋给变量 name ， 
    //这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值
    
    var categoryReg = !!category.match(/[\u4e00-\u9fa5]/);
    if(categoryReg == false){
       alert("格式不正确，请输入中文字符");
       return false;
    }   
    if(category)//如果返回的有内容 
    {   	
    	$.post(
    			"/Art/cms/categpry.json",
    			{
    				category:category
    			},
    			function(data){
    				if(data.errno == 0)	{
    					$('#content').load(url);
    				}	
    				else if(data.errno == 1){
    					alert(data.data);
    				}else if(data.errno == 2){
    					alert(data.data);
    					windows.open(data.data);
    				}

    			});
 
     }
}

function nextPage(){
	page++;
	if(page > document.getElementById("pageNum").innerHTML){
		alert('已经是最后一页了');
	}else{
		url = '/Art/cms/jsp/categoryList?page=' + page;
		$('#content').load(url);
		}
}


function frontPage(){
	page--;
	if(page > document.getElementById("pageNum").innerHTML){
		alert('已经是最后一页了');
	}else if(page <= 0){
		alert('已经是第一页了');
	}else{
		url = '/Art/cms/jsp/categoryList?page=' + page;
		$('#content').load(url);
		}
	
}
