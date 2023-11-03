/******************************************************************* 
THE CODE BELOW ASSURES NONE OF THE IMAGES BEING RANDOMLY DISPLAYED FROM THE ARRAY WILL REPEAT. 
THERE SHOULD BE NO NEED TO CHANGE ANY OF THE CODE IT THE NEXT SECTION. LEAVE IT ALONE. 
YOU ONLY NEED TO CHANGE THE ARRAYS BELOW. SEE THE COMMENTS BELOW TO FIND OUT WHAT YOU CHANGE.
*******************************************************************/
function ImageList()
{
	this._imageArray = new Array();
	this._imageCount = 0;
	this._currentImage = -1;
}

ImageList.prototype._imageArray;
ImageList.prototype._imageCount;
ImageList.prototype._currentImage;

ImageList.prototype.addImage = function( image )
{
	this._imageArray[ this._imageCount ] = image;
	this._imageCount++;
}

ImageList.prototype.getImage = function()
{
	if ( this._currentImage == -1 )
	{
		this._currentImage = Math.floor( Math.random() * this._imageCount );
	}

	returnValue = this._imageArray[ this._currentImage ];
	
	this._currentImage++;
	if ( this._currentImage >= this._imageCount )
	{
		this._currentImage = 0;
	}
	
	return( returnValue );
}

var rootURL = "http://disney.go.com/disneyvideos/global_synergy_bar/images/";
var topTable = "<div align='center'><table cellspacing='0' cellpadding='0' border='0'><tr><td><img src='http://disney.go.com/disneyvideos/global_synergy_bar/images/synergy_left_box.gif'></td>";
var bottomTable = "<td><img src='http://disney.go.com/disneyvideos/global_synergy_bar/images/synergy_right_box.gif'></td></tr></table></div>";
var bgCellimage = "<td background='http://disney.go.com/disneyvideos/global_synergy_bar/images/synergy_bg.gif'>";

/******************************************************************* 
LEAVE THE CODE ABOVE THIS LINE ALONE. DO NOT ALTER ANYTHING ABOVE THIS POINT. THE CODE BELOW HOLDS THE ARRAYS FOR THE IMAGES AND THEIR LINKING URL. 
BELOW IS THE CODE YOU ALTER TO CHANGE THE IMAGES.
*******************************************************************/




