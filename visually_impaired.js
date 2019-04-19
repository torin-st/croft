var processedTags = ['p', 'span', 'a', 'h1', 'h2', 'h3', 'li', 'td'];

function addVisuallyImpairedPannel() {
    var parentElem = document.body;
    var wrapper = document.createElement('div');
    var pannel = document.createElement('div');
    var fontContainer = document.createElement('dl');
    var fontDefinition = document.createElement('dt');
    var fontTahoma = document.createElement('dd');
    var fontTimes = document.createElement('dd');
    var fontSizeContainer = document.createElement('dl');
    var fontSizeDefinition = document.createElement('dt');
    var fontSizeSmall = document.createElement('dd');
    var fontSizeMedium = document.createElement('dd');
    var fontSizeBig = document.createElement('dd');
    var pageColorContainer = document.createElement('dl');
    var pageColorDefinition = document.createElement('dt');
    var pageColorBW = document.createElement('dd');
    var pageColorWB = document.createElement('dd');
    var pageColorBB = document.createElement('dd');
    var pageColorBrBi = document.createElement('dd');
    var pageColorGB = document.createElement('dd');
    var letterSpacingContainer = document.createElement('dl');
    var letterSpacingDefinition = document.createElement('dt');
    var letterSpacingStandart = document.createElement('dd');
    var letterSpacingMedium = document.createElement('dd');
    var letterSpacingBig = document.createElement('dd');
    var simpleModeContainer = document.createElement('dl');
    var simpleModeDefinition = document.createElement('dt');
    var menuDefinitionStyle = 'float: left; margin-left:15px;';
    var menuValueStyle = 'float: left; font-weight:normal; margin-left:5px; padding: 0px 2px; border: 1px solid black;';

    wrapper.id = 'viPannelWrapper';
    wrapper.style = 'position:fixed; z-index:9999; width: 100%; height:50px; background: rgb(157,157,157); background: linear-gradient(0deg, rgba(157,157,157,1) 0%, rgba(255,255,255,1) 53%);';
    pannel.id = 'viPannel';
    pannel.style = 'z-index:9999; width:100%; height:50px; margin: 0px auto; font-size:16px; font-weight:bold; display: table-cell; vertical-align: middle;';
    //font
    fontContainer.id = 'viFontContainer';
    fontContainer.style = 'display: inline;';
    fontDefinition.id = 'viFontDefinition';
    fontDefinition.style = menuDefinitionStyle;
    fontDefinition.appendChild(document.createTextNode('Шрифт:'));
    fontTahoma.id = 'viFontTahoma';
    fontTahoma.style = menuValueStyle;
    fontTahoma.onclick = function () { changeFont('tahoma') };
    fontTahoma.appendChild(document.createTextNode('Tahoma'));
    fontTimes.id = 'viFontTimes';
    fontTimes.style = menuValueStyle;
    fontTimes.onclick =  function () { changeFont('times') };
    fontTimes.appendChild(document.createTextNode('Times New Roman'));
    //font size
    fontSizeContainer.id = 'viFontSizeContainer';
    fontSizeContainer.style = 'display: inline;';
    fontSizeDefinition.id = 'viFontSizeDefinition';
    fontSizeDefinition.style = menuDefinitionStyle;
    fontSizeDefinition.appendChild(document.createTextNode('Размер шрифта:'));
    fontSizeSmall.id = 'viFontSizeSmall';
    fontSizeSmall.style = menuValueStyle;
    fontSizeSmall.onclick = function () { changeFontSize('small'); }
    fontSizeSmall.appendChild(document.createTextNode('+'));
    fontSizeMedium.id = 'viFontSizeMedium';
    fontSizeMedium.style = menuValueStyle;
    fontSizeMedium.onclick =  function () { changeFontSize('medium'); }
    fontSizeMedium.appendChild(document.createTextNode('++'));
    fontSizeBig.id = 'viFontSizeBig';
    fontSizeBig.style = menuValueStyle;
    fontSizeBig.onclick = function () { changeFontSize('big'); }
    fontSizeBig.appendChild(document.createTextNode('+++'));
    //font color
    pageColorContainer.id = 'viPageColorContainer';
    pageColorContainer.style = 'display: inline;';
    pageColorDefinition.id = 'viPageColorDefinition';
    pageColorDefinition.style = menuDefinitionStyle;
    pageColorDefinition.appendChild(document.createTextNode('Цвета сайта:'));
    pageColorBW.id = 'viPageColorBW';
    pageColorBW.style = menuValueStyle + ' color: black; background-color: white;';
    pageColorBW.onclick = function () { changePageColor('black-white'); }
    pageColorBW.appendChild(document.createTextNode('Абв'));
    pageColorWB.id = 'viPageColorWB';
    pageColorWB.style = menuValueStyle + ' color: white; background-color: black;';
    pageColorWB.onclick = function () { changePageColor('white-black'); }
    pageColorWB.appendChild(document.createTextNode('Абв'));
    pageColorBB.id = 'viPageColorBB';
    pageColorBB.style = menuValueStyle + ' color: midnightblue; background-color: lightblue;';
    pageColorBB.onclick = function () { changePageColor('blue-blue'); }
    pageColorBB.appendChild(document.createTextNode('Абв'));
    pageColorBrBi.id = 'viPageColorBrBi';
    pageColorBrBi.style = menuValueStyle + ' color: saddlebrown; background-color: cornsilk;';
    pageColorBrBi.onclick = function () { changePageColor('brown-biege'); }
    pageColorBrBi.appendChild(document.createTextNode('Абв'));
    pageColorGB.id = 'viPageColorGB';
    pageColorGB.style = menuValueStyle + ' color: yellowgreen; background-color: saddlebrown;';
    pageColorGB.onclick = function () { changePageColor('green-brown'); }
    pageColorGB.appendChild(document.createTextNode('Абв'));
    //letter-spacing
    letterSpacingContainer.id = 'viLetterSpacingContainer';
    letterSpacingContainer.style = 'display: inline;';
    letterSpacingDefinition.id = 'viLetterSpacingDefinition';
    letterSpacingDefinition.style = menuDefinitionStyle;
    letterSpacingDefinition.appendChild(document.createTextNode('Межбуквенный интервал:'));
    letterSpacingStandart.id = 'viLetterSpacingStandart';
    letterSpacingStandart.style = menuValueStyle;
    letterSpacingStandart.onclick = function () { changeLetterSpacing('standart'); }
    letterSpacingStandart.appendChild(document.createTextNode('+'));
    letterSpacingMedium.id = 'viLetterSpacingMedium';
    letterSpacingMedium.style = menuValueStyle;
    letterSpacingMedium.onclick = function () { changeLetterSpacing('medium'); }
    letterSpacingMedium.appendChild(document.createTextNode('++'));
    letterSpacingBig.id = 'viLetterSpacingBig';
    letterSpacingBig.style = menuValueStyle;
    letterSpacingBig.onclick = function () { changeLetterSpacing('big'); }
    letterSpacingBig.appendChild(document.createTextNode('+++'));
    //simple mode
    simpleModeContainer.id = 'viSimpleModeContainer';
    simpleModeContainer.style = 'display: inline;';
    simpleModeDefinition.id = 'viSimpleModeDefinition';
    simpleModeDefinition.style = menuDefinitionStyle;
    simpleModeDefinition.onclick = function () { activateSimpleMode(); }
    simpleModeDefinition.appendChild(document.createTextNode('Закрыть'));

    fontContainer.appendChild(fontDefinition);
    fontContainer.appendChild(fontTahoma);
    fontContainer.appendChild(fontTimes);

    fontSizeContainer.appendChild(fontSizeDefinition);
    fontSizeContainer.appendChild(fontSizeSmall);
    fontSizeContainer.appendChild(fontSizeMedium);
    fontSizeContainer.appendChild(fontSizeBig);

    pageColorContainer.appendChild(pageColorDefinition);
    pageColorContainer.appendChild(pageColorBW);
    pageColorContainer.appendChild(pageColorWB);
    pageColorContainer.appendChild(pageColorBB);
    pageColorContainer.appendChild(pageColorBrBi);
    pageColorContainer.appendChild(pageColorGB);

    letterSpacingContainer.appendChild(letterSpacingDefinition);
    letterSpacingContainer.appendChild(letterSpacingStandart);
    letterSpacingContainer.appendChild(letterSpacingMedium);
    letterSpacingContainer.appendChild(letterSpacingBig);

    simpleModeContainer.appendChild(simpleModeDefinition);

    pannel.appendChild(fontContainer);
    pannel.appendChild(fontSizeContainer);
    pannel.appendChild(pageColorContainer);
    pannel.appendChild(letterSpacingContainer);
    pannel.appendChild(simpleModeContainer);

    wrapper.appendChild(pannel);
    parentElem.insertBefore(wrapper, parentElem.firstChild);
}

