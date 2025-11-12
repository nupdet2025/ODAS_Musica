gdjs.Intro_9502Code = {};
gdjs.Intro_9502Code.localVariables = [];
gdjs.Intro_9502Code.GDBackgroundObjects1= [];
gdjs.Intro_9502Code.GDBackgroundObjects2= [];
gdjs.Intro_9502Code.GDbtn_9595jogarObjects1= [];
gdjs.Intro_9502Code.GDbtn_9595jogarObjects2= [];
gdjs.Intro_9502Code.GDpainel_959501Objects1= [];
gdjs.Intro_9502Code.GDpainel_959501Objects2= [];
gdjs.Intro_9502Code.GDbtn_9595comecarObjects1= [];
gdjs.Intro_9502Code.GDbtn_9595comecarObjects2= [];
gdjs.Intro_9502Code.GDcharObjects1= [];
gdjs.Intro_9502Code.GDcharObjects2= [];
gdjs.Intro_9502Code.GDbtn_9595nextObjects1= [];
gdjs.Intro_9502Code.GDbtn_9595nextObjects2= [];
gdjs.Intro_9502Code.GDbtn_9595reloadObjects1= [];
gdjs.Intro_9502Code.GDbtn_9595reloadObjects2= [];
gdjs.Intro_9502Code.GDCursorObjects1= [];
gdjs.Intro_9502Code.GDCursorObjects2= [];
gdjs.Intro_9502Code.GDchar_9595professoraObjects1= [];
gdjs.Intro_9502Code.GDchar_9595professoraObjects2= [];
gdjs.Intro_9502Code.GDchar_9595bateristaObjects1= [];
gdjs.Intro_9502Code.GDchar_9595bateristaObjects2= [];
gdjs.Intro_9502Code.GDchar_9595flautistaObjects1= [];
gdjs.Intro_9502Code.GDchar_9595flautistaObjects2= [];
gdjs.Intro_9502Code.GDchar_9595trianguloObjects1= [];
gdjs.Intro_9502Code.GDchar_9595trianguloObjects2= [];
gdjs.Intro_9502Code.GDchar_9595tamborObjects1= [];
gdjs.Intro_9502Code.GDchar_9595tamborObjects2= [];
gdjs.Intro_9502Code.GDchar_9595violaoObjects1= [];
gdjs.Intro_9502Code.GDchar_9595violaoObjects2= [];
gdjs.Intro_9502Code.GDchar_9595pianoObjects1= [];
gdjs.Intro_9502Code.GDchar_9595pianoObjects2= [];
gdjs.Intro_9502Code.GDchar_9595palma_959501Objects1= [];
gdjs.Intro_9502Code.GDchar_9595palma_959501Objects2= [];
gdjs.Intro_9502Code.GDchar_9595palma_959502Objects1= [];
gdjs.Intro_9502Code.GDchar_9595palma_959502Objects2= [];
gdjs.Intro_9502Code.GDchar_9595crowdObjects1= [];
gdjs.Intro_9502Code.GDchar_9595crowdObjects2= [];