/******************************************************************* 
THE NEXT BLOCK OF CODE CREATES THE IMAGES THEMSELVES. EACH VARIABLE IS APPENDED WITH THE NAME "BOX" TO SIGNIFY THAT THEY ARE A SINGLE PACKAGE, 
HOLDING THE URL AND TRACKING IN ONE SINGLE ITEM. THEY GET REUSED AS NEEDED IN THE ARRAYS SHOWN BELOW.
*******************************************************************/
//var magicalPlacesBOX = bgCellimage+"<a href='http://magicalplacespassport.com/#/home' name='"+trackingExit+"disneymagicalplaces'><img src='"+rootURL+"box-magical-places.gif' alt='Magical Places' border='0'></a><td>"
//var magicalPlacesMillionBOX = bgCellimage+"<a href='http://magicalplacespassport.com/#/sweeps' name='"+trackingExit+"disneymagicalplaces'><img src='"+rootURL+"box-magical-places-1000000.gif' alt='Magical Places' border='0'></a><td>"
var theLittleMermaidBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/littlemermaid/home.html' name='"+trackingExit+"the_little_mermaid'><img src='"+rootURL+"logo-little-mermaid.gif' alt='The Little Mermaid' border='0'></a><td>"
var littleMermaid3BOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/littlemermaid3/' name='"+trackingExit+"little_mermaid_3'><img src='"+rootURL+"logo-little-mermaid-3.gif' alt='Little Mermaid 3' border='0'></a><td>"
var sleepingBeautyBOX = bgCellimage+"<a href='http://adisney.go.com/disneyvideos/animatedfilms/sleepingbeauty/' name='"+trackingExit+"sleepingbeauty'><img src='"+rootURL+"logo-sleeping-beauty.gif' alt='Sleeping Beauty' border='0'></a><td>"
var fairiesBOX = bgCellimage+"<a href='http://disney.go.com/fairies/' name='"+trackingExit+"fairies'><img src='"+rootURL+"logo-disney-fairies.gif' alt='Disney Fairies' border='0'></a><td>"
var disneyPrincessBOX = bgCellimage+"<a href='http://disney.go.com/princess/html/main_iframe.html' name='"+trackingExit+"disney_princess'><img src='"+rootURL+"logo-disney-princess.gif' alt='Disney Princess' border='0'></a><td>"
var the101dalmatiansBOX = bgCellimage+"<a href='"+trackingPrefix+"http://disney.go.com/disneyvideos/animatedfilms/101dalmatians/' name='"+trackingExit+"101_dalmatians'><img src='"+rootURL+"logo-101-dalmatians.gif' alt='101 Dalmatians' border='0'></a><td>"
var junglebookBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/junglebook/' name='"+trackingExit+"junglebook'><img src='"+rootURL+"logo-jungle-book.gif' alt='Jungle Book' border='0'></a><td>"
var junglebook2BOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/junglebook2/' name='"+trackingExit+"junglebook2'><img src='"+rootURL+"logo-jungle-book-2.gif' alt='Jungle Book 2' border='0'></a><td>"
var peterpanBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/peterpan/' name='"+trackingExit+"peterpan'><img src='"+rootURL+"box-peter-pan.gif' alt='Peter Pan' border='0'></a><td>"
var pixarshortsBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/pixarshorts/' name='"+trackingExit+"pixarshorts'><img src='"+rootURL+"box-pixar-shorts.gif' alt='Pixar Shorts' border='0'></a><td>"
var mickeymouseclubhouseBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/mickeymouseclubhouse/home.html' name='"+trackingExit+"mmch_storybook'><img src='"+rootURL+"box-mmch-storybook.gif' alt='Mickey Mouse Clubhouse' border='0'></a><td>"
var pooh100acrehauntBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/myfriendstiggerandpooh/100acrehaunt/index.html' name='"+trackingExit+"100acrehaunt'><img src='"+rootURL+"box-tigger-hundred-acre-haunt.gif' alt='My Friends Tigger & Pooh' border='0'></a><td>"
var littleeinsteinsBOX = bgCellimage+"<a href='http://disney.go.com/littleeinsteins/swf/main.html?OTC-littleurl' name='"+trackingExit+"littleeinsteins_instrument'><img src='"+rootURL+"box-little-einsteins-instrument.gif' alt='Little Einsteins' border='0'></a><td>"
var babyeinsteinBOX = bgCellimage+"<a href='http://www.babyeinstein.com' name='"+trackingExit+"baby_einstein'><img src='"+rootURL+"logo-baby-einstein.gif' alt='Baby Einstein' border='0'></a><td>"
var nightmarebeforeBOX = bgCellimage+"<a href='"+trackingPrefix+"http://disney.go.com/disneyvideos/animatedfilms/nightmarebeforechristmas/' name='"+trackingExit+"nightmare_before_christmas'><img src='"+rootURL+"logo-nightmare-b4-christmas.gif' alt='Nightmare Before Christmas' border='0'></a><td>"
var nationaltreasurebluBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/bluray/index.html?section=title_page&subsection=national_treasure' name='"+trackingExit+"national_treasure_bluray'><img src='"+rootURL+"box-national-treasure.gif' alt='National Treasure' border='0'></a><td>"
var thegameplanBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/liveaction/thegameplan/' name='"+trackingExit+"the_game_plan'><img src='"+rootURL+"box-the-game-plan.gif' alt='The Game Plan' border='0'></a><td>"
var pirates3BOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/liveaction/pirates3/' name='"+trackingExit+"pirates_3'><img src='"+rootURL+"box-pirates-3.gif' alt='Pirates Of The Caribbean: At World's End' border='0'></a><td>"
var aristocatsBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/aristocats/' name='"+trackingExit+"aristocats'><img src='"+rootURL+"logo-aristocats.gif' alt='Aristocats' border='0'></a><td>"
var suitelifelipsynchinBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/television/dvdontv/' name='"+trackingExit+"suite_life_lip_synchin'><img src='"+rootURL+"box-suite-life-lip-synchin.gif' alt='The Suite Life' border='0'></a><td>"
var enchantedBOX = bgCellimage+"<a href='http://adisney.go.com/disneyvideos/liveaction/enchanted/' name='"+trackingExit+"enchanted'><img src='"+rootURL+"box-enchanted.gif' alt='Enchanted' border='0'></a><td>"
var incrediblesBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/incredibles/' name='"+trackingExit+"incredibles'><img src='"+rootURL+"logo-incredibles.gif' alt='The Incredibles' border='0'></a><td>"
var carsBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/cars/' name='"+trackingExit+"cars'><img src='"+rootURL+"logo-cars.gif' alt='Cars' border='0'></a><td>"
var carsBluRayBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/cars/' name='"+trackingExit+"cars_bluray'><img src='"+rootURL+"box-cars-bluray.gif' alt='Cars On Blu-ray&trade;' border='0'></a><td>"
var ratatouilleBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/ratatouille/' name='"+trackingExit+"ratatouille'><img src='"+rootURL+"logo-ratatouille.gif' alt='Ratatouille' border='0'></a><td>"
var ratatouilleCoverBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/ratatouille/' name='"+trackingExit+"ratatouille_box'><img src='"+rootURL+"box-ratatouille.gif' alt='Ratatouille' border='0'></a><td>"
var findingNemoBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/animatedfilms/findingnemo' name='"+trackingExit+"findingnemo'><img src='"+rootURL+"box-findingnemo.gif' alt='Finding Nemo' border='0'></a><td>"
var highschoolmusical2BOX = bgCellimage+"<a href='http://adisney.go.com/disneyvideos/television/highschoolmusical/' name='"+trackingExit+"highschoolmusical_2'><img src='"+rootURL+"box-hsm2.gif' alt='High School Musical 2' border='0'></a><td>"
var hannaBestofbothBluBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/liveaction/hannahmontana/' name='"+trackingExit+"hanna_bestofboth_bluray'><img src='"+rootURL+"box-hanna-bestofboth-bluray.gif' alt='Hannah Montana 3D Blu-ray' border='0'></a><td>"
var hannaBestofbothBOX = bgCellimage+"<a href='http://disney.go.com/disneyvideos/liveaction/hannahmontana/' name='"+trackingExit+"hanna_bestofboth'><img src='"+rootURL+"box-hanna-bestofboth.gif' alt='Hannah Montana 3D DVD' border='0'></a><td>"
var sleepingbeautyBOX = bgCellimage+"<a href='"+trackingPrefix+"http://disney.go.com/disneyvideos/animatedfilms/sleepingbeauty/' name='"+trackingExit+"sleeping_beauty'><img src='"+rootURL+"logo-sleeping-beauty.gif' alt='Sleeping Beauty' border='0'></a><td>"
var wallEBOX = bgCellimage+"<a href='"+trackingPrefix+"http://disney.go.com/disneyvideos/animatedfilms/wall-e/' name='"+trackingExit+"walle'><img src='"+rootURL+"box-wall-e.gif' alt='Wall-E' border='0'></a><td>"
//var dmc93214BOX = bgCellimage+"<a href='http://disney.videos.go.com/General/Acquisition/Index?splash=yes&promoCode=93214'><img src='"+rootURL+"box-dmc-text.gif' alt='Disney Movie Club' border='0'></a><td>"
//var dmc93213BOX = bgCellimage+"<a href='http://disney.videos.go.com/General/Acquisition/Index?splash=yes&promoCode=93213'><img src='"+rootURL+"box-dmc-rat.gif' alt='Disney Movie Club' border='0'></a><td>"
//var dmc93215BOX = bgCellimage+"<a href='http://disney.videos.go.com/General/Acquisition/Index?splash=yes&promoCode=93215'><img src='"+rootURL+"box-dmc-2rats.gif' alt='Disney Movie Club' border='0'></a><td>"
var dmc93214BOX = bgCellimage+"<a href='https://disneymovieclub.go.com/webapp/wcs/stores/servlet/AcquisitionBrowseView?langId=-1&storeId=10001&catalogId=10051&headerText=Bestsellers&offerId=k4eAHhmxeOA%3D&categoryId=10074'><img src='"+rootURL+"box-dmc-text.gif' alt='Disney Movie Club' border='0'></a><td>"
var dmc93213BOX = bgCellimage+"<a href='https://disneymovieclub.go.com/webapp/wcs/stores/servlet/AcquisitionBrowseView?langId=-1&storeId=10001&catalogId=10051&headerText=Bestsellers&offerId=C0D5C%2Fyn1Wo%3D&categoryId=10074'><img src='"+rootURL+"box-dmc-rat.gif' alt='Disney Movie Club' border='0'></a><td>"
var dmc93215BOX = bgCellimage+"<a href='https://disneymovieclub.go.com/webapp/wcs/stores/servlet/AcquisitionBrowseView?langId=-1&storeId=10001&catalogId=10051&headerText=Bestsellers&offerId=RNsGjjm2s5c%3D%3D&categoryId=10074'><img src='"+rootURL+"box-dmc-2rats.gif' alt='Disney Movie Club' border='0'></a><td>"
var cars2BluRayBOX = bgCellimage+"<a href='http://disney.go.com/cars/' name='"+trackingExit+"cars_2_bluray'><img src='"+rootURL+"box-cars-2-bluray.gif' alt='Cars 2 On Blu-ray&trade;' border='0'></a><td>"
var toystory3BluRayBOX = bgCellimage+"<a href='http://disney.go.com/toystory/' name='"+trackingExit+"ts_3_bluray'><img src='"+rootURL+"box-ts3-bluray.gif' alt='Toy Story 3 On Blu-ray&trade;' border='0'></a><td>"
var tangledBluRayBOX = bgCellimage+"<a href='http://adisney.go.com/disneypictures/tangled/' name='"+trackingExit+"tangled_bluray'><img src='"+rootURL+"box-tangled-bluray.gif' alt='Tangled On Blu-ray&trade;' border='0'></a><td>"




