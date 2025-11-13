gdjs.Final2Code = {};
gdjs.Final2Code.localVariables = [];
gdjs.Final2Code.GDIntro_9595BackgroundObjects1= [];
gdjs.Final2Code.GDIntro_9595BackgroundObjects2= [];
gdjs.Final2Code.GDIntro_9595BackgroundObjects3= [];
gdjs.Final2Code.GDbtn_9595jogarObjects1= [];
gdjs.Final2Code.GDbtn_9595jogarObjects2= [];
gdjs.Final2Code.GDbtn_9595jogarObjects3= [];
gdjs.Final2Code.GDpainel_959501Objects1= [];
gdjs.Final2Code.GDpainel_959501Objects2= [];
gdjs.Final2Code.GDpainel_959501Objects3= [];
gdjs.Final2Code.GDbtn_9595comecarObjects1= [];
gdjs.Final2Code.GDbtn_9595comecarObjects2= [];
gdjs.Final2Code.GDbtn_9595comecarObjects3= [];
gdjs.Final2Code.GDbtn_9595reloadObjects1= [];
gdjs.Final2Code.GDbtn_9595reloadObjects2= [];
gdjs.Final2Code.GDbtn_9595reloadObjects3= [];
gdjs.Final2Code.GDbtn_9595nextObjects1= [];
gdjs.Final2Code.GDbtn_9595nextObjects2= [];
gdjs.Final2Code.GDbtn_9595nextObjects3= [];
gdjs.Final2Code.GDNewPanelSpriteObjects1= [];
gdjs.Final2Code.GDNewPanelSpriteObjects2= [];
gdjs.Final2Code.GDNewPanelSpriteObjects3= [];
gdjs.Final2Code.GDPainel_959503Objects1= [];
gdjs.Final2Code.GDPainel_959503Objects2= [];
gdjs.Final2Code.GDPainel_959503Objects3= [];
gdjs.Final2Code.GDbtn_9595reiniciarObjects1= [];
gdjs.Final2Code.GDbtn_9595reiniciarObjects2= [];
gdjs.Final2Code.GDbtn_9595reiniciarObjects3= [];
gdjs.Final2Code.GDFireworksObjects1= [];
gdjs.Final2Code.GDFireworksObjects2= [];
gdjs.Final2Code.GDFireworksObjects3= [];
gdjs.Final2Code.GDchar_9595professora2Objects1= [];
gdjs.Final2Code.GDchar_9595professora2Objects2= [];
gdjs.Final2Code.GDchar_9595professora2Objects3= [];
gdjs.Final2Code.GDcrowd_959501Objects1= [];
gdjs.Final2Code.GDcrowd_959501Objects2= [];
gdjs.Final2Code.GDcrowd_959501Objects3= [];
gdjs.Final2Code.GDcrowd_959502Objects1= [];
gdjs.Final2Code.GDcrowd_959502Objects2= [];
gdjs.Final2Code.GDcrowd_959502Objects3= [];
gdjs.Final2Code.GDCursorObjects1= [];
gdjs.Final2Code.GDCursorObjects2= [];
gdjs.Final2Code.GDCursorObjects3= [];
gdjs.Final2Code.GDchar_9595professoraObjects1= [];
gdjs.Final2Code.GDchar_9595professoraObjects2= [];
gdjs.Final2Code.GDchar_9595professoraObjects3= [];
gdjs.Final2Code.GDchar_9595bateristaObjects1= [];
gdjs.Final2Code.GDchar_9595bateristaObjects2= [];
gdjs.Final2Code.GDchar_9595bateristaObjects3= [];
gdjs.Final2Code.GDchar_9595flautistaObjects1= [];
gdjs.Final2Code.GDchar_9595flautistaObjects2= [];
gdjs.Final2Code.GDchar_9595flautistaObjects3= [];
gdjs.Final2Code.GDchar_9595trianguloObjects1= [];
gdjs.Final2Code.GDchar_9595trianguloObjects2= [];
gdjs.Final2Code.GDchar_9595trianguloObjects3= [];
gdjs.Final2Code.GDchar_9595tamborObjects1= [];
gdjs.Final2Code.GDchar_9595tamborObjects2= [];
gdjs.Final2Code.GDchar_9595tamborObjects3= [];
gdjs.Final2Code.GDchar_9595violaoObjects1= [];
gdjs.Final2Code.GDchar_9595violaoObjects2= [];
gdjs.Final2Code.GDchar_9595violaoObjects3= [];
gdjs.Final2Code.GDchar_9595pianoObjects1= [];
gdjs.Final2Code.GDchar_9595pianoObjects2= [];
gdjs.Final2Code.GDchar_9595pianoObjects3= [];
gdjs.Final2Code.GDchar_9595palma_959501Objects1= [];
gdjs.Final2Code.GDchar_9595palma_959501Objects2= [];
gdjs.Final2Code.GDchar_9595palma_959501Objects3= [];
gdjs.Final2Code.GDchar_9595palma_959502Objects1= [];
gdjs.Final2Code.GDchar_9595palma_959502Objects2= [];
gdjs.Final2Code.GDchar_9595palma_959502Objects3= [];
gdjs.Final2Code.GDchar_9595crowdObjects1= [];
gdjs.Final2Code.GDchar_9595crowdObjects2= [];
gdjs.Final2Code.GDchar_9595crowdObjects3= [];


