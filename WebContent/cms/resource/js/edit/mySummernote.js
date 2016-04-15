$(document).ready(function() {
		var note = init();
	    var type = 0;//1图+文 2图+链接
	    var charge = 0;//1收费 2不收费
	    var block = 0;//block
	    if($('input#article_id').val()!=null && $('input#article_id').val() !=0){
	    	$.ajax({
				async:true,//同步异步的关键参数
				url:"/Art/cmsGetArticle.json",
				type:"POST",
				data:{
					'id':$('input#article_id').val()
				},
				success:function(data){
					if(checkData(data)){
						data = data.data;
						$('input#article_id').val(data.id);
						$('input#update').val(data.up_time);
						$('input#downdate').val(data.down_time);
						$('input#title').val(data.title);
						$('input#summary').val(data.summary);
						$('input#article_url').val(data.head_url);
						//$('select#type').options[1].selected= true;
						if(data.type == 1){
							$('select#type').find("option[value=1]").attr("selected",true);
						}else{
							$('select#type').find("option[value=2]").attr("selected",true);
						}
						type = $('select#type option:selected').val();
				    	if(type == 2){
				    		document.getElementById('ref_url').style.display="";
				    		document.getElementById('editPanel').style.display="none";
				    		$('input#ref_url').val(data.content);
				    	}else{
				    		document.getElementById('ref_url').style.display="none";
				    		document.getElementById('editPanel').style.display="";
				    		setCode(note, data.content);
				    	}
				    	if(data.charge == 0){
				    		$('select#charge').find("option[value=2]").attr("selected",true);
				    	}else{
				    		$('select#charge').find("option[value=1]").attr("selected",true);
				    	}
				    	charge = $('select#charge option:selected').val();
				    	$('select#block').find('options[value='+data.block.id+']').attr("selected",true);
				    	block = $('select#block option:selected').val();
					}
				}
	    	});
	    }
	    
	    $('#input-id').fileinput({
	    	'allowedFileExtensions':['jpg','png','gif'],
	    	'showPreview':true,
	    	'showCancel':false,
	    	'showUpload':true
	    });
	    
	    $('select#type').on('change', function(){
	    	type = $('select#type option:selected').val();
	    	if(type == 2){
	    		document.getElementById('ref_url').style.display="";
	    		document.getElementById('editPanel').style.display="none";
	    	}else{
	    		document.getElementById('ref_url').style.display="none";
	    		document.getElementById('editPanel').style.display="";
	    	}
	    });
	    $('select#charge').on('change', function(){
	    	charge = $('select#charge option:selected').val();
	    });
	    $('select#block').on('change', function(){
	    	block = $('select#block option:selected').val();
	    });
	    
		$('button#draftBtn').on('click',function(){
			var status = 1;
			var content = null;
			if(type == 1)
				content = getCode(note);
			else
				content = $('#ref_url').val();
			var data = check(type,charge,block,status,content);
			if(data['update']==null){
				return false;
			}
			save(data);
			//destroySummernote(note);
		});
		
		$('button#previewBtn').on('click',function(){
			var status = 1;
			var content = null;
			if(type == 1)
				content = getCode(note);
			else
				content = $('#ref_url').val();
			var data = check(type,charge,block,status,content);
			if(data['update']==null){
				return false;
			}
			save(data);
			var id = $('input#article_id').val();
			var url = '/Art/cms/jsp/previewArticle?id='+id;
			window.open(url);
			//destroySummernote(note);
		});
		
		$('button#submitBtn').on('click',function(){
			var status = 2;
			var content = null;
			if(type == 1)
				content = getCode(note);
			else
				content = $('#ref_url').val();
			var data = check(type,charge,block,status,content);
			if(data['update']==null){
				return false;
			}
			save(data);
			//destroySummernote(note);
		});
		
		$('button#notSaveBtn').on('click', function(){
			location.reload();
		});


	});

	function init(){
		return $('#summernote').summernote({
	        height: 400,
	        lang:'zh-CN',
	        focus:true,
	        dialogsInBody:true
	      });
	}

	function getCode(note){
		var text = note.summernote('code');
		return text;
	}
	
	function setCode(note, html){
//		note.code(html);
		note.summernote('code', html);
		return true;
	}
	
	function check(type,charge,block,status,content){
		var arr = new Array();
		arr['block'] = block;
		arr['type'] = type;
		arr['charge'] = charge;
		arr['status'] = status;
		arr['id'] = $('input#article_id').val() == 0 ? null :$('input#article_id').val();
		arr['update'] = new Date($('input#update').val());
		arr['downdate'] = new Date($('input#downdate').val());
		arr['title'] = $('input#title').val();
		arr['summary'] = $('input#summary').val();
		arr['head_url'] = $('span#head_url').text();
		arr['content'] = content;
		if(arr['head_url'] == null){
			arr['head_url'] = $('input#article_url').val();
			if(arr['head_url'] == null || arr['head_url'] == ''){
				alert('资讯头像不能为空');
			}
		}
		if(arr['block']==0){
			alert('模块不能为空');
			return false;
		}
		if(arr['type']==0){
			alert('资讯类型不能为空');
			return false;
		}
		if(arr['charge']==0){
			alert('收费类型不能为空');
			return false;
		}
		if(update==''){
			alert('上线日期不能为空');
			return false;
		}
		if(downdate==''){
			alert('下线日期不能为空');
			return false;
		}
		if(arr['update'] > arr['downdate']){
			alert('上线时间不能大于下线时间');
			return false;
		}
		if(arr['title']==''){
			alert("标题不能为空");
			return false;
		}
		if(arr['content'] == ''){
			alert("内容不能为空");
			return false;
		}
		return arr;
	}	
	
	function save(data){
		$.ajax({
			async:false,//同步异步的关键参数
			url:"/Art/cmsSaveArticle.json",
			type:"POST",
			data:{
				'id':data['id'],
				'title':data['title'],
				'head_url':data['head_url'],
				'summary':data['summary'],
				'content':data['content'],
				'down_time':data['downdate'],
				'up_time':data['update'],
				'charge':data['charge'],
				'status':data['status'],
				'type':data['type'],
				'block_id':data['block']
			},
			success:function(data){
				if(checkData(data)){
					alert("操作成功");
					$('input#article_id').val(data.Data);
				}
			}
		});
	}

	function checkData(data){
		if(data.errno == 2){
			window.location.href = data.data;
		}else if(data.errno == 1){
			alert(data.data);
			return false;
		}else{
			return true;
		}
	}