/******************************************************************* 
THE NEXT BLOCK OF CODE CREATES THE ARRAYS. THEY ARE BUILT USING THE IMAGE BOXES FROM THE VARIABLES LISTED ABOVE. YOU CAN MIX AND MATCH 
THE "BOX" ITEMS ABOVE IN ANY "ARRAY" LISTED BELOW.
*******************************************************************/

imagesPlutobar = new ImageList();
imagesPlutobar.addImage( theLittleMermaidBOX );
imagesPlutobar.addImage( sleepingBeautyBOX );
imagesPlutobar.addImage( dmc93214BOX );
//imagesPlutobar.addImage( magicalPlacesBOX );

imagesGoofybar = new ImageList();
//imagesGoofybar.addImage( magicalPlacesMillionBOX );
imagesGoofybar.addImage( pixarshortsBOX );
imagesGoofybar.addImage( ratatouilleCoverBOX );

imagesMickeybar = new ImageList();
imagesMickeybar.addImage( mickeymouseclubhouseBOX );
imagesMickeybar.addImage( littleeinsteinsBOX );
imagesMickeybar.addImage( pooh100acrehauntBOX );
imagesMickeybar.addImage( dmc93213BOX );

imagesMinniebar = new ImageList();
imagesMinniebar.addImage( pirates3BOX );
imagesMinniebar.addImage( nationaltreasurebluBOX );
imagesMinniebar.addImage( dmc93213BOX );
//imagesMinniebar.addImage( magicalPlacesMillionBOX );

