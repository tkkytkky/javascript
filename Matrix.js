var A=new Array(), s="",k=1;
for(var i=0;i<3;i++){
	A[i]=new Array();
	for(var j=0;j<3;j++){
		if(i>=j){
			A[i][j]=k;
			k++;
		}
		else{
			A[i][j]=0;
		}
		s+=A[i][j]+" ";
}
s+="\n";
}
WScript.Echo(s);
