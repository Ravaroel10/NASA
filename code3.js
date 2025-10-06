gdjs.Opening_32sceneCode = {};
gdjs.Opening_32sceneCode.localVariables = [];
gdjs.Opening_32sceneCode.GDyes_9595bgObjects1= [];
gdjs.Opening_32sceneCode.GDyes_9595bgObjects2= [];
gdjs.Opening_32sceneCode.GDPLAYObjects1= [];
gdjs.Opening_32sceneCode.GDPLAYObjects2= [];
gdjs.Opening_32sceneCode.GDTITLEObjects1= [];
gdjs.Opening_32sceneCode.GDTITLEObjects2= [];
gdjs.Opening_32sceneCode.GD_95951Objects1= [];
gdjs.Opening_32sceneCode.GD_95951Objects2= [];
gdjs.Opening_32sceneCode.GD_95952Objects1= [];
gdjs.Opening_32sceneCode.GD_95952Objects2= [];
gdjs.Opening_32sceneCode.GD_95953Objects1= [];
gdjs.Opening_32sceneCode.GD_95953Objects2= [];
gdjs.Opening_32sceneCode.GD_95954Objects1= [];
gdjs.Opening_32sceneCode.GD_95954Objects2= [];
gdjs.Opening_32sceneCode.GD_95955Objects1= [];
gdjs.Opening_32sceneCode.GD_95955Objects2= [];
gdjs.Opening_32sceneCode.GD_95956Objects1= [];
gdjs.Opening_32sceneCode.GD_95956Objects2= [];
gdjs.Opening_32sceneCode.GD_95957Objects1= [];
gdjs.Opening_32sceneCode.GD_95957Objects2= [];
gdjs.Opening_32sceneCode.GD_95958Objects1= [];
gdjs.Opening_32sceneCode.GD_95958Objects2= [];
gdjs.Opening_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Opening_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Opening_32sceneCode.GDTITLE2Objects1= [];
gdjs.Opening_32sceneCode.GDTITLE2Objects2= [];
gdjs.Opening_32sceneCode.GDEXITObjects1= [];
gdjs.Opening_32sceneCode.GDEXITObjects2= [];
gdjs.Opening_32sceneCode.GDBasicSparksObjects1= [];
gdjs.Opening_32sceneCode.GDBasicSparksObjects2= [];
gdjs.Opening_32sceneCode.GDBasicSparks2Objects1= [];
gdjs.Opening_32sceneCode.GDBasicSparks2Objects2= [];
gdjs.Opening_32sceneCode.GDBasicSparks3Objects1= [];
gdjs.Opening_32sceneCode.GDBasicSparks3Objects2= [];
gdjs.Opening_32sceneCode.GDNewSprite5Objects1= [];
gdjs.Opening_32sceneCode.GDNewSprite5Objects2= [];
gdjs.Opening_32sceneCode.GDBumuObjects1= [];
gdjs.Opening_32sceneCode.GDBumuObjects2= [];
gdjs.Opening_32sceneCode.GDnameboxObjects1= [];
gdjs.Opening_32sceneCode.GDnameboxObjects2= [];
gdjs.Opening_32sceneCode.GDNametextObjects1= [];
gdjs.Opening_32sceneCode.GDNametextObjects2= [];
gdjs.Opening_32sceneCode.GDDialoguetextObjects1= [];
gdjs.Opening_32sceneCode.GDDialoguetextObjects2= [];
gdjs.Opening_32sceneCode.GDdialogueboxObjects1= [];
gdjs.Opening_32sceneCode.GDdialogueboxObjects2= [];
gdjs.Opening_32sceneCode.GDelvaObjects1= [];
gdjs.Opening_32sceneCode.GDelvaObjects2= [];
gdjs.Opening_32sceneCode.GDOrionObjects1= [];
gdjs.Opening_32sceneCode.GDOrionObjects2= [];
gdjs.Opening_32sceneCode.GDzetaObjects1= [];
gdjs.Opening_32sceneCode.GDzetaObjects2= [];
gdjs.Opening_32sceneCode.GDrafaelvaObjects1= [];
gdjs.Opening_32sceneCode.GDrafaelvaObjects2= [];
gdjs.Opening_32sceneCode.GDrafaelObjects1= [];
gdjs.Opening_32sceneCode.GDrafaelObjects2= [];