gdjs.Intro_9502Code.asyncCallback18101268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_01", false);
}gdjs.Intro_9502Code.localVariables.length = 0;
}
gdjs.Intro_9502Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Intro_9502Code.asyncCallback18101268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9502Code.mapOfGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595jogarObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595comecarObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595nextObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595reloadObjects1Objects = Hashtable.newFrom({"btn_jogar": gdjs.Intro_9502Code.GDbtn_9595jogarObjects1, "btn_comecar": gdjs.Intro_9502Code.GDbtn_9595comecarObjects1, "btn_next": gdjs.Intro_9502Code.GDbtn_9595nextObjects1, "btn_reload": gdjs.Intro_9502Code.GDbtn_9595reloadObjects1});
gdjs.Intro_9502Code.mapOfGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595jogarObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595comecarObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595nextObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595reloadObjects1Objects = Hashtable.newFrom({"btn_jogar": gdjs.Intro_9502Code.GDbtn_9595jogarObjects1, "btn_comecar": gdjs.Intro_9502Code.GDbtn_9595comecarObjects1, "btn_next": gdjs.Intro_9502Code.GDbtn_9595nextObjects1, "btn_reload": gdjs.Intro_9502Code.GDbtn_9595reloadObjects1});
gdjs.Intro_9502Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro_9502Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro_9502Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Intro_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDCursorObjects1[i].hide(false);
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
{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\audio_02.mp3", 2, false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "char");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Intro_9502Code.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9502Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9502Code.GDbtn_9595nextObjects1[k] = gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Intro_9502Code.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 60, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}
{ //Subevents
gdjs.Intro_9502Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_reload"), gdjs.Intro_9502Code.GDbtn_9595reloadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9502Code.GDbtn_9595reloadObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[k] = gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i];
        ++k;
    }
}
gdjs.Intro_9502Code.GDbtn_9595reloadObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char_professora"), gdjs.Intro_9502Code.GDchar_9595professoraObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\audio_02.mp3", 2, false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "char");
}{for(var i = 0, len = gdjs.Intro_9502Code.GDchar_9595professoraObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDchar_9595professoraObjects1[i].getBehavior("Animation").setAnimationName("talk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Intro_9502Code.GDbtn_9595comecarObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs.Intro_9502Code.GDbtn_9595jogarObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Intro_9502Code.GDbtn_9595nextObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_reload"), gdjs.Intro_9502Code.GDbtn_9595reloadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Intro_9502Code.mapOfGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595jogarObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595comecarObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595nextObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595reloadObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i].getVariableNumber(gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i].getVariables().get("isHovered")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[k] = gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9502Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[i].getVariableNumber(gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[i].getVariables().get("isHovered")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[k] = gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Intro_9502Code.GDbtn_9595comecarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9502Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i].getVariableNumber(gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i].getVariables().get("isHovered")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9502Code.GDbtn_9595nextObjects1[k] = gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Intro_9502Code.GDbtn_9595nextObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9502Code.GDbtn_9595reloadObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i].getVariableNumber(gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i].getVariables().get("isHovered")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[k] = gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i];
        ++k;
    }
}
gdjs.Intro_9502Code.GDbtn_9595reloadObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18104212);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Intro_9502Code.GDbtn_9595comecarObjects1 */
/* Reuse gdjs.Intro_9502Code.GDbtn_9595jogarObjects1 */
/* Reuse gdjs.Intro_9502Code.GDbtn_9595nextObjects1 */
/* Reuse gdjs.Intro_9502Code.GDbtn_9595reloadObjects1 */
{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i].returnVariable(gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i].getVariables().get("isHovered")).setNumber(0);
}
for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595comecarObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[i].returnVariable(gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[i].getVariables().get("isHovered")).setNumber(0);
}
for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i].returnVariable(gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i].getVariables().get("isHovered")).setNumber(0);
}
for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595reloadObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i].returnVariable(gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i].getVariables().get("isHovered")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Intro_9502Code.GDbtn_9595comecarObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs.Intro_9502Code.GDbtn_9595jogarObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Intro_9502Code.GDbtn_9595nextObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_reload"), gdjs.Intro_9502Code.GDbtn_9595reloadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Intro_9502Code.mapOfGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595jogarObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595comecarObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595nextObjects1ObjectsGDgdjs_9546Intro_95959502Code_9546GDbtn_95959595reloadObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i].getVariableNumber(gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i].getVariables().get("isHovered")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[k] = gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9502Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[i].getVariableNumber(gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[i].getVariables().get("isHovered")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[k] = gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Intro_9502Code.GDbtn_9595comecarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9502Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i].getVariableNumber(gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i].getVariables().get("isHovered")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9502Code.GDbtn_9595nextObjects1[k] = gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Intro_9502Code.GDbtn_9595nextObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9502Code.GDbtn_9595reloadObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i].getVariableNumber(gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i].getVariables().get("isHovered")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[k] = gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i];
        ++k;
    }
}
gdjs.Intro_9502Code.GDbtn_9595reloadObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18105300);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Intro_9502Code.GDbtn_9595comecarObjects1 */
/* Reuse gdjs.Intro_9502Code.GDbtn_9595jogarObjects1 */
/* Reuse gdjs.Intro_9502Code.GDbtn_9595nextObjects1 */
/* Reuse gdjs.Intro_9502Code.GDbtn_9595reloadObjects1 */
{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i].returnVariable(gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i].getVariables().get("isHovered")).setNumber(1);
}
for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595comecarObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[i].returnVariable(gdjs.Intro_9502Code.GDbtn_9595comecarObjects1[i].getVariables().get("isHovered")).setNumber(1);
}
for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i].returnVariable(gdjs.Intro_9502Code.GDbtn_9595nextObjects1[i].getVariables().get("isHovered")).setNumber(1);
}
for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595reloadObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i].returnVariable(gdjs.Intro_9502Code.GDbtn_9595reloadObjects1[i].getVariables().get("isHovered")).setNumber(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\hover.mp3", false, 20, 1);
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "char") >= 3.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char_professora"), gdjs.Intro_9502Code.GDchar_9595professoraObjects1);
{for(var i = 0, len = gdjs.Intro_9502Code.GDchar_9595professoraObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDchar_9595professoraObjects1[i].getBehavior("Animation").setAnimationName("stop");
}
}}

}


};

gdjs.Intro_9502Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro_9502Code.GDBackgroundObjects1.length = 0;
gdjs.Intro_9502Code.GDBackgroundObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Intro_9502Code.GDcharObjects1.length = 0;
gdjs.Intro_9502Code.GDcharObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595reloadObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595reloadObjects2.length = 0;
gdjs.Intro_9502Code.GDCursorObjects1.length = 0;
gdjs.Intro_9502Code.GDCursorObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595professoraObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595professoraObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595bateristaObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595bateristaObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595flautistaObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595flautistaObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595trianguloObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595trianguloObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595tamborObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595tamborObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595violaoObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595violaoObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595pianoObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595pianoObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595palma_959501Objects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595palma_959501Objects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595palma_959502Objects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595palma_959502Objects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595crowdObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595crowdObjects2.length = 0;

gdjs.Intro_9502Code.eventsList1(runtimeScene);
gdjs.Intro_9502Code.GDBackgroundObjects1.length = 0;
gdjs.Intro_9502Code.GDBackgroundObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Intro_9502Code.GDcharObjects1.length = 0;
gdjs.Intro_9502Code.GDcharObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595reloadObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595reloadObjects2.length = 0;
gdjs.Intro_9502Code.GDCursorObjects1.length = 0;
gdjs.Intro_9502Code.GDCursorObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595professoraObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595professoraObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595bateristaObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595bateristaObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595flautistaObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595flautistaObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595trianguloObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595trianguloObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595tamborObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595tamborObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595violaoObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595violaoObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595pianoObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595pianoObjects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595palma_959501Objects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595palma_959501Objects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595palma_959502Objects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595palma_959502Objects2.length = 0;
gdjs.Intro_9502Code.GDchar_9595crowdObjects1.length = 0;
gdjs.Intro_9502Code.GDchar_9595crowdObjects2.length = 0;


return;

}

gdjs['Intro_9502Code'] = gdjs.Intro_9502Code;