gdjs.Final2Code.asyncCallback21843724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Final2Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("char_professora"), gdjs.Final2Code.GDchar_9595professoraObjects3);
{for(var i = 0, len = gdjs.Final2Code.GDchar_9595professoraObjects3.length ;i < len;++i) {
    gdjs.Final2Code.GDchar_9595professoraObjects3[i].returnVariable(gdjs.Final2Code.GDchar_9595professoraObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}gdjs.Final2Code.localVariables.length = 0;
}
gdjs.Final2Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Final2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Final2Code.asyncCallback21843724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Final2Code.asyncCallback21843356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Final2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro_02", false);
}
{ //Subevents
gdjs.Final2Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Final2Code.localVariables.length = 0;
}
gdjs.Final2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Final2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Final2Code.asyncCallback21843356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Final2Code.mapOfGDgdjs_9546Final2Code_9546GDbtn_95959595jogarObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595nextObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595reloadObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595comecarObjects1Objects = Hashtable.newFrom({"btn_jogar": gdjs.Final2Code.GDbtn_9595jogarObjects1, "btn_next": gdjs.Final2Code.GDbtn_9595nextObjects1, "btn_reload": gdjs.Final2Code.GDbtn_9595reloadObjects1, "btn_comecar": gdjs.Final2Code.GDbtn_9595comecarObjects1});
gdjs.Final2Code.mapOfGDgdjs_9546Final2Code_9546GDbtn_95959595jogarObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595nextObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595reloadObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595comecarObjects1Objects = Hashtable.newFrom({"btn_jogar": gdjs.Final2Code.GDbtn_9595jogarObjects1, "btn_next": gdjs.Final2Code.GDbtn_9595nextObjects1, "btn_reload": gdjs.Final2Code.GDbtn_9595reloadObjects1, "btn_comecar": gdjs.Final2Code.GDbtn_9595comecarObjects1});
gdjs.Final2Code.asyncCallback21847716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Final2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro_01", false);
}gdjs.Final2Code.localVariables.length = 0;
}
gdjs.Final2Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Final2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Final2Code.asyncCallback21847716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Final2Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Final2Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Final2Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Final2Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Final2Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Final2Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char_baterista"), gdjs.Final2Code.GDchar_9595bateristaObjects1);
gdjs.copyArray(runtimeScene.getObjects("char_flautista"), gdjs.Final2Code.GDchar_9595flautistaObjects1);
gdjs.copyArray(runtimeScene.getObjects("char_piano"), gdjs.Final2Code.GDchar_9595pianoObjects1);
gdjs.copyArray(runtimeScene.getObjects("char_professora2"), gdjs.Final2Code.GDchar_9595professora2Objects1);
gdjs.copyArray(runtimeScene.getObjects("char_tambor"), gdjs.Final2Code.GDchar_9595tamborObjects1);
gdjs.copyArray(runtimeScene.getObjects("char_violao"), gdjs.Final2Code.GDchar_9595violaoObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\bgm_music_02.mp3", 1, true, 40, 1);
}{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\audio_06.mp3", 2, false, 100, 1);
}{for(var i = 0, len = gdjs.Final2Code.GDchar_9595pianoObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDchar_9595pianoObjects1[i].getBehavior("Animation").setAnimationName("play");
}
}{for(var i = 0, len = gdjs.Final2Code.GDchar_9595tamborObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDchar_9595tamborObjects1[i].getBehavior("Animation").setAnimationName("play");
}
}{for(var i = 0, len = gdjs.Final2Code.GDchar_9595flautistaObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDchar_9595flautistaObjects1[i].getBehavior("Animation").setAnimationName("play");
}
}{for(var i = 0, len = gdjs.Final2Code.GDchar_9595bateristaObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDchar_9595bateristaObjects1[i].getBehavior("Animation").setAnimationName("play");
}
}{for(var i = 0, len = gdjs.Final2Code.GDchar_9595violaoObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDchar_9595violaoObjects1[i].getBehavior("Animation").setAnimationName("play");
}
}{for(var i = 0, len = gdjs.Final2Code.GDchar_9595professora2Objects1.length ;i < len;++i) {
    gdjs.Final2Code.GDchar_9595professora2Objects1[i].getBehavior("Animation").setAnimationName("play");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Final2Code.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Final2Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Final2Code.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Final2Code.GDbtn_9595nextObjects1[k] = gdjs.Final2Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Final2Code.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 60, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}
{ //Subevents
gdjs.Final2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Final2Code.GDbtn_9595comecarObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs.Final2Code.GDbtn_9595jogarObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Final2Code.GDbtn_9595nextObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_reload"), gdjs.Final2Code.GDbtn_9595reloadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Final2Code.mapOfGDgdjs_9546Final2Code_9546GDbtn_95959595jogarObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595nextObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595reloadObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595comecarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Final2Code.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs.Final2Code.GDbtn_9595jogarObjects1[i].getVariableNumber(gdjs.Final2Code.GDbtn_9595jogarObjects1[i].getVariables().get("isHovered")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Final2Code.GDbtn_9595jogarObjects1[k] = gdjs.Final2Code.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs.Final2Code.GDbtn_9595jogarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Final2Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Final2Code.GDbtn_9595nextObjects1[i].getVariableNumber(gdjs.Final2Code.GDbtn_9595nextObjects1[i].getVariables().get("isHovered")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Final2Code.GDbtn_9595nextObjects1[k] = gdjs.Final2Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Final2Code.GDbtn_9595nextObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Final2Code.GDbtn_9595reloadObjects1.length;i<l;++i) {
    if ( gdjs.Final2Code.GDbtn_9595reloadObjects1[i].getVariableNumber(gdjs.Final2Code.GDbtn_9595reloadObjects1[i].getVariables().get("isHovered")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Final2Code.GDbtn_9595reloadObjects1[k] = gdjs.Final2Code.GDbtn_9595reloadObjects1[i];
        ++k;
    }
}
gdjs.Final2Code.GDbtn_9595reloadObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Final2Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Final2Code.GDbtn_9595comecarObjects1[i].getVariableNumber(gdjs.Final2Code.GDbtn_9595comecarObjects1[i].getVariables().get("isHovered")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Final2Code.GDbtn_9595comecarObjects1[k] = gdjs.Final2Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Final2Code.GDbtn_9595comecarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21844580);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Final2Code.GDbtn_9595comecarObjects1 */
/* Reuse gdjs.Final2Code.GDbtn_9595jogarObjects1 */
/* Reuse gdjs.Final2Code.GDbtn_9595nextObjects1 */
/* Reuse gdjs.Final2Code.GDbtn_9595reloadObjects1 */
{for(var i = 0, len = gdjs.Final2Code.GDbtn_9595jogarObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDbtn_9595jogarObjects1[i].returnVariable(gdjs.Final2Code.GDbtn_9595jogarObjects1[i].getVariables().get("isHovered")).setNumber(1);
}
for(var i = 0, len = gdjs.Final2Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDbtn_9595nextObjects1[i].returnVariable(gdjs.Final2Code.GDbtn_9595nextObjects1[i].getVariables().get("isHovered")).setNumber(1);
}
for(var i = 0, len = gdjs.Final2Code.GDbtn_9595reloadObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDbtn_9595reloadObjects1[i].returnVariable(gdjs.Final2Code.GDbtn_9595reloadObjects1[i].getVariables().get("isHovered")).setNumber(1);
}
for(var i = 0, len = gdjs.Final2Code.GDbtn_9595comecarObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDbtn_9595comecarObjects1[i].returnVariable(gdjs.Final2Code.GDbtn_9595comecarObjects1[i].getVariables().get("isHovered")).setNumber(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\hover.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Final2Code.GDbtn_9595comecarObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs.Final2Code.GDbtn_9595jogarObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Final2Code.GDbtn_9595nextObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_reload"), gdjs.Final2Code.GDbtn_9595reloadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Final2Code.mapOfGDgdjs_9546Final2Code_9546GDbtn_95959595jogarObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595nextObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595reloadObjects1ObjectsGDgdjs_9546Final2Code_9546GDbtn_95959595comecarObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Final2Code.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs.Final2Code.GDbtn_9595jogarObjects1[i].getVariableNumber(gdjs.Final2Code.GDbtn_9595jogarObjects1[i].getVariables().get("isHovered")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Final2Code.GDbtn_9595jogarObjects1[k] = gdjs.Final2Code.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs.Final2Code.GDbtn_9595jogarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Final2Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Final2Code.GDbtn_9595nextObjects1[i].getVariableNumber(gdjs.Final2Code.GDbtn_9595nextObjects1[i].getVariables().get("isHovered")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Final2Code.GDbtn_9595nextObjects1[k] = gdjs.Final2Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Final2Code.GDbtn_9595nextObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Final2Code.GDbtn_9595reloadObjects1.length;i<l;++i) {
    if ( gdjs.Final2Code.GDbtn_9595reloadObjects1[i].getVariableNumber(gdjs.Final2Code.GDbtn_9595reloadObjects1[i].getVariables().get("isHovered")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Final2Code.GDbtn_9595reloadObjects1[k] = gdjs.Final2Code.GDbtn_9595reloadObjects1[i];
        ++k;
    }
}
gdjs.Final2Code.GDbtn_9595reloadObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Final2Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Final2Code.GDbtn_9595comecarObjects1[i].getVariableNumber(gdjs.Final2Code.GDbtn_9595comecarObjects1[i].getVariables().get("isHovered")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Final2Code.GDbtn_9595comecarObjects1[k] = gdjs.Final2Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Final2Code.GDbtn_9595comecarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21845820);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Final2Code.GDbtn_9595comecarObjects1 */
/* Reuse gdjs.Final2Code.GDbtn_9595jogarObjects1 */
/* Reuse gdjs.Final2Code.GDbtn_9595nextObjects1 */
/* Reuse gdjs.Final2Code.GDbtn_9595reloadObjects1 */
{for(var i = 0, len = gdjs.Final2Code.GDbtn_9595jogarObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDbtn_9595jogarObjects1[i].returnVariable(gdjs.Final2Code.GDbtn_9595jogarObjects1[i].getVariables().get("isHovered")).setNumber(0);
}
for(var i = 0, len = gdjs.Final2Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDbtn_9595nextObjects1[i].returnVariable(gdjs.Final2Code.GDbtn_9595nextObjects1[i].getVariables().get("isHovered")).setNumber(0);
}
for(var i = 0, len = gdjs.Final2Code.GDbtn_9595reloadObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDbtn_9595reloadObjects1[i].returnVariable(gdjs.Final2Code.GDbtn_9595reloadObjects1[i].getVariables().get("isHovered")).setNumber(0);
}
for(var i = 0, len = gdjs.Final2Code.GDbtn_9595comecarObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDbtn_9595comecarObjects1[i].returnVariable(gdjs.Final2Code.GDbtn_9595comecarObjects1[i].getVariables().get("isHovered")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_reiniciar"), gdjs.Final2Code.GDbtn_9595reiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Final2Code.GDbtn_9595reiniciarObjects1.length;i<l;++i) {
    if ( gdjs.Final2Code.GDbtn_9595reiniciarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Final2Code.GDbtn_9595reiniciarObjects1[k] = gdjs.Final2Code.GDbtn_9595reiniciarObjects1[i];
        ++k;
    }
}
gdjs.Final2Code.GDbtn_9595reiniciarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Final2Code.GDbtn_9595reiniciarObjects1.length;i<l;++i) {
    if ( gdjs.Final2Code.GDbtn_9595reiniciarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Final2Code.GDbtn_9595reiniciarObjects1[k] = gdjs.Final2Code.GDbtn_9595reiniciarObjects1[i];
        ++k;
    }
}
gdjs.Final2Code.GDbtn_9595reiniciarObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 2);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 3, 0, 2);
}
{ //Subevents
gdjs.Final2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Final2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Final2Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Final2Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Final2Code.GDIntro_9595BackgroundObjects3.length = 0;
gdjs.Final2Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Final2Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Final2Code.GDbtn_9595jogarObjects3.length = 0;
gdjs.Final2Code.GDpainel_959501Objects1.length = 0;
gdjs.Final2Code.GDpainel_959501Objects2.length = 0;
gdjs.Final2Code.GDpainel_959501Objects3.length = 0;
gdjs.Final2Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Final2Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Final2Code.GDbtn_9595comecarObjects3.length = 0;
gdjs.Final2Code.GDbtn_9595reloadObjects1.length = 0;
gdjs.Final2Code.GDbtn_9595reloadObjects2.length = 0;
gdjs.Final2Code.GDbtn_9595reloadObjects3.length = 0;
gdjs.Final2Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Final2Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Final2Code.GDbtn_9595nextObjects3.length = 0;
gdjs.Final2Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Final2Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Final2Code.GDNewPanelSpriteObjects3.length = 0;
gdjs.Final2Code.GDPainel_959503Objects1.length = 0;
gdjs.Final2Code.GDPainel_959503Objects2.length = 0;
gdjs.Final2Code.GDPainel_959503Objects3.length = 0;
gdjs.Final2Code.GDbtn_9595reiniciarObjects1.length = 0;
gdjs.Final2Code.GDbtn_9595reiniciarObjects2.length = 0;
gdjs.Final2Code.GDbtn_9595reiniciarObjects3.length = 0;
gdjs.Final2Code.GDFireworksObjects1.length = 0;
gdjs.Final2Code.GDFireworksObjects2.length = 0;
gdjs.Final2Code.GDFireworksObjects3.length = 0;
gdjs.Final2Code.GDchar_9595professora2Objects1.length = 0;
gdjs.Final2Code.GDchar_9595professora2Objects2.length = 0;
gdjs.Final2Code.GDchar_9595professora2Objects3.length = 0;
gdjs.Final2Code.GDcrowd_959501Objects1.length = 0;
gdjs.Final2Code.GDcrowd_959501Objects2.length = 0;
gdjs.Final2Code.GDcrowd_959501Objects3.length = 0;
gdjs.Final2Code.GDcrowd_959502Objects1.length = 0;
gdjs.Final2Code.GDcrowd_959502Objects2.length = 0;
gdjs.Final2Code.GDcrowd_959502Objects3.length = 0;
gdjs.Final2Code.GDCursorObjects1.length = 0;
gdjs.Final2Code.GDCursorObjects2.length = 0;
gdjs.Final2Code.GDCursorObjects3.length = 0;
gdjs.Final2Code.GDchar_9595professoraObjects1.length = 0;
gdjs.Final2Code.GDchar_9595professoraObjects2.length = 0;
gdjs.Final2Code.GDchar_9595professoraObjects3.length = 0;
gdjs.Final2Code.GDchar_9595bateristaObjects1.length = 0;
gdjs.Final2Code.GDchar_9595bateristaObjects2.length = 0;
gdjs.Final2Code.GDchar_9595bateristaObjects3.length = 0;
gdjs.Final2Code.GDchar_9595flautistaObjects1.length = 0;
gdjs.Final2Code.GDchar_9595flautistaObjects2.length = 0;
gdjs.Final2Code.GDchar_9595flautistaObjects3.length = 0;
gdjs.Final2Code.GDchar_9595trianguloObjects1.length = 0;
gdjs.Final2Code.GDchar_9595trianguloObjects2.length = 0;
gdjs.Final2Code.GDchar_9595trianguloObjects3.length = 0;
gdjs.Final2Code.GDchar_9595tamborObjects1.length = 0;
gdjs.Final2Code.GDchar_9595tamborObjects2.length = 0;
gdjs.Final2Code.GDchar_9595tamborObjects3.length = 0;
gdjs.Final2Code.GDchar_9595violaoObjects1.length = 0;
gdjs.Final2Code.GDchar_9595violaoObjects2.length = 0;
gdjs.Final2Code.GDchar_9595violaoObjects3.length = 0;
gdjs.Final2Code.GDchar_9595pianoObjects1.length = 0;
gdjs.Final2Code.GDchar_9595pianoObjects2.length = 0;
gdjs.Final2Code.GDchar_9595pianoObjects3.length = 0;
gdjs.Final2Code.GDchar_9595palma_959501Objects1.length = 0;
gdjs.Final2Code.GDchar_9595palma_959501Objects2.length = 0;
gdjs.Final2Code.GDchar_9595palma_959501Objects3.length = 0;
gdjs.Final2Code.GDchar_9595palma_959502Objects1.length = 0;
gdjs.Final2Code.GDchar_9595palma_959502Objects2.length = 0;
gdjs.Final2Code.GDchar_9595palma_959502Objects3.length = 0;
gdjs.Final2Code.GDchar_9595crowdObjects1.length = 0;
gdjs.Final2Code.GDchar_9595crowdObjects2.length = 0;
gdjs.Final2Code.GDchar_9595crowdObjects3.length = 0;

gdjs.Final2Code.eventsList3(runtimeScene);
gdjs.Final2Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Final2Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Final2Code.GDIntro_9595BackgroundObjects3.length = 0;
gdjs.Final2Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Final2Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Final2Code.GDbtn_9595jogarObjects3.length = 0;
gdjs.Final2Code.GDpainel_959501Objects1.length = 0;
gdjs.Final2Code.GDpainel_959501Objects2.length = 0;
gdjs.Final2Code.GDpainel_959501Objects3.length = 0;
gdjs.Final2Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Final2Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Final2Code.GDbtn_9595comecarObjects3.length = 0;
gdjs.Final2Code.GDbtn_9595reloadObjects1.length = 0;
gdjs.Final2Code.GDbtn_9595reloadObjects2.length = 0;
gdjs.Final2Code.GDbtn_9595reloadObjects3.length = 0;
gdjs.Final2Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Final2Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Final2Code.GDbtn_9595nextObjects3.length = 0;
gdjs.Final2Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Final2Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Final2Code.GDNewPanelSpriteObjects3.length = 0;
gdjs.Final2Code.GDPainel_959503Objects1.length = 0;
gdjs.Final2Code.GDPainel_959503Objects2.length = 0;
gdjs.Final2Code.GDPainel_959503Objects3.length = 0;
gdjs.Final2Code.GDbtn_9595reiniciarObjects1.length = 0;
gdjs.Final2Code.GDbtn_9595reiniciarObjects2.length = 0;
gdjs.Final2Code.GDbtn_9595reiniciarObjects3.length = 0;
gdjs.Final2Code.GDFireworksObjects1.length = 0;
gdjs.Final2Code.GDFireworksObjects2.length = 0;
gdjs.Final2Code.GDFireworksObjects3.length = 0;
gdjs.Final2Code.GDchar_9595professora2Objects1.length = 0;
gdjs.Final2Code.GDchar_9595professora2Objects2.length = 0;
gdjs.Final2Code.GDchar_9595professora2Objects3.length = 0;
gdjs.Final2Code.GDcrowd_959501Objects1.length = 0;
gdjs.Final2Code.GDcrowd_959501Objects2.length = 0;
gdjs.Final2Code.GDcrowd_959501Objects3.length = 0;
gdjs.Final2Code.GDcrowd_959502Objects1.length = 0;
gdjs.Final2Code.GDcrowd_959502Objects2.length = 0;
gdjs.Final2Code.GDcrowd_959502Objects3.length = 0;
gdjs.Final2Code.GDCursorObjects1.length = 0;
gdjs.Final2Code.GDCursorObjects2.length = 0;
gdjs.Final2Code.GDCursorObjects3.length = 0;
gdjs.Final2Code.GDchar_9595professoraObjects1.length = 0;
gdjs.Final2Code.GDchar_9595professoraObjects2.length = 0;
gdjs.Final2Code.GDchar_9595professoraObjects3.length = 0;
gdjs.Final2Code.GDchar_9595bateristaObjects1.length = 0;
gdjs.Final2Code.GDchar_9595bateristaObjects2.length = 0;
gdjs.Final2Code.GDchar_9595bateristaObjects3.length = 0;
gdjs.Final2Code.GDchar_9595flautistaObjects1.length = 0;
gdjs.Final2Code.GDchar_9595flautistaObjects2.length = 0;
gdjs.Final2Code.GDchar_9595flautistaObjects3.length = 0;
gdjs.Final2Code.GDchar_9595trianguloObjects1.length = 0;
gdjs.Final2Code.GDchar_9595trianguloObjects2.length = 0;
gdjs.Final2Code.GDchar_9595trianguloObjects3.length = 0;
gdjs.Final2Code.GDchar_9595tamborObjects1.length = 0;
gdjs.Final2Code.GDchar_9595tamborObjects2.length = 0;
gdjs.Final2Code.GDchar_9595tamborObjects3.length = 0;
gdjs.Final2Code.GDchar_9595violaoObjects1.length = 0;
gdjs.Final2Code.GDchar_9595violaoObjects2.length = 0;
gdjs.Final2Code.GDchar_9595violaoObjects3.length = 0;
gdjs.Final2Code.GDchar_9595pianoObjects1.length = 0;
gdjs.Final2Code.GDchar_9595pianoObjects2.length = 0;
gdjs.Final2Code.GDchar_9595pianoObjects3.length = 0;
gdjs.Final2Code.GDchar_9595palma_959501Objects1.length = 0;
gdjs.Final2Code.GDchar_9595palma_959501Objects2.length = 0;
gdjs.Final2Code.GDchar_9595palma_959501Objects3.length = 0;
gdjs.Final2Code.GDchar_9595palma_959502Objects1.length = 0;
gdjs.Final2Code.GDchar_9595palma_959502Objects2.length = 0;
gdjs.Final2Code.GDchar_9595palma_959502Objects3.length = 0;
gdjs.Final2Code.GDchar_9595crowdObjects1.length = 0;
gdjs.Final2Code.GDchar_9595crowdObjects2.length = 0;
gdjs.Final2Code.GDchar_9595crowdObjects3.length = 0;


return;

}

gdjs['Final2Code'] = gdjs.Final2Code;