gdjs.Opening_32sceneCode.asyncCallback8923156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Opening_32sceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Talking scene", false);
}gdjs.Opening_32sceneCode.localVariables.length = 0;
}
gdjs.Opening_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Opening_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Opening_32sceneCode.asyncCallback8923156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Opening_32sceneCode.mapOfGDgdjs_9546Opening_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Opening_32sceneCode.GDNewSpriteObjects1});
gdjs.Opening_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PLAY"), gdjs.Opening_32sceneCode.GDPLAYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GDPLAYObjects1.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GDPLAYObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GDPLAYObjects1[k] = gdjs.Opening_32sceneCode.GDPLAYObjects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GDPLAYObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GDPLAYObjects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GDPLAYObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDPLAYObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PLAY"), gdjs.Opening_32sceneCode.GDPLAYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GDPLAYObjects1.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GDPLAYObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GDPLAYObjects1[k] = gdjs.Opening_32sceneCode.GDPLAYObjects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GDPLAYObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}
{ //Subevents
gdjs.Opening_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs.Opening_32sceneCode.GD_95951Objects1);
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95951Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95951Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95951Objects1[i].getPointX("")) - 10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs.Opening_32sceneCode.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GD_95951Objects1.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GD_95951Objects1[i].getX() <= -((gdjs.Opening_32sceneCode.GD_95951Objects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GD_95951Objects1[k] = gdjs.Opening_32sceneCode.GD_95951Objects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GD_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GD_95951Objects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95951Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95951Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95951Objects1[i].getWidth()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs.Opening_32sceneCode.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GD_95952Objects1.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GD_95952Objects1[i].getX() <= -((gdjs.Opening_32sceneCode.GD_95952Objects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GD_95952Objects1[k] = gdjs.Opening_32sceneCode.GD_95952Objects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GD_95952Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GD_95952Objects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95952Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95952Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95952Objects1[i].getWidth()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs.Opening_32sceneCode.GD_95952Objects1);
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95952Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95952Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95952Objects1[i].getPointX("")) - 8);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs.Opening_32sceneCode.GD_95953Objects1);
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95953Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95953Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95953Objects1[i].getPointX("")) - 6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs.Opening_32sceneCode.GD_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GD_95953Objects1.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GD_95953Objects1[i].getX() <= -((gdjs.Opening_32sceneCode.GD_95953Objects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GD_95953Objects1[k] = gdjs.Opening_32sceneCode.GD_95953Objects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GD_95953Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GD_95953Objects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95953Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95953Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95953Objects1[i].getWidth()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs.Opening_32sceneCode.GD_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GD_95954Objects1.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GD_95954Objects1[i].getX() <= -((gdjs.Opening_32sceneCode.GD_95954Objects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GD_95954Objects1[k] = gdjs.Opening_32sceneCode.GD_95954Objects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GD_95954Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GD_95954Objects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95954Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95954Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95954Objects1[i].getWidth()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs.Opening_32sceneCode.GD_95954Objects1);
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95954Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95954Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95954Objects1[i].getPointX("")) - 4);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("_5"), gdjs.Opening_32sceneCode.GD_95955Objects1);
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95955Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95955Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95955Objects1[i].getPointX("")) - 4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_5"), gdjs.Opening_32sceneCode.GD_95955Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GD_95955Objects1.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GD_95955Objects1[i].getX() <= -((gdjs.Opening_32sceneCode.GD_95955Objects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GD_95955Objects1[k] = gdjs.Opening_32sceneCode.GD_95955Objects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GD_95955Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GD_95955Objects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95955Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95955Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95955Objects1[i].getWidth()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_6"), gdjs.Opening_32sceneCode.GD_95956Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GD_95956Objects1.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GD_95956Objects1[i].getX() <= -((gdjs.Opening_32sceneCode.GD_95956Objects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GD_95956Objects1[k] = gdjs.Opening_32sceneCode.GD_95956Objects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GD_95956Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GD_95956Objects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95956Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95956Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95956Objects1[i].getWidth()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("_6"), gdjs.Opening_32sceneCode.GD_95956Objects1);
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95956Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95956Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95956Objects1[i].getPointX("")) - 2);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("_7"), gdjs.Opening_32sceneCode.GD_95957Objects1);
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95957Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95957Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95957Objects1[i].getPointX("")) - 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_7"), gdjs.Opening_32sceneCode.GD_95957Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GD_95957Objects1.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GD_95957Objects1[i].getX() <= -((gdjs.Opening_32sceneCode.GD_95957Objects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GD_95957Objects1[k] = gdjs.Opening_32sceneCode.GD_95957Objects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GD_95957Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GD_95957Objects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GD_95957Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GD_95957Objects1[i].setX((gdjs.Opening_32sceneCode.GD_95957Objects1[i].getWidth()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EXIT"), gdjs.Opening_32sceneCode.GDEXITObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GDEXITObjects1.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GDEXITObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GDEXITObjects1[k] = gdjs.Opening_32sceneCode.GDEXITObjects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GDEXITObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GDEXITObjects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GDEXITObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDEXITObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EXIT"), gdjs.Opening_32sceneCode.GDEXITObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GDEXITObjects1.length;i<l;++i) {
    if ( !(gdjs.Opening_32sceneCode.GDEXITObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GDEXITObjects1[k] = gdjs.Opening_32sceneCode.GDEXITObjects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GDEXITObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GDEXITObjects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GDEXITObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDEXITObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PLAY"), gdjs.Opening_32sceneCode.GDPLAYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GDPLAYObjects1.length;i<l;++i) {
    if ( !(gdjs.Opening_32sceneCode.GDPLAYObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GDPLAYObjects1[k] = gdjs.Opening_32sceneCode.GDPLAYObjects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GDPLAYObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GDPLAYObjects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GDPLAYObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDPLAYObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Opening_32sceneCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GDNewSpriteObjects1[k] = gdjs.Opening_32sceneCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13117132);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32sceneCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Opening_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDNewSpriteObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bintang");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "bintang") >= 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13117876);
}
}
if (isConditionTrue_0) {
gdjs.Opening_32sceneCode.GDNewSpriteObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Opening_32sceneCode.mapOfGDgdjs_9546Opening_959532sceneCode_9546GDNewSpriteObjects1Objects, 784, 40, "");
}{for(var i = 0, len = gdjs.Opening_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDNewSpriteObjects1[i].setZOrder(2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bintang");
}{for(var i = 0, len = gdjs.Opening_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Resizable").setWidth(480);
}
}{for(var i = 0, len = gdjs.Opening_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Resizable").setHeight(553);
}
}}

}


};