function addVisuallyImpairedButton() {
    var image = document.createElement('img');
    var parentElem = document.body;
    image.id = 'viButton';
    image.onclick = function () { changeDisplayMode(); }
    image.src = 'https://raw.githubusercontent.com/torin-st/croft/master/vimode.png';
    //'обро пожаловать на наш сайт _ Офтальмологический центр _Крофт-Оптика__files/vimode.png';
    image.style = 'position:fixed; z-index:9999; top:45px; right:50px; width: 100px;';
    parentElem.insertBefore(image, parentElem.firstChild);
}

function activateSimpleMode() {
    document.cookie = 'vi_mode=0';
    document.location.reload();
}

function preparePage() { //hide some elements, set up some margins and paddings
    document.getElementsByClassName('big_img').item(0).style.display = 'none';
    document.getElementsByClassName('map').item(0).style.display = 'none';
    document.getElementsByClassName('menu').item(0).style.marginTop = '50px';
    document.getElementsByClassName('menu').item(0).style.marginBottom = '60px';
    document.getElementsByClassName('fon_big').item(0).style.paddingTop = '50px';
}

function activateVisuallyImpairedMode() {
    document.cookie = 'vi_mode=1';
    document.getElementById('viButton').remove();
    preparePage();
    addVisuallyImpairedPannel();
}