imagesBuzzbar = new ImageList();
imagesBuzzbar.addImage( the101dalmatiansBOX );
imagesBuzzbar.addImage( junglebook2BOX );
imagesBuzzbar.addImage( aristocatsBOX );
imagesBuzzbar.addImage( dmc93214BOX );

imagesWoodybar = new ImageList();
imagesWoodybar.addImage( littleMermaid3BOX );
imagesWoodybar.addImage( junglebookBOX );
imagesWoodybar.addImage( the101dalmatiansBOX );
imagesWoodybar.addImage( dmc93215BOX );

imagesBullseyebar = new ImageList();
imagesBullseyebar.addImage( the101dalmatiansBOX );
imagesBullseyebar.addImage( junglebook2BOX );
imagesBullseyebar.addImage( suitelifelipsynchinBOX );
imagesBullseyebar.addImage( dmc93215BOX );

imagesDonaldbar = new ImageList();
imagesDonaldbar.addImage( junglebook2BOX );
imagesDonaldbar.addImage( enchantedBOX );
imagesDonaldbar.addImage( dmc93214BOX );

imagesPixarbar = new ImageList();
imagesPixarbar.addImage( incrediblesBOX );
imagesPixarbar.addImage( carsBOX );
imagesPixarbar.addImage( ratatouilleBOX );
//imagesPixarbar.addImage( magicalPlacesBOX );

imagesWallEbar = new ImageList();
imagesWallEbar.addImage( hannaBestofbothBluBOX );
imagesWallEbar.addImage( hannaBestofbothBOX );
imagesWallEbar.addImage( highschoolmusical2BOX );
//imagesWallEbar.addImage( magicalPlacesMillionBOX );

imagesSallybar = new ImageList();
imagesSallybar.addImage( the101dalmatiansBOX );
imagesSallybar.addImage( sleepingbeautyBOX );
imagesSallybar.addImage( nightmarebeforeBOX );
imagesSallybar.addImage( dmc93213BOX );

imagesLillianbar = new ImageList();
imagesLillianbar.addImage( mickeymouseclubhouseBOX );
imagesLillianbar.addImage( babyeinsteinBOX );
imagesLillianbar.addImage( pooh100acrehauntBOX );
//imagesLillianbar.addImage( magicalPlacesMillionBOX );

imagesWaltbar = new ImageList();
//imagesWaltbar.addImage( fairiesBOX );
imagesWaltbar.addImage( littleMermaid3BOX );
imagesWaltbar.addImage( disneyPrincessBOX );
//imagesWaltbar.addImage( magicalPlacesBOX );
imagesWaltbar.addImage( dmc93215BOX );

imagesTronbar = new ImageList();
imagesTronbar.addImage( pixarshortsBOX );
imagesTronbar.addImage( carsBOX );
imagesTronbar.addImage( incrediblesBOX );
imagesTronbar.addImage( wallEBOX );
//imagesTronbar.addImage( magicalPlacesMillionBOX );

imagesDopeybar = new ImageList();
imagesDopeybar.addImage( cars2BluRayBOX );
imagesDopeybar.addImage( toystory3BluRayBOX );
imagesDopeybar.addImage( tangledBluRayBOX );