gdjs.Opening_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Opening_32sceneCode.GDyes_9595bgObjects1.length = 0;
gdjs.Opening_32sceneCode.GDyes_9595bgObjects2.length = 0;
gdjs.Opening_32sceneCode.GDPLAYObjects1.length = 0;
gdjs.Opening_32sceneCode.GDPLAYObjects2.length = 0;
gdjs.Opening_32sceneCode.GDTITLEObjects1.length = 0;
gdjs.Opening_32sceneCode.GDTITLEObjects2.length = 0;
gdjs.Opening_32sceneCode.GD_95951Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95951Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95952Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95952Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95953Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95953Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95954Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95954Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95955Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95955Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95956Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95956Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95957Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95957Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95958Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95958Objects2.length = 0;
gdjs.Opening_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Opening_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Opening_32sceneCode.GDTITLE2Objects1.length = 0;
gdjs.Opening_32sceneCode.GDTITLE2Objects2.length = 0;
gdjs.Opening_32sceneCode.GDEXITObjects1.length = 0;
gdjs.Opening_32sceneCode.GDEXITObjects2.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparksObjects1.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparksObjects2.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparks2Objects1.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparks2Objects2.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparks3Objects1.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparks3Objects2.length = 0;
gdjs.Opening_32sceneCode.GDNewSprite5Objects1.length = 0;
gdjs.Opening_32sceneCode.GDNewSprite5Objects2.length = 0;
gdjs.Opening_32sceneCode.GDBumuObjects1.length = 0;
gdjs.Opening_32sceneCode.GDBumuObjects2.length = 0;
gdjs.Opening_32sceneCode.GDnameboxObjects1.length = 0;
gdjs.Opening_32sceneCode.GDnameboxObjects2.length = 0;
gdjs.Opening_32sceneCode.GDNametextObjects1.length = 0;
gdjs.Opening_32sceneCode.GDNametextObjects2.length = 0;
gdjs.Opening_32sceneCode.GDDialoguetextObjects1.length = 0;
gdjs.Opening_32sceneCode.GDDialoguetextObjects2.length = 0;
gdjs.Opening_32sceneCode.GDdialogueboxObjects1.length = 0;
gdjs.Opening_32sceneCode.GDdialogueboxObjects2.length = 0;
gdjs.Opening_32sceneCode.GDelvaObjects1.length = 0;
gdjs.Opening_32sceneCode.GDelvaObjects2.length = 0;
gdjs.Opening_32sceneCode.GDOrionObjects1.length = 0;
gdjs.Opening_32sceneCode.GDOrionObjects2.length = 0;
gdjs.Opening_32sceneCode.GDzetaObjects1.length = 0;
gdjs.Opening_32sceneCode.GDzetaObjects2.length = 0;
gdjs.Opening_32sceneCode.GDrafaelvaObjects1.length = 0;
gdjs.Opening_32sceneCode.GDrafaelvaObjects2.length = 0;
gdjs.Opening_32sceneCode.GDrafaelObjects1.length = 0;
gdjs.Opening_32sceneCode.GDrafaelObjects2.length = 0;