function changeDisplayMode() {
    try {
        document.cookie = 'vi_test=hello';
        if (getCookie('vi_test') != 'hello') {
            throw "сайт не может получить доступ к cookie";
        }
        if (getCookie('vi_mode') == 1) {
            activateSimpleMode();
        } else {
            activateVisuallyImpairedMode();
            activateSettings();
        }
    } catch (e) {
        alert('Для корректной работы версии требуется включить cookie! Описание ошибки: ' + e);
    }
}

function activateSettings() {
    var vi_font = getCookie('vi_font');
    var vi_fontSize = getCookie('vi_fontSize');
    var vi_pageColor = getCookie('vi_pageColor');
    var vi_letterSpacing = getCookie('vi_letterSpacing');

    if (vi_font != undefined) {
        changeFont(vi_font);
    }

    if (vi_fontSize != undefined) {
        changeFontSize(vi_fontSize);
    }

    if (vi_pageColor != undefined) {
        changePageColor(vi_pageColor);
    }

    if (vi_letterSpacing != undefined) {
        changeLetterSpacing(vi_letterSpacing);
    }
}

function initDisplayMode() {
    addVisuallyImpairedButton();
    if (getCookie('vi_mode') == 1) {
        activateVisuallyImpairedMode();
        activateSettings();
    }
}

function changeFont(font) {
    var appendStyle;

    switch (font) {
        case 'tahoma':
            appendStyle = 'Tahoma, sans-serif';
            break;
        case 'times':
            appendStyle = 'Times New Roman, serif';
            break;
    }

    for (var i = 0; i < processedTags.length; i++) {
        var elements = document.getElementsByTagName(processedTags[i]);
        for (var j = 0; j < elements.length; j++) {
            elements.item(j).style.fontFamily = appendStyle;
        }
    }

    document.cookie = 'vi_font=' + font;
}

function changeFontSize(fontSize) {
    var appendStyle;

    switch (fontSize) {
        case 'small':
            appendStyle = '16px';
            break;
        case 'medium':
            appendStyle = '20px';
            break;
        case 'big':
            appendStyle = '23px';
            break;
    }

    for (var i = 0; i < processedTags.length; i++) {
        var elements = document.getElementsByTagName(processedTags[i]);
        for (var j = 0; j < elements.length; j++) {
            elements.item(j).style.fontSize = appendStyle;
        }
    }

    document.cookie = 'vi_fontSize=' + fontSize;
}

function changePageColor(pageColor) {
    var appendColorStyle;
    var appendBackgroungColorStyle;

    switch (pageColor) {
        case 'black-white':
            appendColorStyle = 'black';
            appendBackgroungColorStyle = 'white';
            break;
        case 'white-black':
            appendColorStyle = 'white';
            appendBackgroungColorStyle = 'black';
            break;
        case 'blue-blue':
            appendColorStyle = 'midnightblue';
            appendBackgroungColorStyle = 'lightblue';
            break;
        case 'brown-biege':
            appendColorStyle = 'saddlebrown';
            appendBackgroungColorStyle = 'cornsilk';
            break;
        case 'green-brown':
            appendColorStyle = 'yellowgreen';
            appendBackgroungColorStyle = 'saddlebrown';
            break;
    }

    for (var i = 0; i < processedTags.length; i++) {
        var elements = document.getElementsByTagName(processedTags[i]);
        for (var j = 0; j < elements.length; j++) {
            elements.item(j).style.color = appendColorStyle;
            elements.item(j).style.backgroundColor = appendBackgroungColorStyle;
        }
    }

    var container = document.getElementsByClassName('fon_big')[0];
    container.style.color = appendColorStyle;
    container.style.backgroundColor = appendBackgroungColorStyle;
    document.getElementsByClassName('menu').item(0).style.backgroundColor = appendBackgroungColorStyle;
    document.cookie = 'vi_pageColor=' + pageColor;
}

function changeLetterSpacing(letterSpacing) {
    var appendStyle;

    switch (letterSpacing) {
        case 'standart':
            appendStyle = 'normal';
            break;
        case 'medium':
            appendStyle = '3px';
            break;
        case 'big':
            appendStyle = '6px';
            break;
    }

    for (var i = 0; i < processedTags.length; i++) {
        var elements = document.getElementsByTagName(processedTags[i]);
        for (var j = 0; j < elements.length; j++) {
            elements.item(j).style.letterSpacing = appendStyle;
        }
    }

    document.cookie = 'vi_letterSpacing=' + letterSpacing;
}

function getCookie(key) {
    var cookies = document.cookie.split('; ');

    for(var i=0; i<cookies.length; i++) {
        var key_value = cookies[i].split('=');
        if (key_value[0] == key) {
            return key_value[1];
        }
    }
}

window.onload = initDisplayMode();


