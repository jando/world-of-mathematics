//	HYPE.documents["Hilbert2"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Hilbert2_Resources";
	var documentName = "Hilbert2";
	var documentLoaderFilename = "hilbert2_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_108 == "undefined") {
		if(typeof window.HYPE_108_DocumentsToLoad == "undefined") {
			window.HYPE_108_DocumentsToLoad = new Array();
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=108';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// guard against loading multiple times
	if(HYPE.documents[documentName] != null) {
		return;
	}
	
	var hypeDoc = new HYPE_108();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aL:"i",A:"c",aZ:"i",Y:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{initialValues:{"43":{o:"content-box",h:"floor.png",x:"visible",a:0,q:"100% 100%",b:17,j:"absolute",r:"inline",aA:{type:1,sceneOid:"7",transition:1},c:864,z:"5",d:200,k:"div",aP:"pointer"},"95":{o:"content-box",h:"even1.png",x:"visible",a:187,q:"100% 100%",b:67,j:"absolute",r:"inline",c:696,k:"div",z:"8",d:106},"44":{o:"content-box",h:"bus.png",x:"visible",a:515,q:"100% 100%",b:224,j:"absolute",r:"inline",aA:{type:1,sceneOid:"7",transition:1},c:816,z:"7",d:176,k:"div",aP:"pointer"},"97":{o:"content-box",h:"button.png",x:"visible",a:16,q:"100% 100%",b:233,j:"absolute",r:"inline",aA:{type:1,sceneOid:"7",transition:1},c:100,z:"10",d:35,k:"div",aP:"pointer"},"96":{o:"content-box",h:"odd1.png",x:"visible",a:107,q:"100% 100%",b:67,j:"absolute",r:"inline",c:696,k:"div",z:"9",d:106}},sceneIndex:0,timelines:{"6_pressed":{framesPerSecond:30,animations:[],identifier:"6_pressed",name:"6_pressed",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},perspective:"600px",oid:"1",backgroundColor:"#FFFFFF",name:"Intro"},{name:"Animation",onSceneLoadAction:{type:0},initialValues:{"86":{o:"content-box",h:"person2.png",x:"visible",a:752,q:"100% 100%",b:91,j:"absolute",r:"inline",c:43,z:"35",k:"div",d:101,e:"0.000000"},"78":{o:"content-box",h:"person1.png",x:"visible",a:351,q:"100% 100%",b:91,j:"absolute",r:"inline",c:50,z:"27",k:"div",d:100,e:"0.000000"},"87":{o:"content-box",h:"even7.png",x:"visible",a:187,q:"100% 100%",b:69,j:"absolute",r:"inline",c:685,z:"25",k:"div",d:118,e:"0.000000"},"79":{o:"content-box",h:"person2.png",x:"visible",a:271,q:"100% 100%",b:91,j:"absolute",r:"inline",c:43,z:"28",k:"div",d:101,e:"0.000000"},"88":{o:"content-box",h:"odd7.png",x:"visible",a:107,q:"100% 100%",b:69,j:"absolute",r:"inline",c:685,z:"26",k:"div",d:118,e:"0.000000"},"89":{o:"content-box",h:"uparrow.png",x:"visible",a:114,q:"100% 100%",b:164,j:"absolute",r:"inline",c:37,z:"38",k:"div",d:92,e:"0.000000"},"50":{o:"content-box",h:"even3.png",x:"visible",a:187,q:"100% 100%",b:68,j:"absolute",r:"inline",c:693,z:"5",k:"div",d:109,e:"0.000000"},"51":{o:"content-box",h:"even4.png",x:"visible",a:187,q:"100% 100%",b:69,j:"absolute",r:"inline",c:691,z:"6",k:"div",d:112,e:"0.000000"},"60":{o:"content-box",h:"arrow7.png",x:"visible",a:455,q:"100% 100%",b:6,j:"absolute",r:"inline",c:405,z:"20",k:"div",d:31,e:"0.000000"},"52":{o:"content-box",w:"",h:"even5.png",x:"visible",a:187,q:"100% 100%",b:69,j:"absolute",r:"inline",c:689,z:"7",k:"div",d:114,e:"0.000000"},"61":{o:"content-box",h:"arrow7.png",x:"visible",a:541,q:"100% 100%",b:38,j:"absolute",r:"inline",c:405,z:"21",k:"div",d:31,e:"0.000000"},"53":{o:"content-box",h:"even6.png",x:"visible",a:187,q:"100% 100%",b:69,j:"absolute",r:"inline",c:687,z:"8",k:"div",d:116,e:"0.000000"},"62":{o:"content-box",h:"arrow5.png",x:"visible",a:610,q:"100% 100%",b:215,j:"absolute",r:"inline",c:316,z:"22",k:"div",d:32,e:"0.000000"},"45":{o:"content-box",h:"floor.png",x:"visible",a:0,q:"100% 100%",b:17,j:"absolute",r:"inline",c:864,k:"div",z:"1",d:200},"54":{o:"content-box",h:"even7.png",x:"visible",a:187,q:"100% 100%",b:69,j:"absolute",r:"inline",c:685,z:"36",k:"div",d:118,e:"0.000000"},"80":{o:"content-box",h:"person3.png",x:"visible",a:193,q:"100% 100%",b:91,j:"absolute",r:"inline",c:43,z:"29",k:"div",d:99,e:"0.000000"},"63":{o:"content-box",h:"arrow5.png",x:"visible",a:691,q:"100% 100%",b:181,j:"absolute",r:"inline",c:316,z:"23",k:"div",d:32,e:"0.000000"},"46":{o:"content-box",h:"bus.png",x:"visible",a:515,q:"100% 100%",b:225,j:"absolute",r:"inline",c:816,k:"div",z:"2",d:176},"72":{o:"content-box",h:"odd2.png",x:"visible",a:107,q:"100% 100%",b:67,j:"absolute",r:"inline",c:695,z:"10",k:"div",d:108,e:"0.000000"},"55":{o:"content-box",h:"arrow2.png",x:"visible",a:133,q:"100% 100%",b:183,j:"absolute",r:"inline",c:75,z:"15",k:"div",d:27,e:"0.000000"},"81":{o:"content-box",h:"person4.png",x:"visible",a:109,q:"100% 100%",b:91,j:"absolute",r:"inline",c:43,z:"30",k:"div",d:101,e:"0.000000"},"90":{o:"content-box",h:"uparrow.png",x:"visible",a:275,q:"100% 100%",b:164,j:"absolute",r:"inline",c:37,z:"39",k:"div",d:92,e:"0.000000"},"73":{o:"content-box",h:"odd3.png",x:"visible",a:107,q:"100% 100%",b:68,j:"absolute",r:"inline",c:693,z:"11",k:"div",d:109,e:"0.000000"},"56":{o:"content-box",h:"arrow3.png",x:"visible",a:213,q:"100% 100%",b:183,j:"absolute",r:"inline",c:156,z:"16",k:"div",d:33,e:"0.000000"},"82":{o:"content-box",h:"person3.png",x:"visible",a:435,q:"100% 100%",b:91,j:"absolute",r:"inline",c:43,z:"31",k:"div",d:99,e:"0.000000"},"65":{o:"content-box",h:"arrow5.png",x:"visible",a:768,q:"100% 100%",b:253,j:"absolute",r:"inline",c:316,z:"24",k:"div",d:32,e:"0.000000"},"48":{o:"content-box",h:"odd1.png",x:"visible",a:107,q:"100% 100%",b:67,j:"absolute",r:"inline",c:696,z:"9",k:"div",d:106,e:"1.000000"},"74":{o:"content-box",h:"odd4.png",x:"visible",a:107,q:"100% 100%",b:68,j:"absolute",r:"inline",c:691,z:"12",k:"div",d:112,e:"0.000000"},"57":{o:"content-box",h:"arrow4.png",x:"visible",a:299,q:"100% 100%",b:36,j:"absolute",r:"inline",c:231,z:"17",k:"div",d:31,e:"0.000000"},"83":{o:"content-box",h:"person2.png",x:"visible",a:593,q:"100% 100%",b:92,j:"absolute",r:"inline",c:43,z:"32",k:"div",d:101,e:"0.000000"},"47":{o:"content-box",h:"even1.png",x:"visible",a:187,q:"100% 100%",b:67,j:"absolute",r:"inline",c:696,z:"3",k:"div",d:106,e:"1.000000"},"49":{o:"content-box",h:"even2.png",x:"visible",a:187,q:"100% 100%",b:67,j:"absolute",r:"inline",c:695,z:"4",k:"div",d:108,e:"0.000000"},"75":{o:"content-box",h:"odd5.png",x:"visible",a:107,q:"100% 100%",b:68,j:"absolute",r:"inline",c:689,z:"13",k:"div",d:114,e:"0.000000"},"58":{o:"content-box",h:"arrow5.png",x:"visible",a:372,q:"100% 100%",b:183,j:"absolute",r:"inline",c:316,z:"18",k:"div",d:32,e:"0.000000"},"84":{o:"content-box",h:"person4.png",x:"visible",a:514,q:"100% 100%",b:91,j:"absolute",r:"inline",c:43,z:"33",k:"div",d:101,e:"0.000000"},"91":{o:"content-box",h:"uparrow.png",x:"visible",a:435,q:"100% 100%",b:164,j:"absolute",r:"inline",c:37,z:"40",k:"div",d:92,e:"0.000000"},"92":{o:"content-box",h:"uparrow.png",x:"visible",a:596,q:"100% 100%",b:164,j:"absolute",r:"inline",c:37,z:"41",k:"div",d:92,e:"0.000000"},"76":{o:"content-box",h:"odd6.png",x:"visible",a:107,q:"100% 100%",b:69,j:"absolute",r:"inline",c:687,z:"14",k:"div",d:116,e:"0.000000"},"93":{o:"content-box",h:"uparrow.png",x:"visible",a:756,q:"100% 100%",b:165,j:"absolute",r:"inline",c:37,z:"42",k:"div",d:92,e:"0.000000"},"85":{o:"content-box",h:"person1.png",x:"visible",a:673,q:"100% 100%",b:90,j:"absolute",r:"inline",c:50,z:"34",k:"div",d:100,e:"0.000000"},"77":{o:"content-box",h:"odd7.png",x:"visible",a:107,q:"100% 100%",b:69,j:"absolute",r:"inline",c:685,z:"37",k:"div",d:118,e:"0.000000"}},timelines:{"9_pressed":{framesPerSecond:30,animations:[],identifier:"9_pressed",name:"9_pressed",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"a",e:48,r:1,s:515,o:"46"},{f:"2",t:1.5,d:0.26666665,i:"e",e:"1.000000",r:1,s:"0.000000",o:"49"},{f:"2",t:1.5,d:0.26666665,i:"e",e:"1.000000",r:1,s:"0.000000",o:"72"},{f:"2",t:1.6333333,d:0.26666665,i:"e",e:"0.000000",r:1,s:"1.000000",o:"48"},{f:"2",t:1.6333333,d:0.26666665,i:"e",e:"0.000000",r:1,s:"1.000000",o:"47"},{f:"2",t:1.7666667,d:0.26666665,i:"e",e:"1.000000",r:1,s:"0.000000",o:"73"},{f:"2",t:1.7666667,d:0.13333333,i:"e",e:"1.000000",s:"1.000000",o:"49"},{f:"2",t:1.7666667,d:0.26666665,i:"e",e:"1.000000",r:1,s:"0.000000",o:"50"},{f:"2",t:1.7666667,d:0.13333333,i:"e",e:"1.000000",s:"1.000000",o:"72"},{f:"2",t:1.9,d:0.26666677,i:"e",e:"0.000000",s:"1.000000",o:"72"},{f:"2",t:1.9,d:0.26666677,i:"e",e:"0.000000",s:"1.000000",o:"49"},{f:"2",t:1.9,d:11,i:"e",e:"0.000000",s:"0.000000",o:"47"},{f:"2",t:2.0333333,d:0.13333344,i:"e",e:"1.000000",s:"1.000000",o:"73"},{f:"2",t:2.0333333,d:0.26666665,i:"e",e:"1.000000",r:1,s:"0.000000",o:"74"},{f:"2",t:2.0333333,d:0.13333344,i:"e",e:"1.000000",s:"1.000000",o:"50"},{f:"2",t:2.0333333,d:0.26666665,i:"e",e:"1.000000",r:1,s:"0.000000",o:"51"},{f:"2",t:2.1666667,d:0.26666665,i:"e",e:"0.000000",s:"1.000000",o:"50"},{f:"2",t:2.1666667,d:0.26666665,i:"e",e:"0.000000",s:"1.000000",o:"73"},{f:"2",t:2.1666667,d:10.466666,i:"e",e:"0.000000",s:"0.000000",o:"49"},{f:"2",t:2.3,d:0.13333344,i:"e",e:"1.000000",s:"1.000000",o:"74"},{f:"2",t:2.3,d:0.29999995,i:"e",e:"1.000000",r:1,s:"0.000000",o:"75"},{f:"2",t:2.3,d:0.29999995,i:"e",e:"1.000000",r:1,s:"0.000000",o:"52"},{f:"2",t:2.3,d:0.13333344,i:"e",e:"1.000000",s:"1.000000",o:"51"},{f:"2",t:2.4333334,d:9.8999996,i:"e",e:"0.000000",s:"0.000000",o:"50"},{f:"2",t:2.4333334,d:0.29999995,i:"e",e:"0.000000",s:"1.000000",o:"51"},{f:"2",t:2.4333334,d:0.29999995,i:"e",e:"0.000000",s:"1.000000",o:"74"},{f:"2",t:2.5999999,d:0.13333344,i:"e",e:"1.000000",s:"1.000000",o:"75"},{f:"2",t:2.5999999,d:0.13333344,i:"e",e:"1.000000",s:"1.000000",o:"52"},{f:"2",t:2.5999999,d:0.26666689,i:"e",e:"1.000000",r:1,s:"0.000000",o:"76"},{f:"2",t:2.5999999,d:0.26666689,i:"e",e:"1.000000",r:1,s:"0.000000",o:"53"},{f:"2",t:2.7333333,d:0.26666665,i:"e",e:"0.000000",s:"1.000000",o:"52"},{f:"2",t:2.7333333,d:9.333333,i:"e",e:"0.000000",s:"0.000000",o:"51"},{f:"2",t:2.7333333,d:0.26666665,i:"e",e:"0.005463",s:"1.000000",o:"75"},{f:"2",t:2.8666668,d:0.13333321,i:"e",e:"1.000000",s:"1.000000",o:"76"},{f:"2",t:2.8666668,d:0.26666665,i:"e",e:"1.000000",r:1,s:"0.000000",o:"54"},{f:"2",t:2.8666668,d:0.13333321,i:"e",e:"1.000000",s:"1.000000",o:"53"},{f:"2",t:2.8666668,d:0.26666665,i:"e",e:"1.000000",r:1,s:"0.000000",o:"77"},{f:"2",t:3,d:8.8000002,i:"e",e:"0.000000",s:"0.000000",o:"52"},{f:"2",t:3,d:0.26666665,i:"e",e:"0.000000",s:"1.000000",o:"53"},{f:"2",t:3,d:0.26666665,i:"e",e:"0.000000",s:"1.000000",o:"76"},{f:"2",t:3.1333334,d:5.6333332,i:"e",e:"1.000000",s:"1.000000",o:"54"},{f:"2",t:3.1333334,d:5.6333332,i:"e",e:"1.000000",s:"1.000000",o:"77"},{f:"2",t:3.2666667,d:8.2666674,i:"e",e:"0.000000",s:"0.000000",o:"53"},{f:"2",t:3.5333333,d:0.66666651,i:"a",e:383,r:1,s:351,o:"78"},{f:"2",t:3.5333333,d:0.66666651,i:"e",e:"1.000000",r:1,s:"0.000000",o:"78"},{f:"2",t:3.5333333,d:0.66666651,i:"a",e:784,r:1,s:752,o:"86"},{f:"2",t:3.5333333,d:0.66666651,i:"e",e:"1.000000",r:1,s:"0.000000",o:"86"},{f:"2",t:3.5333333,d:0.66666651,i:"a",e:625,r:1,s:593,o:"83"},{f:"2",t:3.5333333,d:0.66666651,i:"e",e:"1.000000",r:1,s:"0.000000",o:"83"},{f:"2",t:3.7,d:0.70000005,i:"e",e:"1.000000",r:1,s:"0.000000",o:"84"},{f:"2",t:3.7,d:0.70000005,i:"a",e:546,r:1,s:514,o:"84"},{f:"2",t:3.7,d:0.70000005,i:"a",e:303,r:1,s:271,o:"79"},{f:"2",t:3.7,d:0.70000005,i:"e",e:"1.000000",r:1,s:"0.000000",o:"79"},{f:"2",t:3.7,d:0.70000005,i:"a",e:141,r:1,s:109,o:"81"},{f:"2",t:3.7,d:0.70000005,i:"e",e:"1.000000",r:1,s:"0.000000",o:"81"},{f:"2",t:3.8,d:0.70000005,i:"e",e:"1.000000",r:1,s:"0.000000",o:"85"},{f:"2",t:3.8,d:0.70000005,i:"a",e:705,r:1,s:673,o:"85"},{f:"2",t:3.8666668,d:0.66666651,i:"e",e:"1.000000",r:1,s:"0.000000",o:"82"},{f:"2",t:3.8666668,d:0.66666651,i:"a",e:467,r:1,s:435,o:"82"},{f:"2",t:3.8666668,d:0.66666651,i:"e",e:"1.000000",r:1,s:"0.000000",o:"80"},{f:"2",t:3.8666668,d:0.66666651,i:"a",e:225,r:1,s:193,o:"80"},{f:"2",t:4.1999998,d:4.5,i:"a",e:383,s:383,o:"78"},{f:"2",t:4.1999998,d:6.2666664,i:"e",e:"1.000000",s:"1.000000",o:"78"},{f:"2",t:4.1999998,d:4.5,i:"a",e:784,s:784,o:"86"},{f:"2",t:4.1999998,d:4.5,i:"a",e:625,s:625,o:"83"},{f:"2",t:4.4000001,d:4.2999997,i:"a",e:546,s:546,o:"84"},{f:"2",t:4.4000001,d:4.2999997,i:"a",e:303,s:303,o:"79"},{f:"2",t:4.4000001,d:6.0666661,i:"e",e:"1.000000",s:"1.000000",o:"79"},{f:"2",t:4.4000001,d:4.2999997,i:"a",e:141,s:141,o:"81"},{f:"2",t:4.4000001,d:6.0666661,i:"e",e:"1.000000",s:"1.000000",o:"81"},{f:"2",t:4.5,d:11,i:"e",e:"1.000000",s:"1.000000",o:"85"},{f:"2",t:4.5,d:4.1999998,i:"a",e:705,s:705,o:"85"},{f:"2",t:4.5,d:0.80000019,i:"e",e:"1.000000",r:1,s:"0.000000",o:"55"},{f:"2",t:4.5333333,d:4.1666665,i:"a",e:467,s:467,o:"82"},{f:"2",t:4.5333333,d:5.9333329,i:"e",e:"1.000000",s:"1.000000",o:"80"},{f:"2",t:4.5333333,d:4.1666665,i:"a",e:225,s:225,o:"80"},{f:"2",t:4.9000001,d:0.79999971,i:"e",e:"1.000000",r:1,s:"0.000000",o:"56"},{f:"2",t:5.3000002,d:0.79999971,i:"e",e:"1.000000",r:1,s:"0.000000",o:"57"},{f:"2",t:5.3000002,d:7.0333328,i:"e",e:"1.000000",s:"1.000000",o:"55"},{f:"2",t:5.6999998,d:6.6333332,i:"e",e:"1.000000",s:"1.000000",o:"56"},{f:"2",t:5.6999998,d:0.83333349,i:"e",e:"1.000000",r:1,s:"0.000000",o:"58"},{f:"2",t:6.0999999,d:6.2333331,i:"e",e:"1.000000",s:"1.000000",o:"57"},{f:"2",t:6.0999999,d:0.83333349,i:"e",e:"1.000000",r:1,s:"0.000000",o:"60"},{f:"2",t:6.5333333,d:0.80000019,i:"e",e:"1.000000",r:1,s:"0.000000",o:"61"},{f:"2",t:6.5333333,d:5.7999997,i:"e",e:"1.000000",s:"1.000000",o:"58"},{f:"2",t:6.9333334,d:0.80000019,i:"e",e:"1.000000",r:1,s:"0.000000",o:"62"},{f:"2",t:6.9333334,d:5.3999996,i:"e",e:"1.000000",s:"1.000000",o:"60"},{f:"2",t:7.3333335,d:4.9999995,i:"e",e:"1.000000",s:"1.000000",o:"61"},{f:"2",t:7.3333335,d:0.79999971,i:"e",e:"1.000000",r:1,s:"0.000000",o:"63"},{f:"2",t:7.7333336,d:4.5999994,i:"e",e:"1.000000",s:"1.000000",o:"62"},{f:"2",t:7.7333336,d:0.83333302,i:"e",e:"1.000000",r:1,s:"0.000000",o:"65"},{f:"2",t:8.1333332,d:4.1999998,i:"e",e:"1.000000",s:"1.000000",o:"63"},{f:"2",t:8.5666666,d:3.7666664,i:"e",e:"1.000000",s:"1.000000",o:"65"},{f:"2",t:8.6999998,d:1.333334,i:"b",e:105,r:1,s:91,o:"78"},{f:"2",t:8.6999998,d:1.333334,i:"a",e:704,s:383,o:"78"},{f:"2",t:8.6999998,d:0.80000019,i:"b",e:107,r:1,s:92,o:"83"},{f:"2",t:8.6999998,d:0.80000019,i:"a",e:993,s:625,o:"83"},{f:"2",t:8.6999998,d:0.66666698,i:"b",e:107,r:1,s:90,o:"85"},{f:"2",t:8.6999998,d:0.66666698,i:"a",e:998,s:705,o:"85"},{f:"2",t:8.6999998,d:1.333334,i:"b",e:105,r:1,s:91,o:"80"},{f:"2",t:8.6999998,d:1.333334,i:"a",e:387,s:225,o:"80"},{f:"2",t:8.6999998,d:0.9333334,i:"b",e:107,r:1,s:91,o:"84"},{f:"2",t:8.6999998,d:0.9333334,i:"a",e:1001,s:546,o:"84"},{f:"2",t:8.6999998,d:1.333334,i:"b",e:105,r:1,s:91,o:"81"},{f:"2",t:8.6999998,d:1.333334,i:"a",e:224,s:141,o:"81"},{f:"2",t:8.6999998,d:1.333334,i:"b",e:108,r:1,s:91,o:"82"},{f:"2",t:8.6999998,d:1.333334,i:"a",e:1001,s:467,o:"82"},{f:"2",t:8.6999998,d:0.30000019,i:"b",e:106,r:1,s:91,o:"86"},{f:"2",t:8.6999998,d:0.30000019,i:"a",e:866,s:784,o:"86"},{f:"2",t:8.6999998,d:1.333334,i:"b",e:105,r:1,s:91,o:"79"},{f:"2",t:8.6999998,d:1.333334,i:"a",e:541,s:303,o:"79"},{f:"2",t:8.7333336,d:0.033332825,i:"e",e:"1.000000",r:1,s:"0.000000",o:"88"},{f:"2",t:8.7333336,d:0.033332825,i:"e",e:"1.000000",r:1,s:"0.000000",o:"87"},{f:"2",t:8.7666664,d:0.066666603,i:"e",e:"0.000000",s:"1.000000",o:"54"},{f:"2",t:8.7666664,d:1.333334,i:"e",e:"1.000000",s:"1.000000",o:"88"},{f:"2",t:8.7666664,d:0.066666603,i:"e",e:"0.000000",s:"1.000000",o:"77"},{f:"2",t:8.7666664,d:1.333334,i:"e",e:"1.000000",s:"1.000000",o:"87"},{f:"2",t:8.833333,d:1.2000008,i:"e",e:"0.000000",s:"0.000000",o:"54"},{f:"2",t:8.833333,d:1.2000008,i:"e",e:"0.000000",s:"0.000000",o:"77"},{f:"2",t:10.033334,d:0.43333244,i:"b",e:105,s:105,o:"78"},{f:"2",t:10.033334,d:0.43333244,i:"a",e:704,s:704,o:"78"},{f:"2",t:10.033334,d:0.066666603,i:"e",e:"1.000000",s:"0.000000",o:"54"},{f:"2",t:10.033334,d:0.43333244,i:"b",e:105,s:105,o:"80"},{f:"2",t:10.033334,d:0.43333244,i:"a",e:387,s:387,o:"80"},{f:"2",t:10.033334,d:0.066666603,i:"e",e:"1.000000",s:"0.000000",o:"77"},{f:"2",t:10.033334,d:0.43333244,i:"b",e:105,s:105,o:"81"},{f:"2",t:10.033334,d:0.43333244,i:"a",e:224,s:224,o:"81"},{f:"2",t:10.033334,d:0.43333244,i:"b",e:105,s:105,o:"79"},{f:"2",t:10.033334,d:0.43333244,i:"a",e:541,s:541,o:"79"},{f:"2",t:10.1,d:1.5666666,i:"e",e:"1.000000",s:"1.000000",o:"54"},{f:"2",t:10.1,d:0.033332825,i:"e",e:"0.000000",s:"1.000000",o:"88"},{f:"2",t:10.1,d:0.033332825,i:"e",e:"0.000000",s:"1.000000",o:"87"},{f:"2",t:10.466666,d:0.66666698,i:"b",e:77,s:105,o:"81"},{f:"2",t:10.466666,d:0.66666698,i:"a",e:191,s:224,o:"81"},{f:"2",t:10.466666,d:0.66666698,i:"e",e:"0.000000",s:"1.000000",o:"81"},{f:"2",t:10.466666,d:0.66666698,i:"b",e:77,s:105,o:"79"},{f:"2",t:10.466666,d:0.66666698,i:"a",e:508,s:541,o:"79"},{f:"2",t:10.466666,d:0.66666698,i:"e",e:"0.000000",s:"1.000000",o:"79"},{f:"2",t:10.466666,d:0.66666698,i:"b",e:77,s:105,o:"80"},{f:"2",t:10.466666,d:0.66666698,i:"e",e:"0.000000",s:"1.000000",o:"80"},{f:"2",t:10.466666,d:0.66666698,i:"a",e:354,s:387,o:"80"},{f:"2",t:10.466666,d:0.66666698,i:"b",e:77,s:105,o:"78"},{f:"2",t:10.466666,d:0.66666698,i:"a",e:671,s:704,o:"78"},{f:"2",t:10.466666,d:0.66666698,i:"e",e:"0.000000",s:"1.000000",o:"78"},{f:"2",t:11.533334,d:0.26666641,i:"e",e:"1.000000",s:"0.000000",o:"53"},{f:"2",t:11.666667,d:0.26666641,i:"e",e:"0.000000",s:"1.000000",o:"54"},{f:"2",t:11.8,d:0.13333321,i:"e",e:"1.000000",s:"1.000000",o:"53"},{f:"2",t:11.8,d:0.26666641,i:"e",e:"1.000000",s:"0.000000",o:"52"},{f:"2",t:11.933333,d:0.26666641,i:"e",e:"0.000000",s:"1.000000",o:"53"},{f:"2",t:12.066667,d:0.13333321,i:"e",e:"1.000000",s:"1.000000",o:"52"},{f:"2",t:12.066667,d:0.26666641,i:"e",e:"1.000000",s:"0.000000",o:"51"},{f:"2",t:12.2,d:0.30000019,i:"e",e:"0.000000",s:"1.000000",o:"52"},{f:"2",t:12.333333,d:0.70000076,i:"e",e:"0.000000",s:"1.000000",o:"57"},{f:"2",t:12.333333,d:0.30000019,i:"e",e:"1.000000",s:"0.000000",o:"50"},{f:"2",t:12.333333,d:0.70000076,i:"e",e:"0.000000",s:"1.000000",o:"55"},{f:"2",t:12.333333,d:0.70000076,i:"e",e:"0.000000",s:"1.000000",o:"63"},{f:"2",t:12.333333,d:0.70000076,i:"e",e:"0.000000",s:"1.000000",o:"60"},{f:"2",t:12.333333,d:0.70000076,i:"e",e:"0.000000",s:"1.000000",o:"56"},{f:"2",t:12.333333,d:0.70000076,i:"e",e:"0.000000",s:"1.000000",o:"62"},{f:"2",t:12.333333,d:0.70000076,i:"e",e:"0.000000",s:"1.000000",o:"61"},{f:"2",t:12.333333,d:0.70000076,i:"e",e:"0.000000",s:"1.000000",o:"65"},{f:"2",t:12.333333,d:0.70000076,i:"e",e:"0.000000",s:"1.000000",o:"58"},{f:"2",t:12.333333,d:0.16666698,i:"e",e:"1.000000",s:"1.000000",o:"51"},{f:"2",t:12.5,d:0.26666641,i:"e",e:"0.000000",s:"1.000000",o:"51"},{f:"2",t:12.633333,d:0.13333321,i:"e",e:"1.000000",s:"1.000000",o:"50"},{f:"2",t:12.633333,d:0.26666641,i:"e",e:"1.000000",s:"0.000000",o:"49"},{f:"2",t:12.766666,d:0.26666737,i:"e",e:"0.000000",s:"1.000000",o:"50"},{f:"2",t:12.9,d:0.13333416,i:"e",e:"1.000000",s:"1.000000",o:"49"},{f:"2",t:12.9,d:0.26666737,i:"e",e:"1.000000",s:"0.000000",o:"47"},{f:"2",t:13.033334,d:0.26666641,i:"e",e:"0.000000",s:"1.000000",o:"49"},{f:"2",t:13.566667,d:0.66666698,i:"e",e:"1.000000",r:1,s:"0.000000",o:"89"},{f:"2",t:13.833333,d:0.70000076,i:"e",e:"1.000000",r:1,s:"0.000000",o:"90"},{f:"2",t:14.1,d:0.69999981,i:"e",e:"1.000000",r:1,s:"0.000000",o:"91"},{f:"2",t:14.4,d:0.66666698,i:"e",e:"1.000000",r:1,s:"0.000000",o:"92"},{f:"2",t:14.666667,d:0.66666603,i:"e",e:"1.000000",r:1,s:"0.000000",o:"93"},{f:"2",t:15.5,d:1.3666668,i:"e",e:"0.000000",s:"1.000000",o:"85"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:16.866667}},sceneIndex:1,perspective:"600px",oid:"7",onSceneAnimationCompleteAction:{type:1,sceneOid:"1",transition:2},onSceneUnloadAction:{type:1,sceneOid:"1",transition:2},backgroundColor:"#FFFFFF"}];


	
	var javascripts = [{name:"Audio",source:"function(hypeDocument, element, event) {\n\tvar audio2 = new Audio(\"http://www.mathigon.com/world/resources/Infinity/Hilbert1.mp4\");\n\taudio1.play();\n\taudio2.play();\n}",identifier:"40"}];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("hilbert2_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(false);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

