$(document).ready(function(){
	
	$("#postbtn").click(function(){
		var pt=$("#pt").val();
		pt=$.trim(pt);
		if(pt==""){
			$("#err").html("Please write something");
			setTimeout(function(){ $("#err").html(""); },3000);
		}else{
			var datastring="post="+ pt;
			$.ajax({
				url: 'ajaxprocess.php',
				type: 'post',
				data: datastring,
				processData: false,
				beforeSend: function(){
					//alert("request is ready to go");
				},
				success: function( result ){
					//alert(result);
					//$('#err').html( res  );
					$("#allposts").prepend(result);						
				},
				error: function(){
					alert( "error occured" );
				},
				complete: function(){
					$("#pt").val("");
					setTimeout(function(){ $("#err").html(""); },4000);
				}
			});
		}
	});
	
	
	
	
	
	
	$("#st").keyup(function(){
		var st=$("#st").val();
		st=$.trim(st);
		if(st==""){
			$("#outputbox").hide(500);
		}else{
			$("#outputbox").show(500);
			var datastring="searchterm="+ st;
			$.ajax({
				url: 'ajaxprocess.php',
				type: 'post',
				data: datastring,
				beforeSend: function(){
					//alert("request is ready to go");
				},
				success: function( res ){
					$("#outputbox").html(res);
					//alert(res);
				},
				error: function(){
					alert( "error occured" );
				},
				complete: function(){
					//
				}
			});
		}
	});
	$("#st").focusout(function(){
		$(".results").hide(500);
	});
	
	$('body').on('click','.postdelbtn',function(){
		var sel=$(this);
		var pid=sel.val();
		alert(pid);
		var datastring="piddelete="+ pid;
		$.ajax({
			url: 'ajaxprocess.php',
			type: 'post',
			data: datastring,
			beforeSend: function(){
				//alert("request is ready to go");
			},
			success: function( res ){
				sel.closest("div.col-md-12").html(res);
			},
			error: function(){
				alert( "error occured" );
			},
			complete: function(){
				//
			}
		});
	});
	$('body').on('click','.likebtn',function(){
		var sel=$(this);
		var pid=sel.val();
		var datastring="pidlike="+ pid;
		$.ajax({
			url: 'ajaxprocess.php',
			type: 'post',
			data: datastring,
			beforeSend: function(){
				//alert("request is ready to go");
			},
			success: function( res ){
				alert(res);
				//sel.closest("div.col-md-12").html(res);
			},
			error: function(){
				alert( "error occured" );
			},
			complete: function(){
				//
			}
		});
	});
});