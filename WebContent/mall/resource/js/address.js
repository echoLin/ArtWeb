function postAddress(){
	$(".p").hide();
	var receiver_name = $("#receiver_name").val();
	var receiver_telephone = $("#receiver_telephone").val();
	var addressPCD = $("#txt_area").val();
	var strs = addressPCD.split(' ');
	var province = strs[0];
	var city = strs[1];
	var district = strs[2];
	var is_delete = 0;
	var detailDescription = $("#detailDescription").val();
	var postalcode = $("#postalcode").val();
	
	function check(receiver_name,receiver_telephone,addressPCD,detailDescription,postalcode){
		if(receiver_name==''){
			$("#validateReceiverName").show();
			return false;
		}
		else if(receiver_telephone==''){
			$("#validateReceiver_telephone").show();
			return false;
		}
//		else if(addressPCD==''){
//			$("#validateAddressPCD").show();
//			return false;
//		}
		else if(postalcode==''){
			$("#validatePostalcode").show();
			return false;
		}
		else
			return true;
	}
	
	if(check(receiver_name,receiver_telephone,addressPCD,detailDescription,postalcode))
		{
	
	$.post(
			"/Art/mall/Address.json",
			{ 
				receiver_name:receiver_name,
				receiver_telephone:receiver_telephone,
				province:province,
				city:city,
				district:district,
				is_delete:is_delete,
				detailDescription:detailDescription,
				postalcode:postalcode
			},
			function(data){
				if(data.errno == 0)	{
					var url = '/Art/mall/jsp/user/address';
				    window.location.href = url;
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

function deleteAddress(id){
	layer.confirm('您确定要删除吗？',  {skin: 'layui-layer-molv',offset: '30%'}, function(index){
		layer.close(index);
		layer.msg('删除成功！', {shift: 6, time: 1500},function(){
			$.post(
					"/Art/mall/deleteAddress.json",
					{
						id:id
					},
					function(data){
						
						if(data.errno == 0)	{
							var url = '/Art/mall/jsp/user/address';
						    window.location.href = url;
						}	
						else if(data.errno == 1){
							alert(data.data);
						}else if(data.errno == 2){
							alert(data.data);
							windows.open(data.data);
						}

						
					});
			//window.location='/Art/mall/jsp/user/address';
		});
	});
}

function editAddress(id){
	var tag = 1;
	var url = '/Art/mall/jsp/user/addressInfo?tag='+ tag + "&id="+ id;
	window.location.href = url;
	
}

function updateAddress(id){
	$(".p").hide();
	var receiver_name = $("#receiver_name").val();
	var receiver_telephone = $("#receiver_telephone").val();
	var addressPCD = $("#txt_area").val();
	var strs = addressPCD.split(' ');
	var province = strs[0];
	var city = strs[1];
	var district = strs[2];
	var is_delete = 0;
	var detailDescription = $("#detailDescription").val();
	var postalcode = $("#postalcode").val();
	
	function check(receiver_name,receiver_telephone,addressPCD,detailDescription,postalcode){
		if(receiver_name==''){
			$("#validateReceiverName").show();
			return false;
		}
		if(receiver_telephone==''){
			$("#validateReceiver_telephone").show();
			return false;
		}
		if(addressPCD=='0'){
			$("#validateAddressPCD").show();
			return false;
		}
		if(postalcode==''){
			$("#validatePostalcode").show();
			return false;
		}
		return true;
	}
	
	if(check(receiver_name,receiver_telephone,addressPCD,detailDescription,postalcode))
		{
	
	$.post(
			"/Art/mall/Address.json",
			{ 
				id:id,
				receiver_name:receiver_name,
				receiver_telephone:receiver_telephone,
				province:province,
				city:city,
				district:district,
				is_delete:is_delete,
				detailDescription:detailDescription,
				postalcode:postalcode
			},
			function(data){
				if(data.errno == 0)	{
					var url = '/Art/mall/jsp/user/address';
				    window.location.href = url;
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

function modifyStatus(id){
	var is_default;
	if($("#modifyStatus").attr("checked")){
		 is_default = 1;
    }
	else{
		 is_default = 0;
	}

		$.post(
				"/Art/mall/modifyAddressStatus.json",
				{ 
					id:id,
					is_default:is_default
				},
				function(data){
					if(data.errno == 0)	{
						var url = '/Art/mall/jsp/user/address';
					    window.location.href = url;
					}	
					else if(data.errno == 1){
						alert(data.data);
					}else if(data.errno == 2){
						alert(data.data);
						windows.open(data.data);
					}

				});
		  
		
}