gdjs.Opening_32sceneCode.eventsList1(runtimeScene);
gdjs.Opening_32sceneCode.GDyes_9595bgObjects1.length = 0;
gdjs.Opening_32sceneCode.GDyes_9595bgObjects2.length = 0;
gdjs.Opening_32sceneCode.GDPLAYObjects1.length = 0;
gdjs.Opening_32sceneCode.GDPLAYObjects2.length = 0;
gdjs.Opening_32sceneCode.GDTITLEObjects1.length = 0;
gdjs.Opening_32sceneCode.GDTITLEObjects2.length = 0;
gdjs.Opening_32sceneCode.GD_95951Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95951Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95952Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95952Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95953Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95953Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95954Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95954Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95955Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95955Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95956Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95956Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95957Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95957Objects2.length = 0;
gdjs.Opening_32sceneCode.GD_95958Objects1.length = 0;
gdjs.Opening_32sceneCode.GD_95958Objects2.length = 0;
gdjs.Opening_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Opening_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Opening_32sceneCode.GDTITLE2Objects1.length = 0;
gdjs.Opening_32sceneCode.GDTITLE2Objects2.length = 0;
gdjs.Opening_32sceneCode.GDEXITObjects1.length = 0;
gdjs.Opening_32sceneCode.GDEXITObjects2.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparksObjects1.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparksObjects2.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparks2Objects1.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparks2Objects2.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparks3Objects1.length = 0;
gdjs.Opening_32sceneCode.GDBasicSparks3Objects2.length = 0;
gdjs.Opening_32sceneCode.GDNewSprite5Objects1.length = 0;
gdjs.Opening_32sceneCode.GDNewSprite5Objects2.length = 0;
gdjs.Opening_32sceneCode.GDBumuObjects1.length = 0;
gdjs.Opening_32sceneCode.GDBumuObjects2.length = 0;
gdjs.Opening_32sceneCode.GDnameboxObjects1.length = 0;
gdjs.Opening_32sceneCode.GDnameboxObjects2.length = 0;
gdjs.Opening_32sceneCode.GDNametextObjects1.length = 0;
gdjs.Opening_32sceneCode.GDNametextObjects2.length = 0;
gdjs.Opening_32sceneCode.GDDialoguetextObjects1.length = 0;
gdjs.Opening_32sceneCode.GDDialoguetextObjects2.length = 0;
gdjs.Opening_32sceneCode.GDdialogueboxObjects1.length = 0;
gdjs.Opening_32sceneCode.GDdialogueboxObjects2.length = 0;
gdjs.Opening_32sceneCode.GDelvaObjects1.length = 0;
gdjs.Opening_32sceneCode.GDelvaObjects2.length = 0;
gdjs.Opening_32sceneCode.GDOrionObjects1.length = 0;
gdjs.Opening_32sceneCode.GDOrionObjects2.length = 0;
gdjs.Opening_32sceneCode.GDzetaObjects1.length = 0;
gdjs.Opening_32sceneCode.GDzetaObjects2.length = 0;
gdjs.Opening_32sceneCode.GDrafaelvaObjects1.length = 0;
gdjs.Opening_32sceneCode.GDrafaelvaObjects2.length = 0;
gdjs.Opening_32sceneCode.GDrafaelObjects1.length = 0;
gdjs.Opening_32sceneCode.GDrafaelObjects2.length = 0;


return;

}

gdjs['Opening_32sceneCode'] = gdjs.Opening_32sceneCode;
